import { useState } from "react";
import { Calendar as CalendarIcon, Plus, Clock, BookOpen, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Header from "@/components/Header";

const SmartSchedule = () => {
  const [date, setDate] = useState(new Date());
  const [sessions, setSessions] = useState([
    { id: 1, subject: "Mathematics", time: "09:00 AM", duration: "60 min", priority: "high", completed: false },
    { id: 2, subject: "Physics", time: "11:00 AM", duration: "90 min", priority: "medium", completed: false },
    { id: 3, subject: "Chemistry", time: "02:00 PM", duration: "45 min", priority: "high", completed: true },
    { id: 4, subject: "Biology", time: "04:00 PM", duration: "60 min", priority: "low", completed: false },
  ]);

  const [newSession, setNewSession] = useState({
    subject: "",
    time: "",
    duration: "60",
    priority: "medium",
  });

  const addSession = () => {
    if (newSession.subject && newSession.time) {
      setSessions([
        ...sessions,
        {
          id: Date.now(),
          ...newSession,
          duration: `${newSession.duration} min`,
          completed: false,
        },
      ]);
      setNewSession({ subject: "", time: "", duration: "60", priority: "medium" });
    }
  };

  const toggleSession = (id) => {
    setSessions(sessions.map((s) => (s.id === id ? { ...s, completed: !s.completed } : s)));
  };

  const priorityColor = {
    high: "bg-red-500",
    medium: "bg-yellow-500",
    low: "bg-green-500",
  };

  const stats = {
    totalHours: 4.75,
    completedToday: 1,
    upcomingSessions: 3,
    weeklyGoal: 85,
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Smart Schedule Optimizer
            </h1>
            <p className="text-muted-foreground text-lg">
              AI-powered scheduling that adapts to your learning style
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Today's Study Time</p>
                  <p className="text-2xl font-bold">{stats.totalHours}h</p>
                </div>
                <Clock className="h-8 w-8 text-primary opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">{stats.completedToday}</p>
                </div>
                <Target className="h-8 w-8 text-green-500 opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                  <p className="text-2xl font-bold">{stats.upcomingSessions}</p>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500 opacity-50" />
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Weekly Progress</p>
                  <p className="text-2xl font-bold">{stats.weeklyGoal}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-orange-500 opacity-50" />
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Calendar Section */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Calendar</h2>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border w-full"
              />
              
              <div className="mt-4 space-y-2">
                <p className="text-sm font-semibold">AI Recommendations:</p>
                <div className="space-y-2">
                  <div className="text-sm p-2 bg-blue-500/10 rounded-lg">
                    ✨ Best study time: 9-11 AM
                  </div>
                  <div className="text-sm p-2 bg-green-500/10 rounded-lg">
                    🎯 Focus on Math today
                  </div>
                  <div className="text-sm p-2 bg-purple-500/10 rounded-lg">
                    💡 Take a break at 3 PM
                  </div>
                </div>
              </div>
            </Card>

            {/* Sessions List */}
            <Card className="p-6 lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Today's Schedule</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-orange-500 to-amber-500">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Session
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create Study Session</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4 mt-4">
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          placeholder="e.g., Mathematics"
                          value={newSession.subject}
                          onChange={(e) =>
                            setNewSession({ ...newSession, subject: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={newSession.time}
                          onChange={(e) =>
                            setNewSession({ ...newSession, time: e.target.value })
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="duration">Duration (minutes)</Label>
                        <Select
                          value={newSession.duration}
                          onValueChange={(value) =>
                            setNewSession({ ...newSession, duration: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="45">45 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                            <SelectItem value="90">90 minutes</SelectItem>
                            <SelectItem value="120">120 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select
                          value={newSession.priority}
                          onValueChange={(value) =>
                            setNewSession({ ...newSession, priority: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="low">Low</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button onClick={addSession} className="w-full">
                        Add Session
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="space-y-3">
                {sessions.map((session) => (
                  <Card
                    key={session.id}
                    className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                      session.completed ? "opacity-60 bg-muted" : ""
                    }`}
                    onClick={() => toggleSession(session.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-1 h-12 rounded-full ${priorityColor[session.priority]}`}
                        />
                        <div>
                          <h3 className="font-semibold flex items-center gap-2">
                            {session.subject}
                            {session.completed && (
                              <Badge variant="secondary" className="text-xs">
                                Completed
                              </Badge>
                            )}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {session.time} • {session.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={`${priorityColor[session.priority]} text-white border-0`}
                        >
                          {session.priority}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmartSchedule;
