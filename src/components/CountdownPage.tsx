import { useEffect, useState } from "react";
import FloatingPetals from "./FloatingPetals";

interface CountdownPageProps {
  targetDate: Date;
  onComplete: () => void;
}

const CountdownPage = ({ targetDate, onComplete }: CountdownPageProps) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [blooming, setBlooming] = useState(false);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setBlooming(true);
        setTimeout(() => onComplete(), 2000);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [targetDate, onComplete]);

  if (blooming) {
    return (
      <div className="fixed inset-0 z-40 flex items-center justify-center bg-background">
        <div className="animate-bloom">
          <svg width="120" height="120" viewBox="0 0 120 120">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
              <ellipse
                key={r}
                cx="60" cy="30" rx="18" ry="28"
                fill="hsl(345 70% 85%)"
                fillOpacity={0.7}
                transform={`rotate(${r} 60 60)`}
              />
            ))}
            <circle cx="60" cy="60" r="14" fill="hsl(40 80% 85%)" />
          </svg>
        </div>
      </div>
    );
  }

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div
      className="fixed inset-0 z-30 flex flex-col items-center justify-center px-6"
      style={{
        background: "linear-gradient(180deg, hsl(30 50% 97%) 0%, hsl(270 40% 92%) 50%, hsl(350 80% 92%) 100%)",
      }}
    >
      <FloatingPetals count={15} />

      {/* Decorative floral frame corners */}
      <div className="absolute top-6 left-6 opacity-30">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path d="M0 60 Q0 0 60 0" stroke="hsl(345 55% 70%)" fill="none" strokeWidth="2" />
          <circle cx="10" cy="10" r="5" fill="hsl(345 70% 85%)" fillOpacity={0.5} />
        </svg>
      </div>
      <div className="absolute top-6 right-6 opacity-30 scale-x-[-1]">
        <svg width="60" height="60" viewBox="0 0 60 60">
          <path d="M0 60 Q0 0 60 0" stroke="hsl(345 55% 70%)" fill="none" strokeWidth="2" />
          <circle cx="10" cy="10" r="5" fill="hsl(345 70% 85%)" fillOpacity={0.5} />
        </svg>
      </div>

      {/* Title text */}
      <p className="relative z-20 font-display text-xl md:text-2xl text-foreground text-center mb-10 animate-float-gentle max-w-xs">
        Every second brings me closer to celebrating you 🌸
      </p>

      {/* Countdown boxes */}
      <div className="relative z-20 grid grid-cols-4 gap-3 max-w-sm w-full">
        {units.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col items-center p-3 rounded-2xl bg-card/80 backdrop-blur-sm animate-glow-pulse"
          >
            <span className="font-display text-4xl md:text-5xl text-primary leading-none">
              {String(value).padStart(2, "0")}
            </span>
            <span className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom floral decoration */}
      <div className="absolute bottom-8 flex gap-2 opacity-40">
        {[0, 1, 2, 3, 4].map((i) => (
          <svg key={i} width="20" height="20" viewBox="0 0 20 20" className="animate-float-gentle" style={{ animationDelay: `${i * 0.5}s` }}>
            <path d="M10 0C10 0 20 8 10 20C0 8 10 0 10 0Z" fill="hsl(345 55% 70%)" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default CountdownPage;
