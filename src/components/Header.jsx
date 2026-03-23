import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X, LogOut, User, ChevronRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { user, signOut } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "Study Room", href: "/study-room" },
    { name: "AI Assistant", href: "/ai-assistant" },
    { name: "Focus Mode", href: "/focus-mode" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const isActive = (href) => {
    if (href.startsWith("/#")) return false;
    return location.pathname === href;
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/95 backdrop-blur-lg shadow-sm"
          : "border-b border-transparent bg-background/50 backdrop-blur-sm"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
            <BookOpen className="h-5 w-5" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-primary">Chhatro</span>
            <span className="text-foreground">Bondhu</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isAnchor = link.href.startsWith("/#");

            const linkClasses = `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
              active
                ? "text-primary bg-primary/5"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`;

            return isAnchor ? (
              <a key={link.name} href={link.href} className={linkClasses}>
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className={linkClasses}>
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-9 w-9 rounded-full"
                >
                  <Avatar className="h-9 w-9">
                    <AvatarFallback className="bg-primary/10 text-primary font-medium">
                      {user.email?.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <div className="p-3">
                  <p className="text-sm font-medium">
                    {user.user_metadata?.full_name || "Student"}
                  </p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
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
                  className="text-destructive focus:text-destructive"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button size="sm" asChild className="gap-1.5">
              <Link to="/auth">
                Get Started
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <nav className="container py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              const active = isActive(link.href);

              const linkClasses = `text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                active
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`;

              return isAnchor ? (
                <a
                  key={link.name}
                  href={link.href}
                  className={linkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={linkClasses}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-3 pt-3 border-t border-border">
              {user ? (
                <Button
                  variant="outline"
                  onClick={signOut}
                  className="w-full justify-start"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign out
                </Button>
              ) : (
                <Button asChild className="w-full">
                  <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
