import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rahul M.",
      role: "Engineering Student",
      content: "The AI Study Assistant changed how I prepare for exams. It explains complex physics concepts in a way I actually understand.",
      rating: 5
    },
    {
      name: "Priya S.",
      role: "Medical Student",
      content: "I use the Focus Mode and Smart Flashcards daily. My retention has improved drastically since I started using Unilife.",
      rating: 5
    },
    {
      name: "Amit K.",
      role: "High School Senior",
      content: "The Exam Pattern Analyzer accurately predicted 80% of my board exam questions. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f9fdff] to-[#eef5fa]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 landing-reveal">
          <span className="text-[#0077b6] font-semibold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-[#0f2a3f] mt-2 mb-4">Loved by Students</h2>
          <p className="text-[#284660] max-w-2xl mx-auto">See what our community has to say about their learning experience.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((test, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-[#d4e8f7] landing-reveal hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < test.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                ))}
              </div>
              <p className="text-[#284660] mb-6 italic group-hover:text-[#0f2a3f] transition-colors duration-300">"{test.content}"</p>
              <div>
                <h4 className="font-bold text-[#0f2a3f]">{test.name}</h4>
                <p className="text-sm text-[#0077b6]">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
