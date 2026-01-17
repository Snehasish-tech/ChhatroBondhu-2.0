import { useState } from "react";
import { Bell, Plus, Clock, BookOpen, Calendar, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";

const SmartReminders = () => {
  const [reminders, setReminders] = useState([
    { id: 1, title: "Study Mathematics", time: "09:00 AM", days: ["Mon", "Wed", "Fri"], enabled: true, subject: "Math" },
    { id: 2, title: "Review Physics Notes", time: "02:00 PM", days: ["Tue", "Thu"], enabled: true, subject: "Physics" },
    { id: 3, title: "Practice Chemistry", time: "04:30 PM", days: ["Mon", "Thu"], enabled: false, subject: "Chemistry" },
  ]);

  const [newReminder, setNewReminder] = useState({
    title: "",
    time: "",
    days: [],
    subject: "General",
  });

  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const addReminder = () => {
    if (newReminder.title && newReminder.time && newReminder.days.length > 0) {
      setReminders([
        ...reminders,
        {
          id: Date.now(),
          ...newReminder,
          enabled: true,
        },
      ]);
      setNewReminder({ title: "", time: "", days: [], subject: "General" });
    }
  };

  const toggleReminder = (id) => {
    setReminders(reminders.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)));
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter((r) => r.id !== id));
  };

  const toggleDay = (day) => {
    setNewReminder((prev) => ({
      ...prev,
      days: prev.days.includes(day) ? prev.days.filter((d) => d !== day) : [...prev.days, day],
    }));
  };

  const subjectColors = {
    Math: "bg-blue-500",
    Physics: "bg-purple-500",
    Chemistry: "bg-green-500",
    Biology: "bg-pink-500",
    General: "bg-gray-500",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 pt-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Smart Reminders
            </h1>
            <p className="text-muted-foreground text-lg">
              Context-aware notifications for optimal study times
            </p>
          </div>

          <div className="grid gap-6">
            {/* Add Reminder Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="w-full bg-gradient-to-r from-yellow-500 to-orange-500">
                  <Plus className="h-5 w-5 mr-2" />
                  Create New Reminder
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Create Reminder</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 mt-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Study Session"
                      value={newReminder.title}
                      onChange={(e) => setNewReminder({ ...newReminder, title: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="time">Time</Label>
                    <Input
                      id="time"
                      type="time"
                      value={newReminder.time}
                      onChange={(e) => setNewReminder({ ...newReminder, time: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label>Subject</Label>
                    <Select
                      value={newReminder.subject}
                      onValueChange={(value) => setNewReminder({ ...newReminder, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="General">General</SelectItem>
                        <SelectItem value="Math">Mathematics</SelectItem>
                        <SelectItem value="Physics">Physics</SelectItem>
                        <SelectItem value="Chemistry">Chemistry</SelectItem>
                        <SelectItem value="Biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Repeat On</Label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {daysOfWeek.map((day) => (
                        <Button
                          key={day}
                          variant={newReminder.days.includes(day) ? "default" : "outline"}
                          size="sm"
                          onClick={() => toggleDay(day)}
                        >
                          {day}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Button onClick={addReminder} className="w-full">
                    Add Reminder
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* AI Suggestions */}
            <Card className="p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-500 text-white p-3 rounded-lg">
                  <Bell className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">AI Suggestions</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Based on your study patterns, we recommend:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-yellow-600" />
                      <span>Study Math between 9-11 AM (peak focus time)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-yellow-600" />
                      <span>Add reminder for Physics revision on Thursday</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-yellow-600" />
                      <span>Review Chemistry notes before weekend</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Reminders List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Reminders</h2>
              
              {reminders.length === 0 ? (
                <Card className="p-12 text-center">
                  <Bell className="h-16 w-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                  <p className="text-muted-foreground">No reminders yet</p>
                  <p className="text-sm text-muted-foreground">Create your first reminder to get started</p>
                </Card>
              ) : (
                reminders.map((reminder) => (
                  <Card
                    key={reminder.id}
                    className={`p-6 transition-all ${
                      reminder.enabled ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className={`w-1 h-12 rounded-full ${
                              subjectColors[reminder.subject] || subjectColors.General
                            }`}
                          />
                          <div>
                            <h3 className="text-lg font-semibold">{reminder.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                              <Clock className="h-4 w-4" />
                              <span>{reminder.time}</span>
                              <Badge variant="outline">{reminder.subject}</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-2 ml-4 mt-3">
                          {reminder.days.map((day) => (
                            <Badge key={day} variant="secondary" className="text-xs">
                              {day}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Switch
                          checked={reminder.enabled}
                          onCheckedChange={() => toggleReminder(reminder.id)}
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => deleteReminder(reminder.id)}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SmartReminders;
