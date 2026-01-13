import { ArrowRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, gradient }) => {
  return (
    <div className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
      
      {/* Icon */}
      <div
        className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${gradient}`}
      >
        <Icon className="h-6 w-6 text-primary-foreground" />
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-semibold text-card-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Link */}
      <a
        href="#"
        className="inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80 group-hover:gap-2"
      >
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default FeatureCard;
