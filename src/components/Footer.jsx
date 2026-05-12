import { BookOpen, Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Security", "Cookies"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer
      id="contact"
      className="relative border-t border-border/50 bg-gradient-to-b from-card/30 to-background py-16 lg:py-20"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-5"
             style={{
               background: "radial-gradient(circle, #58a6ff 0%, transparent 70%)"
             }} />
      </div>

      <div className="container-wide">
        <div className="grid gap-12 lg:gap-8 lg:grid-cols-6 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-foreground transition-transform group-hover:scale-110">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold tracking-tight hidden sm:inline">
                <span className="text-primary">Chhatro</span>
                <span className="text-foreground">Bondhu</span>
              </span>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Transform your learning with AI-powered study tools, real-time collaboration, and personalized learning paths designed for academic excellence.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="h-9 w-9 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border/50 to-transparent my-12" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <p>
              © 2026 ChhatroBondhu. Made with{" "}
              <Heart className="h-3.5 w-3.5 text-accent inline mx-1 fill-accent" />
              for students worldwide.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Security
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-xs text-muted-foreground">
          <p>
            Trusted by 100,000+ students across 50+ countries. 
            <span className="text-primary mx-1">4.9★</span>
            on all platforms.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
