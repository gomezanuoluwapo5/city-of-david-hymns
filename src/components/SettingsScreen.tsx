import { useState, useEffect } from "react";
import { Moon, Sun, Type, Church } from "lucide-react";
import { getFontSize, setFontSize, getDarkMode, setDarkMode } from "@/lib/store";
import churchLogo from "@/assets/church-logo.jpeg";

const SettingsScreen = () => {
  const [dark, setDark] = useState(getDarkMode());
  const [fs, setFs] = useState(getFontSize());

  useEffect(() => {
    setDarkMode(dark);
  }, [dark]);

  useEffect(() => {
    setFontSize(fs);
  }, [fs]);

  return (
    <div className="pb-24 max-w-lg mx-auto animate-fade-in">
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-md px-4 pt-5 pb-3">
        <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
      </div>

      <div className="px-4 mt-4 space-y-4">
        {/* Font Size */}
        <div className="p-4 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-3">
            <Type size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">Font Size</span>
            <span className="ml-auto text-sm text-muted-foreground">{fs}px</span>
          </div>
          <input
            type="range"
            min={14}
            max={28}
            value={fs}
            onChange={e => setFs(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between mt-1">
            <span className="text-xs text-muted-foreground">Small</span>
            <span className="text-xs text-muted-foreground">Large</span>
          </div>
        </div>

        {/* Dark Mode */}
        <div className="p-4 rounded-xl bg-card border border-border">
          <button
            onClick={() => setDark(!dark)}
            className="w-full flex items-center gap-3"
          >
            {dark ? <Moon size={20} className="text-primary" /> : <Sun size={20} className="text-accent" />}
            <span className="text-sm font-semibold text-foreground">Dark Mode</span>
            <div
              className={`ml-auto w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${
                dark ? "bg-primary" : "bg-muted"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-card shadow transition-transform ${
                  dark ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* About Church */}
        <div className="p-5 rounded-xl bg-card border border-border">
          <div className="flex items-center gap-3 mb-4">
            <Church size={20} className="text-primary" />
            <span className="text-sm font-semibold text-foreground">About Church</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={churchLogo}
              alt="COD Church Logo"
              className="w-24 h-24 rounded-full object-cover mb-3 shadow-md"
            />
            <h3 className="font-display font-bold text-foreground">City of David Covenant</h3>
            <h4 className="font-display text-sm text-foreground">Church of God</h4>
            <p className="text-xs text-primary mt-1 italic">Citadel of Praise</p>
            <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
              "And I will establish my covenant between me and Thee and Thy seed after Thee..."
              <br />— Genesis 17:7
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground pt-4">
          COD Hymns & Bible v1.0
        </p>
      </div>
    </div>
  );
};

export default SettingsScreen;
