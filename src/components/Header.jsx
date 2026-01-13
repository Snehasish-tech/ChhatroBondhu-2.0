import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, LogOut, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Study Room", href: "/study-room" },
    { name: "AI Assistant", href: "/ai-assistant" },
    { name: "Focus Mode", href: "/focus-mode" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  // ✅ FIXED: removed TypeScript syntax
  const isActive = (href) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-transform group-hover:scale-105">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="text-xl font-bold">
  <span className="text-primary">Chhatro</span>
  <span className="text-foreground">Bondhu</span>
</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isAnchor = link.href.startsWith("/#");

            return isAnchor ? (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-foreground ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <div className="p-2">
                  <p className="text-sm font-medium">
                    {user.user_metadata?.full_name || "User"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {user.email}
                  </p>
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/dashboard" className="flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={signOut}
                  className="text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="hero" asChild>
              <Link to="/auth">Get Started</Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("/#");

              return isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            {user ? (
              <Button variant="outline" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            ) : (
              <Button variant="hero" asChild>
                <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
