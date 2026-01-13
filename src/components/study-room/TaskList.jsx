import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ListTodo, Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function TaskList() {
  const [tasks, setTasks] = useState([
    { id: "1", text: "Review Chapter 5 notes", completed: true },
    { id: "2", text: "Complete math problem set", completed: false },
    { id: "3", text: "Watch physics lecture video", completed: false },
    { id: "4", text: "Prepare for tomorrow's quiz", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      setTasks((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          text: newTask.trim(),
          completed: false,
        },
      ]);
      setNewTask("");
    }
  };

  // ✅ FIXED: removed TypeScript type
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  // ✅ FIXED: removed TypeScript type
  const removeTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const completedCount = tasks.filter((t) => t.completed).length;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <ListTodo className="h-5 w-5 text-primary" />
            Study Tasks
          </CardTitle>
          <span className="text-sm text-muted-foreground">
            {completedCount}/{tasks.length}
          </span>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Add Task */}
        <div className="flex gap-2">
          <Input
            placeholder="Add a study task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
            className="flex-1"
          />
          <Button size="icon" onClick={addTask} disabled={!newTask.trim()}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        {/* Task List */}
        <div className="space-y-2 max-h-[200px] overflow-y-auto">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={cn(
                "flex items-center gap-3 rounded-lg border border-border/50 p-3 transition-all",
                task.completed && "bg-muted/30"
              )}
            >
              <Checkbox
                checked={task.completed}
                onCheckedChange={() => toggleTask(task.id)}
              />

              <span
                className={cn(
                  "flex-1 text-sm",
                  task.completed &&
                    "text-muted-foreground line-through"
                )}
              >
                {task.text}
              </span>

              <button
                onClick={() => removeTask(task.id)}
                className="text-muted-foreground hover:text-destructive transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        {tasks.length === 0 && (
          <p className="text-center text-sm text-muted-foreground py-4">
            No tasks yet. Add one to get started!
          </p>
        )}
      </CardContent>
    </Card>
  );
}
