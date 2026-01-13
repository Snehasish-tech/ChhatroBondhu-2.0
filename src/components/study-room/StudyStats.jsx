import { Card, CardContent } from "@/components/ui/card";
import { Clock, Target, Zap, Calendar } from "lucide-react";

const stats = [
  { label: "Today's Focus", value: "2h 45m", icon: Clock, color: "text-primary" },
  { label: "Sessions Done", value: "4", icon: Target, color: "text-green-500" },
  { label: "Focus Score", value: "92%", icon: Zap, color: "text-amber-500" },
  { label: "Day Streak", value: "7", icon: Calendar, color: "text-purple-500" },
];

export function StudyStats() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
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
  );
}
