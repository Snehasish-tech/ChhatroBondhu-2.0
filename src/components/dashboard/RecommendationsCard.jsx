import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock, BookOpen, Brain, ArrowRight } from "lucide-react";

const RecommendationsCard = () => {
  const recommendations = [
    {
      icon: Clock,
      title: "Best Study Time",
      description: "Your focus peaks between 9-11 AM. Schedule important topics then!",
      action: "Set Reminder",
      gradient: "bg-gradient-to-br from-primary to-primary/70",
    },
    {
      icon: BookOpen,
      title: "Review Physics",
      description: "You haven't studied Physics in 3 days. Quick review recommended.",
      action: "Start Review",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: Brain,
      title: "Take a Break",
      description: "You've been studying for 2 hours. A 10-min break boosts retention!",
      action: "Start Break",
      gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
  ];

  return (
    <Card className="border-border">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-3">
          {recommendations.map((rec) => (
            <div
              key={rec.title}
              className="group rounded-xl border border-border p-4 transition-all hover:shadow-md hover:border-primary/30"
            >
              <div
                className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg ${rec.gradient}`}
              >
                <rec.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h4 className="font-semibold text-card-foreground mb-1">{rec.title}</h4>
              <p className="text-sm text-muted-foreground mb-3">{rec.description}</p>
              <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:bg-transparent">
                {rec.action}
                <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecommendationsCard;
