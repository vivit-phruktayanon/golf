import { useEffect, useState } from "react";

interface Petal {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  type: number;
}

const FloatingPetals = ({ count = 20 }: { count?: number }) => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated: Petal[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 16,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.5,
      type: Math.floor(Math.random() * 3),
    }));
    setPetals(generated);
  }, [count]);

  const petalPaths = [
    "M10 0C10 0 20 8 10 20C0 8 10 0 10 0Z",
    "M8 0C12 4 16 10 8 18C0 10 4 4 8 0Z",
    "M10 0Q20 10 10 20Q0 10 10 0Z",
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((p) => (
        <svg
          key={p.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            opacity: p.opacity,
          }}
          viewBox="0 0 20 20"
        >
          <path
            d={petalPaths[p.type]}
            fill="hsl(345 70% 85%)"
            fillOpacity={0.7}
          />
        </svg>
      ))}
    </div>
  );
};

export default FloatingPetals;
