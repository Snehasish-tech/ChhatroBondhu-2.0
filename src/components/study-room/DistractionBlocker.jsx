import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  ShieldCheck,
  Globe,
  Bell,
  Smartphone,
  MessageSquare,
  Mail,
  Plus,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function DistractionBlocker() {
  const [isBlockingActive, setIsBlockingActive] = useState(false);

  const [settings, setSettings] = useState([
    { id: "notifications", name: "Notifications", icon: Bell, enabled: true },
    { id: "social", name: "Social Media", icon: MessageSquare, enabled: true },
    { id: "email", name: "Email Alerts", icon: Mail, enabled: false },
    { id: "phone", name: "Phone Calls", icon: Smartphone, enabled: false },
  ]);

  const [blockedSites, setBlockedSites] = useState([
    "facebook.com",
    "twitter.com",
    "instagram.com",
    "youtube.com",
    "tiktok.com",
  ]);

  const [newSite, setNewSite] = useState("");

  const toggleSetting = (id) => {
    setSettings((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, enabled: !s.enabled } : s
      )
    );
  };

  const addSite = () => {
    if (
      newSite &&
      !blockedSites.includes(newSite.toLowerCase())
    ) {
      setBlockedSites((prev) => [
        ...prev,
        newSite.toLowerCase().replace(/^https?:\/\//, ""),
      ]);
      setNewSite("");
    }
  };

  const removeSite = (site) => {
    setBlockedSites((prev) => prev.filter((s) => s !== site));
  };

  const enabledCount = settings.filter((s) => s.enabled).length;

  return (
    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            {isBlockingActive ? (
              <ShieldCheck className="h-5 w-5 text-green-500" />
            ) : (
              <Shield className="h-5 w-5 text-primary" />
            )}
            Distraction Blocker
          </CardTitle>

          <Switch
            checked={isBlockingActive}
            onCheckedChange={setIsBlockingActive}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Status */}
        <div
          className={cn(
            "flex items-center gap-2 rounded-lg p-3 text-sm",
            isBlockingActive
              ? "bg-green-500/10 text-green-600 dark:text-green-400"
              : "bg-muted/50 text-muted-foreground"
          )}
        >
          <div
            className={cn(
              "h-2 w-2 rounded-full",
              isBlockingActive
                ? "bg-green-500 animate-pulse"
                : "bg-muted-foreground"
            )}
          />
          {isBlockingActive
            ? `Blocking active • ${enabledCount} categories enabled`
            : "Distraction blocking is off"}
        </div>

        {/* Block Categories */}
        <div className="space-y-2">
          <p className="text-sm font-medium">Block Categories</p>

          <div className="grid grid-cols-2 gap-2">
            {settings.map((setting) => {
              const Icon = setting.icon;

              return (
                <button
                  key={setting.id}
                  onClick={() => toggleSetting(setting.id)}
                  disabled={!isBlockingActive}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border p-3 text-sm",
                    setting.enabled && isBlockingActive
                      ? "border-primary/50 bg-primary/5"
                      : "border-border/50 bg-background/50",
                    !isBlockingActive &&
                      "opacity-50 cursor-not-allowed"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-4 w-4",
                      setting.enabled && isBlockingActive
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  />
                  {setting.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Blocked Websites */}
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-muted-foreground" />
            <p className="text-sm font-medium">
              Blocked Websites
            </p>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="Add website (e.g., reddit.com)"
              value={newSite}
              onChange={(e) => setNewSite(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addSite()}
              disabled={!isBlockingActive}
            />
            <Button
              size="icon"
              onClick={addSite}
              disabled={!isBlockingActive || !newSite}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {blockedSites.map((site) => (
              <Badge
                key={site}
                variant="secondary"
                className={!isBlockingActive ? "opacity-50" : ""}
              >
                {site}
                <button
                  onClick={() => removeSite(site)}
                  disabled={!isBlockingActive}
                  className="ml-1 rounded-full p-0.5 hover:bg-muted"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
