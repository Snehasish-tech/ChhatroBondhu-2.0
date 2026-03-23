import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, path }) => {
  return (
    <Link to={path || "#"} className="block h-full group">
      <div className="relative h-full rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1">
        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-5 text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Link */}
        <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:gap-3">
          Explore
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default FeatureCard;
