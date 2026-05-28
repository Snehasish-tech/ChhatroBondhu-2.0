import { useState, useEffect } from "react";
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
    <header className={`landing-topbar ${scrolled ? "is-scrolled" : ""}`}>
      <div className="landing-frame landing-topbar-inner">
        {/* Logo */}
        <Link to="/" className="landing-brand">
          <span className="landing-brand-badge">
            <BookOpen className="h-5 w-5" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[#0f2a3f]">Uni</span>
            <span className="text-[#0077b6]">life</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="landing-menu hidden lg:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            const isAnchor = link.href.startsWith("/#");
            const linkClasses = active
              ? "text-[#0f2a3f] bg-[#eaf3fb]"
              : "text-[#284660]";

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
        <div className="landing-cta-row hidden lg:flex">
          <ThemeToggle />

          {user ? (
            <>
              <Link to="/dashboard" className="landing-btn-light">
                Dashboard
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-xl bg-white/70 border border-[#d8e5f1]"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-[#eaf3fb] text-[#0077b6] font-semibold">
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
                    className="text-destructive focus:text-destructive"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Link to="/auth" className="landing-btn-main">
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-lg border border-[#d8e5f1] bg-white/80"
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
        <div className="lg:hidden border-t border-[#d8e5f1] bg-white/95 backdrop-blur-lg">
          <nav className="landing-frame py-4 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isAnchor = link.href.startsWith("/#");
              const active = isActive(link.href);

              const linkClasses = `text-sm font-medium py-2.5 px-3 rounded-lg transition-colors ${
                active ? "text-[#0f2a3f] bg-[#eaf3fb]" : "text-[#284660]"
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

            <div className="mt-3 pt-3 border-t border-[#d8e5f1]">
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
                <Link
                  to="/auth"
                  className="landing-btn-main w-full justify-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
