import { useState, useEffect, useCallback, useRef } from "react";
import { Play, Pause, Square, SkipForward, SkipBack, Volume2 } from "lucide-react";
import type { BibleVerse } from "@/lib/bibleApi";

interface BibleVoiceReaderProps {
  verses: BibleVerse[];
  bookName: string;
  chapter: number;
}

const BibleVoiceReader = ({ verses, bookName, chapter }: BibleVoiceReaderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVerse, setCurrentVerse] = useState(0);
  const [speed, setSpeed] = useState(1);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const isPlayingRef = useRef(false);

  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  const stop = useCallback(() => {
    window.speechSynthesis.cancel();
    isPlayingRef.current = false;
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  // Reset when chapter changes
  useEffect(() => {
    stop();
    setCurrentVerse(0);
  }, [bookName, chapter, stop]);

  const speakVerse = useCallback((index: number) => {
    if (index >= verses.length) {
      isPlayingRef.current = false;
      setIsPlaying(false);
      setCurrentVerse(0);
      return;
    }

    const verse = verses[index];
    const text = `Verse ${verse.verse}. ${verse.text}`;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speed;
    utterance.pitch = 1;
    utterance.lang = "en-US";

    utteranceRef.current = utterance;
    setCurrentVerse(index);

    // Scroll to active verse
    const el = document.querySelector(`[data-verse="${verse.verse}"]`);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });

    utterance.onend = () => {
      if (isPlayingRef.current) {
        speakVerse(index + 1);
      }
    };

    utterance.onerror = () => {
      isPlayingRef.current = false;
      setIsPlaying(false);
    };

    window.speechSynthesis.speak(utterance);
  }, [verses, speed]);

  const play = useCallback(() => {
    if (!supported || verses.length === 0) return;
    window.speechSynthesis.cancel();
    isPlayingRef.current = true;
    setIsPlaying(true);
    speakVerse(currentVerse);
  }, [supported, verses, currentVerse, speakVerse]);

  const pause = useCallback(() => {
    window.speechSynthesis.cancel();
    isPlayingRef.current = false;
    setIsPlaying(false);
  }, []);

  const skipForward = useCallback(() => {
    const next = Math.min(currentVerse + 1, verses.length - 1);
    setCurrentVerse(next);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      speakVerse(next);
    }
  }, [currentVerse, verses.length, isPlaying, speakVerse]);

  const skipBack = useCallback(() => {
    const prev = Math.max(currentVerse - 1, 0);
    setCurrentVerse(prev);
    if (isPlaying) {
      window.speechSynthesis.cancel();
      speakVerse(prev);
    }
  }, [currentVerse, isPlaying, speakVerse]);

  const cycleSpeed = () => {
    const speeds = [0.75, 1, 1.25, 1.5];
    const idx = speeds.indexOf(speed);
    const next = speeds[(idx + 1) % speeds.length];
    setSpeed(next);
  };

  if (!supported) return null;

  return (
    <div className="sticky bottom-20 z-20 mx-4">
      <div className="glass-card rounded-2xl border border-border shadow-elevated p-3">
        <div className="flex items-center gap-2">
          <Volume2 size={16} className="text-accent shrink-0" />
          <span className="text-xs text-muted-foreground font-body truncate flex-1">
            {isPlaying ? `Reading verse ${verses[currentVerse]?.verse || 1}` : "Voice Reader"}
          </span>
          <button
            onClick={cycleSpeed}
            className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-lg"
          >
            {speed}x
          </button>
        </div>

        <div className="flex items-center justify-center gap-4 mt-2">
          <button onClick={skipBack} className="p-2 rounded-xl hover:bg-muted transition-colors">
            <SkipBack size={18} className="text-foreground" />
          </button>
          
          {isPlaying ? (
            <button
              onClick={pause}
              className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center shadow-soft hover:opacity-90 transition-opacity"
            >
              <Pause size={20} className="text-primary-foreground" />
            </button>
          ) : (
            <button
              onClick={play}
              className="w-11 h-11 rounded-full gradient-primary flex items-center justify-center shadow-soft hover:opacity-90 transition-opacity"
            >
              <Play size={20} className="text-primary-foreground ml-0.5" />
            </button>
          )}

          <button onClick={skipForward} className="p-2 rounded-xl hover:bg-muted transition-colors">
            <SkipForward size={18} className="text-foreground" />
          </button>

          {isPlaying && (
            <button onClick={stop} className="p-2 rounded-xl hover:bg-destructive/10 transition-colors">
              <Square size={16} className="text-destructive" />
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full gradient-primary rounded-full transition-all duration-300"
            style={{ width: `${verses.length > 0 ? ((currentVerse + 1) / verses.length) * 100 : 0}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default BibleVoiceReader;
