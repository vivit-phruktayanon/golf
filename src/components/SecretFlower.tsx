import { useState } from "react";

const SecretFlower = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <>
      {/* Hidden flower button tucked in the corner */}
      <button
        onClick={() => setRevealed(true)}
        className="opacity-20 hover:opacity-60 transition-opacity duration-700 cursor-default"
        aria-label="Secret"
        title=""
      >
        <svg width="18" height="18" viewBox="0 0 20 20">
          {[0, 72, 144, 216, 288].map((r) => (
            <ellipse
              key={r}
              cx="10" cy="4" rx="3" ry="5"
              fill="hsl(345 70% 85%)"
              transform={`rotate(${r} 10 10)`}
            />
          ))}
          <circle cx="10" cy="10" r="3" fill="hsl(40 80% 85%)" />
        </svg>
      </button>

      {/* Secret message modal */}
      {revealed && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/30 backdrop-blur-sm"
          onClick={() => setRevealed(false)}
        >
          <div
            className="animate-bloom bg-card/95 backdrop-blur-md rounded-3xl p-10 mx-6 max-w-sm text-center shadow-2xl border border-petal/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Flower decoration */}
            <div className="flex justify-center mb-4">
              <svg width="48" height="48" viewBox="0 0 48 48">
                {[0, 45, 90, 135, 180, 225, 270, 315].map((r) => (
                  <ellipse
                    key={r}
                    cx="24" cy="10" rx="7" ry="12"
                    fill="hsl(345 70% 85%)"
                    fillOpacity={0.7}
                    transform={`rotate(${r} 24 24)`}
                  />
                ))}
                <circle cx="24" cy="24" r="7" fill="hsl(40 80% 85%)" />
              </svg>
            </div>
            <p className="font-display text-3xl text-foreground leading-relaxed">
              I will always choose you 🌷
            </p>
            <button
              onClick={() => setRevealed(false)}
              className="mt-6 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ✨ close ✨
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SecretFlower;
