import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  return (
    <footer id="contact" className="border-t border-border bg-card py-12 lg:py-16">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-xl font-bold text-foreground">ChhatroBondhu</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-6">
              Your AI-powered study companion. Learn smarter, not harder, with personalized learning tools.
            </p>
            <div className="flex gap-4">
              {["Twitter", "LinkedIn", "GitHub", "Discord"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ChhatroBondhu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
