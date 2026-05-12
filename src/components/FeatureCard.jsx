import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, path, highlight, delay = 0 }) => {
  return (
    <Link to={path || "#"} className="block h-full group">
      <div
        className="relative h-full card-glow rounded-xl p-6 transition-all duration-300 group-hover:border-primary/60"
        style={{
          animation: `fade-up 0.8s ease-out backwards`,
          animationDelay: `${delay}s`,
        }}
      >
        {/* Highlight Glow */}
        {highlight && (
          <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
        )}

        {/* Icon Container */}
        <div className="mb-6 inline-block">
          <div className={`h-12 w-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
            highlight
              ? "bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 group-hover:border-primary/60"
              : "bg-primary/10 border border-primary/20 group-hover:border-primary/40"
          }`}>
            <Icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-3 text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-sm text-muted-foreground leading-relaxed line-clamp-2 group-hover:line-clamp-none">
          {description}
        </p>

        {/* Link with Animation */}
        <div className="flex items-center gap-2 text-sm font-medium text-primary transition-all duration-300 group-hover:gap-3">
          <span>Explore</span>
          <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
