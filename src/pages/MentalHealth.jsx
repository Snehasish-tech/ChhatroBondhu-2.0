import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { 
  Heart, 
  Smile, 
  Meh, 
  Frown, 
  Brain,
  Moon,
  Sun,
  Wind,
  Sparkles,
  TrendingUp,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";

const moodOptions = [
  { value: 5, icon: Smile, label: "Great", color: "text-green-500 bg-green-500/10 border-green-500/30" },
  { value: 4, icon: Smile, label: "Good", color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/30" },
  { value: 3, icon: Meh, label: "Okay", color: "text-amber-500 bg-amber-500/10 border-amber-500/30" },
  { value: 2, icon: Frown, label: "Low", color: "text-orange-500 bg-orange-500/10 border-orange-500/30" },
  { value: 1, icon: Frown, label: "Bad", color: "text-red-500 bg-red-500/10 border-red-500/30" },
];

const breathingExercises = [
  { name: "Box Breathing", duration: "4-4-4-4", description: "Inhale, hold, exhale, hold" },
  { name: "4-7-8 Technique", duration: "4-7-8", description: "Calming breath for anxiety" },
  { name: "Deep Breathing", duration: "5-5", description: "Simple deep breaths" },
];

const weeklyMoods = [
  { day: "Mon", value: 4 },
  { day: "Tue", value: 5 },
  { day: "Wed", value: 3 },
  { day: "Thu", value: 4 },
  { day: "Fri", value: 5 },
  { day: "Sat", value: 4 },
  { day: "Sun", value: null },
];

export default function MentalHealth() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [journalEntry, setJournalEntry] = useState("");
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathPhase, setBreathPhase] = useState("inhale");

  const wellnessScore = 78;

  const startBreathingExercise = () => {
    setIsBreathing(true);
    let phase = 0;
    const phases = ["inhale", "hold", "exhale"];
    const interval = setInterval(() => {
      phase = (phase + 1) % 3;
      setBreathPhase(phases[phase]);
    }, 4000);

    setTimeout(() => {
      clearInterval(interval);
      setIsBreathing(false);
    }, 60000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Heart className="h-4 w-4" />
            Wellness Tracker
          </div>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Mental Health
          </h1>
          <p className="mt-2 text-muted-foreground max-w-lg mx-auto">
            Track your mood, practice mindfulness, and maintain mental wellness.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2">
          {/* Mood Tracker */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                How are you feeling today?
              </CardTitle>
              <CardDescription>Track your daily mood to see patterns</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center gap-3">
                {moodOptions.map((mood) => {
                  const Icon = mood.icon;
                  const isSelected = selectedMood === mood.value;
                  return (
                    <button
                      key={mood.value}
                      onClick={() => setSelectedMood(mood.value)}
                      className={cn(
                        "flex flex-col items-center gap-1 rounded-xl border-2 p-3 transition-all",
                        isSelected ? mood.color : "border-border/50 hover:border-border"
                      )}
                    >
                      <Icon className={cn("h-8 w-8", isSelected ? "" : "text-muted-foreground")} />
                      <span className="text-xs font-medium">{mood.label}</span>
                    </button>
                  );
                })}
              </div>

              {selectedMood && (
                <div className="space-y-2">
                  <label className="text-sm font-medium">Add a note (optional)</label>
                  <Textarea
                    placeholder="What's on your mind today?"
                    value={journalEntry}
                    onChange={(e) => setJournalEntry(e.target.value)}
                    className="min-h-[100px]"
                  />
                  <Button className="w-full">Save Mood Entry</Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Wellness Score */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Wellness Score
              </CardTitle>
              <CardDescription>Based on your mood, sleep, and activity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-center">
                <div className="relative h-40 w-40">
                  <svg className="h-40 w-40 -rotate-90 transform">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      className="text-muted/30"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="currentColor"
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 70}
                      strokeDashoffset={2 * Math.PI * 70 * (1 - wellnessScore / 100)}
                      className="text-green-500 transition-all duration-1000"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-foreground">{wellnessScore}</span>
                    <span className="text-sm text-muted-foreground">Good</span>
                  </div>
                </div>
              </div>

              {/* Weekly Mood Chart */}
              <div className="space-y-2">
                <p className="text-sm font-medium">This Week's Mood</p>
                <div className="flex justify-between gap-1">
                  {weeklyMoods.map((day) => (
                    <div key={day.day} className="flex flex-col items-center gap-1">
                      <div
                        className={cn(
                          "h-16 w-8 rounded-full transition-all",
                          day.value
                            ? day.value >= 4
                              ? "bg-green-500/60"
                              : day.value >= 3
                              ? "bg-amber-500/60"
                              : "bg-red-500/60"
                            : "bg-muted/30"
                        )}
                        style={{ height: day.value ? `${day.value * 12}px` : "16px" }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Breathing Exercise */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wind className="h-5 w-5 text-primary" />
                Breathing Exercises
              </CardTitle>
              <CardDescription>Take a moment to breathe and relax</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-3">
                {breathingExercises.map((exercise) => (
                  <Card key={exercise.name} className="border-border/30">
                    <CardContent className="p-4 text-center">
                      <h4 className="font-semibold">{exercise.name}</h4>
                      <p className="text-2xl font-bold text-primary my-2">{exercise.duration}</p>
                      <p className="text-sm text-muted-foreground mb-3">{exercise.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={startBreathingExercise}
                        disabled={isBreathing}
                      >
                        {isBreathing ? "Breathing..." : "Start"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {isBreathing && (
                <div className="mt-8 flex flex-col items-center gap-4">
                  <div className={cn(
                    "h-32 w-32 rounded-full flex items-center justify-center transition-all duration-[4000ms]",
                    breathPhase === "inhale" && "scale-125 bg-primary/20",
                    breathPhase === "hold" && "scale-125 bg-primary/30",
                    breathPhase === "exhale" && "scale-100 bg-primary/10"
                  )}>
                    <span className="text-xl font-semibold capitalize">{breathPhase}</span>
                  </div>
                  <Button variant="outline" onClick={() => setIsBreathing(false)}>
                    Stop Exercise
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
