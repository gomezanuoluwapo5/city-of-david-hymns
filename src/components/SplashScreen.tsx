import { useState, useEffect } from "react";
import churchLogo from "@/assets/church-logo.jpeg";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2800);
    const finish = setTimeout(onFinish, 3400);
    return () => { clearTimeout(timer); clearTimeout(finish); };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-600 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      {/* Radial glow behind logo */}
      <div className="absolute w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse" />

      <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white/40 shadow-elevated bg-white/95 mb-6 animate-scale-in"
        style={{ animation: "scale-in 0.6s ease-out, logo-pulse 2.5s ease-in-out infinite 0.6s" }}
      >
        <img src={churchLogo} alt="CDCCG" className="w-full h-full object-contain p-1" />
      </div>

      <h1 className="text-2xl font-display font-bold text-primary-foreground tracking-wide animate-fade-in" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)", animationDelay: "0.3s", animationFillMode: "both" }}>
        City of David Covenant
      </h1>
      <p className="text-lg font-display font-bold text-primary-foreground/90 mt-1 animate-fade-in" style={{ animationDelay: "0.5s", animationFillMode: "both" }}>
        Church of God
      </p>

      <div className="w-12 h-px bg-white/30 mt-4 mb-3 animate-fade-in" style={{ animationDelay: "0.7s", animationFillMode: "both" }} />

      <p className="text-[11px] font-body text-primary-foreground/70 italic animate-fade-in" style={{ animationDelay: "0.9s", animationFillMode: "both" }}>
        General Overseer
      </p>
      <p className="text-sm font-display font-semibold text-primary-foreground/90 tracking-wide animate-fade-in" style={{ animationDelay: "1s", animationFillMode: "both" }}>
        Rev. Akonasu P. Fanu
      </p>

      <p className="text-[10px] font-body font-bold text-primary-foreground/50 uppercase tracking-[0.4em] mt-5 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "both" }}>
        CDCCG
      </p>
    </div>
  );
};

export default SplashScreen;
