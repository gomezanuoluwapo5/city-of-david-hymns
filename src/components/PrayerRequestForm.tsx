import { useState } from "react";
import { Send, Heart } from "lucide-react";
import { submitPrayerRequest } from "@/hooks/usePrayerRequests";
import { useToast } from "@/hooks/use-toast";

const PrayerRequestForm = () => {
  const [name, setName] = useState("");
  const [request, setRequest] = useState("");
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!request.trim()) {
      toast({ title: "Please enter your prayer request", variant: "destructive" });
      return;
    }
    if (request.trim().length > 1000) {
      toast({ title: "Prayer request is too long", description: "Please keep it under 1000 characters.", variant: "destructive" });
      return;
    }

    setSending(true);
    const { error } = await submitPrayerRequest(name, request);
    setSending(false);

    if (error) {
      toast({ title: "Failed to submit", description: "Please try again later.", variant: "destructive" });
    } else {
      setSubmitted(true);
      setName("");
      setRequest("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl bg-card border border-border shadow-card p-8 text-center animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Heart size={28} className="text-primary" fill="currentColor" />
        </div>
        <h3 className="text-base font-display text-foreground mb-1">Prayer Request Submitted</h3>
        <p className="text-xs text-muted-foreground font-body">
          Our church leaders will be praying for you. God bless you!
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      <div className="px-5 py-3 border-b border-border/50 flex items-center gap-2">
        <Heart size={14} className="text-primary" />
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
          Prayer Request
        </span>
      </div>
      <div className="p-5 space-y-3">
        <p className="text-xs text-muted-foreground font-body leading-relaxed">
          Share your prayer point with the church. Our leaders will intercede on your behalf.
        </p>
        <input
          type="text"
          placeholder="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxLength={100}
          className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all"
        />
        <textarea
          placeholder="Type your prayer request here..."
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          maxLength={1000}
          rows={3}
          className="w-full px-4 py-2.5 rounded-xl bg-muted/50 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/30 transition-all resize-none"
        />
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-muted-foreground">{request.length}/1000</span>
          <button
            onClick={handleSubmit}
            disabled={sending || !request.trim()}
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

export default PrayerRequestForm;
