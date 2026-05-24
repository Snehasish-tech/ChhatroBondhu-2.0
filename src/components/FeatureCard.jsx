import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const FeatureCard = ({ icon: Icon, title, description, path, gradient, bgGradient }) => {
  return (
    <Link to={path || "#"} className="block h-full landing-reveal group">
      <div className={`landing-feature-card relative bg-gradient-to-br ${bgGradient} border border-[#b8d5ea]/50`}>
        {/* Glow effect */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
        
        <div className="relative z-10">
          <div className={`landing-feature-icon bg-gradient-to-br ${gradient} shadow-lg`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
          <h3 className="font-display text-[#0f2a3f]">{title}</h3>
          <p className="text-[#284660]">{description}</p>
          <span className="landing-feature-link text-[#0077b6] group-hover:text-[#005c99]">
            Explore
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default FeatureCard;
