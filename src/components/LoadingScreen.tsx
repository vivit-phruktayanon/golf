import { useEffect, useState } from "react";
import loadingScene from "@/assets/loading-scene.jpg";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [phase, setPhase] = useState(0); // 0: walking, 1: together, 2: fade out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 2500);
    const t2 = setTimeout(() => setPhase(2), 4500);
    const t3 = setTimeout(() => onComplete(), 5500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center transition-opacity duration-1000 ${
        phase === 2 ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(180deg, hsl(30 50% 97%) 0%, hsl(350 80% 92%) 50%, hsl(20 80% 88%) 100%)",
      }}
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={loadingScene}
          alt=""
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 60%, transparent 20%, hsl(30 50% 97% / 0.5) 70%)"
        }} />
      </div>

      {/* Sparkles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${10 + Math.random() * 60}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5Z"
              fill="hsl(40 80% 80%)"
              fillOpacity={0.8}
            />
          </svg>
        </div>
      ))}

      {/* Floating petals in loading */}
      {Array.from({ length: 8 }).map((_, i) => (
        <svg
          key={`lp-${i}`}
          className="absolute animate-petal-fall"
          style={{
            left: `${Math.random() * 100}%`,
            width: 10 + Math.random() * 12,
            height: 10 + Math.random() * 12,
            animationDuration: `${6 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: 0.6,
          }}
          viewBox="0 0 20 20"
        >
          <path d="M10 0C10 0 20 8 10 20C0 8 10 0 10 0Z" fill="hsl(345 70% 85%)" fillOpacity={0.6} />
        </svg>
      ))}

      {/* Loading text */}
      <div className="relative z-10 mt-auto mb-24 px-8 text-center">
        <p className="font-display text-2xl text-foreground animate-float-gentle">
          Preparing something blooming just for you 🌷
        </p>
        <div className="mt-6 flex justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              style={{
                animation: "float-gentle 1.2s ease-in-out infinite",
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
