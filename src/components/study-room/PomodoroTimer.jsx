import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw, Coffee, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

const TIMER_SETTINGS = {
  work: { duration: 25 * 60, label: "Focus Time", icon: BookOpen },
  shortBreak: { duration: 5 * 60, label: "Short Break", icon: Coffee },
  longBreak: { duration: 15 * 60, label: "Long Break", icon: Coffee },
};

export function PomodoroTimer() {
  const [mode, setMode] = useState("work");
  const [timeLeft, setTimeLeft] = useState(TIMER_SETTINGS.work.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const progress =
    ((TIMER_SETTINGS[mode].duration - timeLeft) /
      TIMER_SETTINGS[mode].duration) *
    100;

  const switchMode = useCallback((newMode) => {
    setMode(newMode);
    setTimeLeft(TIMER_SETTINGS[newMode].duration);
    setIsRunning(false);
  }, []);

  useEffect(() => {
    let interval;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);

      if (mode === "work") {
        setSessionsCompleted((prev) => prev + 1);
        const nextMode =
          (sessionsCompleted + 1) % 4 === 0 ? "longBreak" : "shortBreak";
        switchMode(nextMode);
      } else {
        switchMode("work");
      }
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, mode, sessionsCompleted, switchMode]);

  const toggleTimer = () => setIsRunning((prev) => !prev);

  const resetTimer = () => {
    setTimeLeft(TIMER_SETTINGS[mode].duration);
    setIsRunning(false);
  };

  const ModeIcon = TIMER_SETTINGS[mode].icon;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <ModeIcon className="h-5 w-5 text-primary" />
          {TIMER_SETTINGS[mode].label}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Mode Tabs */}
        <div className="flex gap-2">
          {["work", "shortBreak", "longBreak"].map((m) => (
            <Button
              key={m}
              variant={mode === m ? "default" : "outline"}
              size="sm"
              onClick={() => switchMode(m)}
              className="flex-1 text-xs"
            >
              {m === "work"
                ? "Focus"
                : m === "shortBreak"
                ? "Short"
                : "Long"}
            </Button>
          ))}
        </div>

        {/* Timer Display */}
        <div className="relative flex items-center justify-center">
          <div className="relative h-48 w-48">
            <svg className="h-48 w-48 -rotate-90 transform">
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                className="text-muted/30"
              />
              <circle
                cx="96"
                cy="96"
                r="88"
                stroke="currentColor"
                strokeWidth="8"
                fill="none"
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={
                  2 * Math.PI * 88 * (1 - progress / 100)
                }
                className={cn(
                  "transition-all duration-1000",
                  mode === "work" ? "text-primary" : "text-accent"
                )}
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-foreground">
                {formatTime(timeLeft)}
              </span>
              <span className="text-sm text-muted-foreground">
                Session {sessionsCompleted + 1}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={resetTimer}
            className="h-12 w-12 rounded-full"
          >
            <RotateCcw className="h-5 w-5" />
          </Button>

          <Button
            size="icon"
            onClick={toggleTimer}
            className="h-14 w-14 rounded-full shadow-lg"
          >
            {isRunning ? (
              <Pause className="h-6 w-6" />
            ) : (
              <Play className="h-6 w-6 ml-0.5" />
            )}
          </Button>
        </div>

        {/* Sessions Counter */}
        <div className="flex justify-center gap-2">
          {[1, 2, 3, 4].map((session) => (
            <div
              key={session}
              className={cn(
                "h-2 w-8 rounded-full transition-colors",
                session <= (sessionsCompleted % 4 || 4)
                  ? "bg-primary"
                  : "bg-muted/50"
              )}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

