import { BookOpen, Twitter, Linkedin, Github, Youtube, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog"],
    Company: ["About", "Blog", "Careers", "Press"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", name: "Twitter" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Youtube, href: "#", name: "YouTube" }
  ];

  return (
    <footer id="contact" className="bg-[#0a192f] text-white pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00a6fb]/50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0077b6]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group inline-flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#0077b6] to-[#00a6fb] text-white shadow-lg group-hover:shadow-[#00a6fb]/30 transition-all duration-300">
                <BookOpen className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-display text-white">
                Uni<span className="text-[#00a6fb]">life</span>
              </span>
            </Link>
            <p className="text-sm text-[#88a4b8] max-w-sm mb-8 leading-relaxed">
              Your AI-powered study companion. Join thousands of students learning smarter, not harder, with personalized tools.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#88a4b8]" />
                <input type="email" placeholder="Subscribe to newsletter" className="w-full bg-[#112a46] border border-[#1e3c5a] text-white rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-[#00a6fb] transition-colors" required />
              </div>
              <button type="submit" className="bg-[#00a6fb] hover:bg-[#79ceff] text-[#0f2a3f] font-bold px-5 py-2.5 rounded-lg text-sm transition-colors duration-300 shadow-lg shadow-[#00a6fb]/20">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-xs">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-[#88a4b8] hover:text-[#00a6fb] transition-colors duration-200 block">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1e3c5a] flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-[#88a4b8]">
            © {new Date().getFullYear()} Unilife. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a key={social.name} href={social.href} className="flex items-center justify-center w-10 h-10 rounded-full bg-[#112a46] border border-[#1e3c5a] text-[#88a4b8] hover:bg-[#00a6fb] hover:text-[#0f2a3f] hover:border-[#00a6fb] transition-all duration-300" aria-label={social.name}>
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[#88a4b8] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-[#88a4b8] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
