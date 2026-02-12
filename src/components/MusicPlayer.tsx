import { useRef, useState, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  // Attempt autoplay
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.3;
    const tryPlay = () => {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    };
    tryPlay();
    const handleClick = () => {
      if (!playing) tryPlay();
      document.removeEventListener("click", handleClick);
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <audio ref={audioRef} loop preload="auto">
        {/* Add your music file URL here */}
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-glow-pulse"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary">
          {/* Flower-shaped icon */}
          {[0, 60, 120, 180, 240, 300].map((r) => (
            <ellipse
              key={r}
              cx="12" cy="6" rx="3" ry="5"
              fill="currentColor"
              fillOpacity={playing ? 0.8 : 0.4}
              transform={`rotate(${r} 12 12)`}
            />
          ))}
          <circle cx="12" cy="12" r="3" fill="hsl(40 80% 80%)" />
        </svg>
        {playing && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
