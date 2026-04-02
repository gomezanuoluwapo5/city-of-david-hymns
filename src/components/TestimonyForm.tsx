import { useState } from "react";
import { Send, Star } from "lucide-react";
import { submitTestimony } from "@/hooks/useTestimonies";
import { useToast } from "@/hooks/use-toast";

const TestimonyForm = () => {
  const [name, setName] = useState("");
  const [testimony, setTestimony] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!testimony.trim()) {
      toast({ title: "Please enter your testimony", variant: "destructive" });
      return;
    }
    if (testimony.trim().length > 2000) {
      toast({ title: "Testimony is too long", description: "Please keep it under 2000 characters.", variant: "destructive" });
      return;
    }

    setSending(true);
    const { error } = await submitTestimony(name, testimony);
    setSending(false);

    if (error) {
      toast({ title: "Failed to submit", description: "Please try again later.", variant: "destructive" });
    } else {
      setSubmitted(true);
      setName("");
      setTestimony("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card border border-border shadow-card p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <Star size={28} className="text-accent" fill="currentColor" />
        </div>
        <h3 className="text-base font-display text-foreground mb-1">Testimony Submitted!</h3>
        <p className="text-xs text-muted-foreground font-body">
          Thank you for sharing what God has done. To God be the glory!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      <div className="px-5 py-3 border-b border-border/50 flex items-center gap-2">
        <Star size={14} className="text-accent" />
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
          Share Your Testimony
        </span>
      </div>
      <div className="p-5 space-y-3">
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          Share what God has done in your life. Your testimony will be shared with church leaders.
        </p>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all"
        />
        <textarea
          placeholder="Type your testimony here..."
          value={testimony}
          onChange={(e) => setTestimony(e.target.value)}
          maxLength={2000}
          rows={4}
          className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/30 transition-all resize-none"
        />
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">{testimony.length}/2000</span>
          <button
            onClick={handleSubmit}
            disabled={sending || !testimony.trim()}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl gradient-primary text-primary-foreground text-xs font-semibold shadow-soft hover:shadow-elevated transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={14} />
            {sending ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonyForm;
