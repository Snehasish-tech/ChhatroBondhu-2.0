import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, gradient, path, category }) => {
  return (
    <Link to={path || "#"} className="block h-full">
      <div className="group relative h-full rounded-2xl border border-border bg-card p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/40 overflow-hidden">
        
        {/* Category badge */}
        {category && (
          <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-primary/10 border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="text-[10px] sm:text-xs font-semibold text-primary flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              {category}
            </span>
          </div>
        )}
        
        {/* Icon */}
        <div className="relative mb-4 sm:mb-5">
          <div className={`inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl ${gradient} shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105`}>
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl font-bold text-card-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-4 sm:mb-5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Link */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;
