import { useEffect, useRef } from 'react';

interface VideoPlayerProps {
  videoId: string;
  accountId: string;
}

export default function VideoPlayer({ videoId, accountId }: VideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const s = document.createElement('script');
    s.src = `https://scripts.converteai.net/${accountId}/players/${videoId}/v4/player.js`;
    s.async = true;
    document.head.appendChild(s);
  }, [videoId, accountId]);

  return (
    <div ref={containerRef} className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto" style={{ maxWidth: '400px', width: '100%', backgroundColor: 'transparent' }}>
      <vturb-smartplayer
        id={`vid-${videoId}`}
        style={{ display: 'block', margin: '0 auto', width: '100%', maxWidth: '400px', backgroundColor: 'transparent' }}
      />
    </div>
  );
}
