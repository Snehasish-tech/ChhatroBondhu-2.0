import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Focus, 
  Play, 
  Pause, 
  RotateCcw, 
  Target,
  Clock,
  Flame,
  Trophy,
  Settings,
  Volume2
} from "lucide-react";
import { cn } from "@/lib/utils";

// interface removed

export default function FocusMode() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [sessionDuration, setSessionDuration] = useState(25);
  const [sessionsToday, setSessionsToday] = useState(3);
  const [totalFocusTime, setTotalFocusTime] = useState(127);
  const [currentStreak, setCurrentStreak] = useState(7);

  const progress = ((sessionDuration * 60 - timeLeft) / (sessionDuration * 60)) * 100;

  useEffect(() => {
    let interval;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      setSessionsToday((prev) => prev + 1);
      setTotalFocusTime((prev) => prev + sessionDuration);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft, sessionDuration]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => setIsActive(!isActive);

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(sessionDuration * 60);
  };

  const setDuration = (mins) => {
    setSessionDuration(mins);
    setTimeLeft(mins * 60);
    setIsActive(false);
  };

  const stats = [
    { label: "Sessions Today", value: sessionsToday, icon: Target, color: "text-green-500" },
    { label: "Total Focus (min)", value: totalFocusTime, icon: Clock, color: "text-primary" },
    { label: "Day Streak", value: currentStreak, icon: Flame, color: "text-orange-500" },
    { label: "Weekly Goal", value: "85%", icon: Trophy, color: "text-amber-500" },
  ];

  const durations = [15, 25, 45, 60];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Focus className="h-4 w-4" />
            Deep Focus
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Focus Mode
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Eliminate distractions and achieve deep focus with our smart timer.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 mb-8 max-w-4xl mx-auto">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className="rounded-lg bg-muted/50 p-2">
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
            {/* Timer Display */}
            <div className={cn(
              "relative py-16 transition-colors duration-500",
              isActive ? "bg-primary/5" : "bg-background"
            )}>
              {/* Animated background circles */}
              {isActive && (
                <>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-64 w-64 rounded-full border-4 border-primary/20 animate-ping" style={{ animationDuration: "3s" }} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full border-4 border-primary/30 animate-ping" style={{ animationDuration: "2s" }} />
                  </div>
                </>
              )}
              
              <div className="relative flex flex-col items-center justify-center">
                <div className="relative h-56 w-56">
                  {/* Progress Ring */}
                  <svg className="h-56 w-56 -rotate-90 transform">
                    <circle
                      cx="112"
                      cy="112"
                      r="100"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      className="text-muted/30"
                    />
                    <circle
                      cx="112"
                      cy="112"
                      r="100"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 100}
                      strokeDashoffset={2 * Math.PI * 100 * (1 - progress / 100)}
                      className="text-primary transition-all duration-1000"
                      strokeLinecap="round"
                    />
                  </svg>
                  {/* Time Display */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-bold text-foreground">
                      {formatTime(timeLeft)}
                    </span>
                    <span className="text-sm text-muted-foreground mt-2">
                      {isActive ? "Stay focused..." : "Ready to focus?"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <CardContent className="space-y-6 pt-6">
              {/* Duration Selection */}
              <div className="flex justify-center gap-2">
                {durations.map((mins) => (
                  <Button
                    key={mins}
                    variant={sessionDuration === mins ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDuration(mins)}
                    disabled={isActive}
                  >
                    {mins}m
                  </Button>
                ))}
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
                  className="h-16 w-16 rounded-full shadow-lg"
                >
                  {isActive ? (
                    <Pause className="h-7 w-7" />
                  ) : (
                    <Play className="h-7 w-7 ml-1" />
                  )}
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-12 w-12 rounded-full"
                >
                  <Volume2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Session Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Daily Goal Progress</span>
                  <span className="font-medium text-foreground">{sessionsToday}/4 sessions</span>
                </div>
                <Progress value={(sessionsToday / 4) * 100} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}