import { useState } from "react";
import { Trophy, Target, Users, Star, TrendingUp, Award, Medal, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/Header";

const ChallengeMode = () => {
  const [activeChallenge, setActiveChallenge] = useState(null);

  const challenges = [
    {
      id: 1,
      title: "7-Day Study Streak",
      description: "Study for at least 2 hours daily for 7 consecutive days",
      progress: 5,
      total: 7,
      xp: 500,
      difficulty: "Medium",
      icon: Target,
    },
    {
      id: 2,
      title: "Math Marathon",
      description: "Complete 100 math problems this week",
      progress: 68,
      total: 100,
      xp: 800,
      difficulty: "Hard",
      icon: Trophy,
    },
    {
      id: 3,
      title: "Early Bird",
      description: "Start studying before 8 AM for 5 days",
      progress: 3,
      total: 5,
      xp: 300,
      difficulty: "Easy",
      icon: Star,
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Alex Chen", xp: 12500, avatar: "AC", badge: "gold" },
    { rank: 2, name: "Sarah Miller", xp: 11200, avatar: "SM", badge: "silver" },
    { rank: 3, name: "James Wilson", xp: 10800, avatar: "JW", badge: "bronze" },
    { rank: 4, name: "You", xp: 9500, avatar: "ME", badge: null },
    { rank: 5, name: "Emma Davis", xp: 8900, avatar: "ED", badge: null },
    { rank: 6, name: "Michael Brown", xp: 8200, avatar: "MB", badge: null },
  ];

  const achievements = [
    { id: 1, name: "First Steps", desc: "Complete your first study session", unlocked: true },
    { id: 2, name: "Consistent Learner", desc: "Maintain 7-day streak", unlocked: true },
    { id: 3, name: "Night Owl", desc: "Study after 10 PM", unlocked: true },
    { id: 4, name: "Speed Reader", desc: "Read 50 pages in one day", unlocked: false },
    { id: 5, name: "Quiz Master", desc: "Score 100% on 10 quizzes", unlocked: false },
    { id: 6, name: "Social Learner", desc: "Join 5 study groups", unlocked: false },
  ];

  const difficultyColors = {
    Easy: "bg-green-500",
    Medium: "bg-yellow-500",
    Hard: "bg-red-500",
  };

  const badgeColors = {
    gold: "bg-yellow-500",
    silver: "bg-gray-400",
    bronze: "bg-orange-600",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent">
              Challenge Mode
            </h1>
            <p className="text-muted-foreground text-lg">
              Compete with friends and level up your learning journey
            </p>
          </div>

          {/* User Stats */}
          <div className="grid md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total XP</p>
                  <p className="text-2xl font-bold">9,500</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <Crown className="h-8 w-8 text-yellow-500 opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Rank</p>
                  <p className="text-2xl font-bold">#4</p>
                </div>
                <Medal className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Achievements</p>
                  <p className="text-2xl font-bold">3/6</p>
                </div>
                <Award className="h-8 w-8 text-green-500 opacity-50" />
              </div>
            </Card>
          </div>

          <Tabs defaultValue="challenges" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="challenges">Active Challenges</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>

            <TabsContent value="challenges" className="space-y-4">
              {challenges.map((challenge) => {
                const Icon = challenge.icon;
                return (
                  <Card key={challenge.id} className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold mb-1">{challenge.title}</h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {challenge.description}
                          </p>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant="outline"
                              className={`${difficultyColors[challenge.difficulty]} text-white border-0`}
                            >
                              {challenge.difficulty}
                            </Badge>
                            <Badge variant="secondary">
                              <Trophy className="h-3 w-3 mr-1" />
                              +{challenge.xp} XP
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-primary">
                          {challenge.progress}/{challenge.total}
                        </p>
                        <p className="text-xs text-muted-foreground">Progress</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Progress
                        value={(challenge.progress / challenge.total) * 100}
                        className="h-2"
                      />
                      <p className="text-sm text-muted-foreground text-right">
                        {Math.round((challenge.progress / challenge.total) * 100)}% Complete
                      </p>
                    </div>
                  </Card>
                );
              })}

              <Card className="p-6 text-center bg-gradient-to-r from-amber-500/10 to-yellow-500/10">
                <Target className="h-12 w-12 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-semibold mb-2">More Challenges Available!</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete current challenges to unlock new ones
                </p>
                <Button variant="outline">View All Challenges</Button>
              </Card>
            </TabsContent>

            <TabsContent value="leaderboard" className="space-y-4">
              {leaderboard.map((user) => (
                <Card
                  key={user.rank}
                  className={`p-4 ${user.name === "You" ? "ring-2 ring-primary bg-primary/5" : ""}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl font-bold text-muted-foreground w-8">
                          {user.rank}
                        </div>
                        {user.badge && (
                          <div className={`${badgeColors[user.badge]} p-2 rounded-full`}>
                            {user.rank === 1 && <Crown className="h-5 w-5 text-white" />}
                            {user.rank === 2 && <Medal className="h-5 w-5 text-white" />}
                            {user.rank === 3 && <Trophy className="h-5 w-5 text-white" />}
                          </div>
                        )}
                      </div>
                      <Avatar>
                        <AvatarFallback>{user.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{user.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Level {Math.floor(user.xp / 500)}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold">{user.xp.toLocaleString()}</p>
                      <p className="text-sm text-muted-foreground">XP</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="achievements" className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`p-6 ${
                    achievement.unlocked ? "bg-green-500/10 border-green-500/20" : "opacity-60"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        achievement.unlocked ? "bg-green-500" : "bg-muted"
                      }`}
                    >
                      <Award
                        className={`h-6 w-6 ${
                          achievement.unlocked ? "text-white" : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{achievement.name}</h3>
                        {achievement.unlocked && (
                          <Badge variant="secondary" className="bg-green-500 text-white">
                            Unlocked
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default ChallengeMode;
