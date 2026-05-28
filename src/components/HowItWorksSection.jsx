import { UserPlus, Target, Award } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Create an Account",
      description: "Sign up for free and set up your personalized learning profile in minutes."
    },
    {
      icon: Target,
      title: "Set Your Goals",
      description: "Choose your subjects and let our AI create a customized study plan for you."
    },
    {
      icon: Award,
      title: "Achieve Excellence",
      description: "Follow the plan, track your progress, and see your grades soar."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 landing-reveal">
          <span className="text-[#0077b6] font-semibold tracking-wider uppercase text-sm">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0f2a3f] mt-2 mb-4">How It Works</h2>
          <p className="text-[#284660] max-w-2xl mx-auto">Get started with Unilife in three simple steps.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center landing-reveal group" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#e8f4ff] to-[#f4faff] rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#b8d5ea] group-hover:scale-110 group-hover:shadow-lg group-hover:border-[#0077b6] transition-all duration-300">
                <step.icon className="w-10 h-10 text-[#0077b6] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-bold text-[#0f2a3f] mb-3">{step.title}</h3>
              <p className="text-[#284660] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
