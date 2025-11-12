import { useEffect, useRef, useState } from 'react';

interface VideoPlayerHeroProps {
  videoId: string;
  accountId: string;
}

export default function VideoPlayerHero({ videoId, accountId }: VideoPlayerHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Carrega imediatamente sem Intersection Observer (é LCP)
    const script = document.createElement('script');
    script.src = `https://scripts.converteai.net/${accountId}/players/${videoId}/player.js`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [videoId, accountId]);

  return (
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden shadow-2xl">
      {!isLoaded && (
        <div 
          className="aspect-video flex items-center justify-center"
          style={{
            backgroundImage: 'url(/video-poster.svg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-white/90 font-medium">Carregando vídeo...</p>
          </div>
        </div>
      )}
      <div
        id={`vid_${videoId}`}
        style={{ 
          position: 'relative', 
          paddingTop: '56.25%',
          display: isLoaded ? 'block' : 'none'
        }}
      >
        <iframe
          id={`panda-${videoId}`}
          src={`https://player-vz-d8c67f45-3b9.tv.pandavideo.com.br/embed/?v=${videoId}`}
          style={{
            border: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture"
          allowFullScreen
          width="100%"
          height="100%"
          loading="eager"
          title="Vídeo PedagoMais"
        />
      </div>
    </div>
  );
}
