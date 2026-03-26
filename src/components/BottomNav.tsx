import { Home, Music, BookOpen, StickyNote, Settings } from "lucide-react";

interface BottomNavProps {
  active: string;
  onNavigate: (tab: string) => void;
}

const tabs = [
  { id: "home", label: "Home", icon: Home },
  { id: "hymns", label: "Hymns", icon: Music },
  { id: "bible", label: "Bible", icon: BookOpen },
  { id: "notes", label: "Notes", icon: StickyNote },
  { id: "settings", label: "Settings", icon: Settings },
];

const BottomNav = ({ active, onNavigate }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-xl border-t border-border shadow-elevated safe-bottom animate-slide-up">
      <div className="flex items-center justify-around h-[68px] max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`relative flex flex-col items-center justify-center gap-1 w-16 h-full transition-all duration-200 ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full gradient-primary" />
              )}
              <div className={`transition-transform duration-200 ${isActive ? "scale-110 -translate-y-0.5" : ""}`}>
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.8} />
              </div>
              <span className={`text-[10px] font-body transition-all ${isActive ? "font-bold" : "font-medium"}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;