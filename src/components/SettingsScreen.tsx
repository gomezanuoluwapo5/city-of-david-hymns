import { useState, useEffect } from "react";
import { Moon, Sun, Type, Church, Shield, ChevronRight } from "lucide-react";
import { getFontSize, setFontSize, getDarkMode, setDarkMode } from "@/lib/store";
import churchLogo from "@/assets/church-logo.jpeg";

interface SettingsScreenProps {
  onOpenAdmin?: () => void;
}

const SettingsScreen = ({ onOpenAdmin }: SettingsScreenProps) => {
  const [dark, setDark] = useState(getDarkMode());
  const [fs, setFs] = useState(getFontSize());

  useEffect(() => { setDarkMode(dark); }, [dark]);
  useEffect(() => { setFontSize(fs); }, [fs]);

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 glass px-5 pt-6 pb-4">
        <h1 className="text-3xl font-display text-foreground">Settings</h1>
      </div>

      <div className="px-4 mt-4 space-y-4">
        {/* Font Size */}
        <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Type size={20} className="text-primary" />
            </div>
            <span className="text-sm font-semibold text-foreground flex-1">Font Size</span>
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{fs}px</span>
          </div>
          <input
            type="range"
            min={14}
            max={28}
            value={fs}
            onChange={e => setFs(Number(e.target.value))}
            className="w-full accent-primary h-1.5 rounded-full"
          />
          <div className="flex justify-between mt-2">
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Small</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Large</span>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
          <button
            onClick={() => setDark(!dark)}
            className="w-full flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              {dark ? <Moon size={20} className="text-accent" /> : <Sun size={20} className="text-church-gold" />}
            </div>
            <span className="text-sm font-semibold text-foreground flex-1 text-left">Dark Mode</span>
            <div
              className={`w-12 h-7 rounded-full transition-colors duration-300 flex items-center px-0.5 ${
                dark ? "gradient-primary" : "bg-muted"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full bg-card shadow-md transition-transform duration-300 ${
                  dark ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Admin Panel */}
        <div className="p-5 rounded-2xl bg-card border border-border shadow-card">
          <button
            onClick={onOpenAdmin}
            className="w-full flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Shield size={20} className="text-primary" />
            </div>
            <div className="flex-1 text-left">
              <span className="text-sm font-semibold text-foreground block">Admin Panel</span>
              <span className="text-[10px] text-muted-foreground">Edit Yorùbá hymn translations</span>
            </div>
            <ChevronRight size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* About Church */}
        <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
          <div className="px-5 py-4 border-b border-border/50 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-church-gold/10 flex items-center justify-center">
              <Church size={20} className="text-church-gold" />
            </div>
            <span className="text-sm font-semibold text-foreground">About Church</span>
          </div>
          <div className="flex flex-col items-center text-center p-6">
            <div className="w-28 h-28 rounded-full overflow-hidden border-[3px] border-primary/20 shadow-elevated mb-4">
              <img
                src={churchLogo}
                alt="COD Church Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-display text-lg text-foreground">City of David Covenant</h3>
            <h4 className="font-display text-sm text-foreground/80 mt-0.5">Church of God</h4>
            <span className="text-xs text-primary italic mt-1 font-serif">Citadel of Praise</span>
            <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border/50">
              <p className="text-xs text-muted-foreground leading-relaxed font-serif italic">
                "And I will establish my covenant between me and Thee and Thy seed after Thee..."
              </p>
              <p className="text-[10px] text-primary font-semibold mt-2">— Genesis 17:7</p>
            </div>
          </div>
        </div>

        <p className="text-center text-[10px] text-muted-foreground pt-4 pb-2 uppercase tracking-widest">
          COD Hymns & Bible v1.0
        </p>
      </div>
    </div>
  );
};

export default SettingsScreen;
