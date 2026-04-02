import { CalendarDays, MapPin } from "lucide-react";
import { useChurchEvents } from "@/hooks/useChurchEvents";

const ChurchEventsCard = () => {
  const { events, loading } = useChurchEvents();

  // Show only upcoming events
  const upcoming = events.filter(e => new Date(e.event_date) >= new Date(new Date().toDateString()));

  if (loading) return null;
  if (upcoming.length === 0) return null;

  return (
    <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
      <div className="px-5 py-3 border-b border-border/50 flex items-center gap-2">
        <CalendarDays size={14} className="text-accent" />
        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">
          Upcoming Events
        </span>
      </div>
      <div className="p-4 space-y-3">
        {upcoming.slice(0, 3).map((event) => (
          <div key={event.id} className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex flex-col items-center justify-center shrink-0">
              <span className="text-[10px] font-bold text-accent uppercase">
                {new Date(event.event_date).toLocaleDateString("en-GB", { month: "short" })}
              </span>
              <span className="text-sm font-bold text-accent leading-none">
                {new Date(event.event_date).getDate()}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-foreground truncate">{event.title}</p>
              {event.description && (
                <p className="text-xs text-muted-foreground font-body line-clamp-2 mt-0.5">{event.description}</p>
              )}
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[10px] text-muted-foreground">
                  {new Date(event.event_date).toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                </span>
                {event.location && (
                  <span className="text-[10px] text-muted-foreground flex items-center gap-0.5">
                    <MapPin size={8} /> {event.location}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChurchEventsCard;
