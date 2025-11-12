import { useEffect, useRef, useState } from 'react';

interface VideoPlayerProps {
  videoId: string;
  accountId: string;
}

export default function VideoPlayer({ videoId, accountId }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || isLoaded) return;

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
  }, [isVisible, videoId, accountId, isLoaded]);

  return (
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden shadow-2xl">
      {!isLoaded && (
        <div className="aspect-video bg-neutral-dark/10 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-sm text-gray-600">Carregando vídeo...</p>
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
      />
    </div>
  );
}
