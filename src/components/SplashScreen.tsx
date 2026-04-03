import { useState, useEffect } from "react";
import churchLogo from "@/assets/church-logo.jpeg";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    const finish = setTimeout(onFinish, 2600);
    return () => { clearTimeout(timer); clearTimeout(finish); };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-primary transition-opacity duration-600 ${fadeOut ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/30 shadow-elevated bg-white/90 animate-scale-in mb-6">
        <img src={churchLogo} alt="CDCCG" className="w-full h-full object-contain p-1" />
      </div>
      <h1 className="text-2xl font-display font-bold text-primary-foreground tracking-wide animate-fade-in" style={{ textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
        City of David Covenant
      </h1>
      <p className="text-lg font-display font-bold text-primary-foreground/90 mt-1 animate-fade-in">
        Church of God
      </p>
      <p className="text-[10px] font-body font-bold text-primary-foreground/60 uppercase tracking-[0.4em] mt-4 animate-fade-in">
        CDCCG
      </p>
    </div>
  );
};

export default SplashScreen;
