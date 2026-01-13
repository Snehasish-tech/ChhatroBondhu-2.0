
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BookOpen, Target, Zap } from "lucide-react";

const QuickStatsBar = () => {
  const stats = [
    {
      icon: Clock,
      label: "Study Time Today",
      value: "2h 45m",
      change: "+30m vs yesterday",
      changeType: "positive",
    },
    {
      icon: BookOpen,
      label: "Topics Covered",
      value: "8",
      change: "3 more to go",
      changeType: "neutral",
    },
    {
      icon: Target,
      label: "Daily Goal",
      value: "75%",
      change: "On track!",
      changeType: "positive",
    },
    {
      icon: Zap,
      label: "Focus Score",
      value: "92",
      change: "+5 from last week",
      changeType: "positive",
    },
  ];

  const getChangeColor = (changeType) => {
    switch (changeType) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card key={stat.label} className="border-border">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <p className="mb-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-card-foreground">
                    {stat.value}
                  </p>
                  <p
                    className={`mt-1 text-xs ${getChangeColor(
                      stat.changeType
                    )}`}
                  >
                    {stat.change}
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default QuickStatsBar;
