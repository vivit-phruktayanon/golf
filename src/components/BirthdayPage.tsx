import { useState } from "react";
import heroGarden from "@/assets/hero-garden.jpg";
import FloatingPetals from "./FloatingPetals";
import MusicPlayer from "./MusicPlayer";
import SecretFlower from "./SecretFlower";

const memories = [
  { id: 1, src: "/images/memory1.jpg", caption: "Our first photo together 🌸" },
  { id: 2, src: "/images/memory2.jpg", caption: "That beautiful sunset day 🌅" },
  { id: 3, src: "/images/memory3.jpg", caption: "Laughing until our cheeks hurt 🤍" },
  { id: 4, src: "/images/memory4.jpg", caption: "A day I'll never forget 💕" },
  { id: 5, src: "/images/memory5.jpg", caption: "You + Me + Happiness 🌷" },
  { id: 6, src: "/images/memory6.jpg", caption: "My favorite memory 💫" },
  { id: 1, src: "/images/memory7.jpg", caption: "Our first photo together 🌸" },
  { id: 2, src: "/images/memory8.jpg", caption: "That beautiful sunset day 🌅" },
  { id: 3, src: "/images/memory9.jpg", caption: "Laughing until our cheeks hurt 🤍" },
  { id: 4, src: "/images/memory10.jpg", caption: "A day I'll never forget 💕" },
  { id: 5, src: "/images/memory11.jpg", caption: "You + Me + Happiness 🌷" },
  { id: 6, src: "/images/memory12.jpg", caption: "My favorite memory 💫" },
  { id: 1, src: "/images/memory13.jpg", caption: "Our first photo together 🌸" },
  { id: 2, src: "/images/memory14.jpg", caption: "That beautiful sunset day 🌅" },
];


const BirthdayPage = () => {
  const [selectedMemory, setSelectedMemory] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <FloatingPetals count={25} />
      <MusicPlayer />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroGarden} alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsl(30 50% 97% / 0.3) 0%, hsl(30 50% 97% / 0.7) 60%, hsl(30 50% 97%) 100%)",
            }}
          />
        </div>

        <div className="relative z-20 animate-bloom">
          <h1 className="font-display text-5xl md:text-7xl text-foreground leading-tight mb-4 drop-shadow-sm">
            Happy Birthday,
            <br />
            My Beautiful Flower 🌷
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-md mx-auto animate-float-gentle">
            You make my world bloom every single day.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 z-20 animate-float-gentle">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ===== MEMORY GALLERY ===== */}
      <section className="relative py-20 px-6">
        {/* Section flower divider */}
        <div className="flex justify-center mb-8">
          <svg width="80" height="20" viewBox="0 0 80 20" className="opacity-40">
            <line x1="0" y1="10" x2="25" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" />
            <circle cx="40" cy="10" r="4" fill="hsl(var(--petal))" />
            {[0, 72, 144, 216, 288].map((r) => (
              <ellipse key={r} cx="40" cy="6" rx="2" ry="4" fill="hsl(var(--petal))" fillOpacity={0.5} transform={`rotate(${r} 40 10)`} />
            ))}
            <line x1="55" y1="10" x2="80" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" />
          </svg>
        </div>

        <h2 className="font-display text-4xl text-foreground text-center mb-10">
          Our Blooming Memories 🌼
        </h2>

        <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
          {memories.map((m) => (
            <div
              key={m.id}
              onClick={() => setSelectedMemory(m.id)}
              className="aspect-square rounded-2xl bg-card border border-border overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-petal/20 hover:scale-[1.03]"
            >
              <img
                src={m.src}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 font-body">
          Add your photos here to fill with memories ✨
        </p>
      </section>

      {/* Memory modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/20 backdrop-blur-sm"
          onClick={() => setSelectedMemory(null)}
        >
          {(() => {
            const memory = memories.find(m => m.id === selectedMemory);
            if (!memory) return null;

            return (
              <>
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img
                    src={memory.src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="font-body text-center text-muted-foreground text-sm">
                  {memory.caption}
                </p>
              </>
            );
          })()}

        </div>
      )}

      {/* ===== LOVE LETTER ===== */}
      <section className="relative py-20 px-6">
        <div className="flex justify-center mb-8">
          <svg width="80" height="20" viewBox="0 0 80 20" className="opacity-40">
            <line x1="0" y1="10" x2="25" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" />
            <circle cx="40" cy="10" r="4" fill="hsl(var(--petal))" />
            <line x1="55" y1="10" x2="80" y2="10" stroke="hsl(var(--primary))" strokeWidth="1" />
          </svg>
        </div>

        <h2 className="font-display text-4xl text-foreground text-center mb-10">
          A Letter From My Heart 💌
        </h2>

        <div className="relative max-w-md mx-auto">
          {/* Corner flowers */}
          <div className="absolute -top-3 -left-3 opacity-40">
            <svg width="30" height="30" viewBox="0 0 30 30">
              {[0, 72, 144, 216, 288].map((r) => (
                <ellipse key={r} cx="15" cy="6" rx="3" ry="6" fill="hsl(var(--petal))" transform={`rotate(${r} 15 15)`} />
              ))}
              <circle cx="15" cy="15" r="4" fill="hsl(var(--sunlight))" />
            </svg>
          </div>
          <div className="absolute -bottom-3 -right-3 opacity-40">
            <svg width="30" height="30" viewBox="0 0 30 30">
              {[0, 72, 144, 216, 288].map((r) => (
                <ellipse key={r} cx="15" cy="6" rx="3" ry="6" fill="hsl(var(--petal))" transform={`rotate(${r} 15 15)`} />
              ))}
              <circle cx="15" cy="15" r="4" fill="hsl(var(--sunlight))" />
            </svg>
          </div>

          <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border animate-float-gentle"
            style={{ animationDuration: "6s" }}
          >
            <p className="font-body text-foreground leading-relaxed text-base space-y-4">
              <span className="block mb-4">My N.Golf,</span>
              <span className="block mb-4">
                Every day with you feels like spring — warm, beautiful, and full of life.
                You are the most precious flower in my garden, and I am so grateful
                that the universe brought us together.
              </span>
              <span className="block mb-4">
                On your special day, I want you to know that my love for you grows
                deeper with every passing moment. You are my sunshine, my inspiration,
                and my forever.
              </span>
              <span className="block mb-4">
                Happy Birthday, my love. May this year bring you all the happiness
                and dreams your beautiful heart desires.
              </span>
              <span className="block text-right font-display text-2xl text-primary mt-6">
                รักนะ ดื้อๆของเค้า 💕
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ===== FOOTER with Secret Flower ===== */}
      <footer className="py-16 px-6 text-center">
        <div className="flex justify-center mb-4">
          <SecretFlower />
        </div>
        <p className="font-display text-lg text-muted-foreground">
          Made with all my love 🌷
        </p>
      </footer>
    </div>
  );
};

export default BirthdayPage;
