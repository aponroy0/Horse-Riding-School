import { Star } from "lucide-react";
import { motion } from "motion/react";

const testimonials = [
  {
    name: "Adam Rodja",
    role: "CEO, VecuroSoft",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet, isd consectectur adipiscing elit, sed do your eiusmod tempor incididunt ut labore eta aliqua. Ut enim ad minim labore veniam",
    rating: 5,
    color: "bg-white text-heading",
    starColor: "text-brand",
    quoteColor: "text-gray-200",
  },
  {
    name: "Adam Rodja",
    role: "CEO, VecuroSoft",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet, isd consectectur adipiscing elit, sed do your eiusmod tempor incididunt ut labore eta aliqua. Ut enim ad minim labore veniam",
    rating: 5,
    color: "bg-brand text-white",
    starColor: "text-highlight",
    quoteColor: "text-brand-muted",
  },
  {
    name: "Adam Rodja",
    role: "CEO, VecuroSoft",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    text: "Lorem ipsum dolor sit amet, isd consectectur adipiscing elit, sed do your eiusmod tempor incididunt ut labore eta aliqua. Ut enim ad minim labore veniam",
    rating: 5,
    color: "bg-white text-heading",
    starColor: "text-brand",
    quoteColor: "text-gray-200",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-brand font-bold mb-4"
          >
            <span className="w-6 h-0.5 bg-brand" />
            <span className="uppercase tracking-widest text-sm">
              Testimonials
            </span>
            <span className="w-6 h-0.5 bg-brand" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-heading"
          >
            What Our <span className="text-brand">Clients</span>
            <br /> Feedback
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${testimonial.color} p-8 md:p-10 rounded-[30px] shadow-xl relative`}
            >
              {/* Avatar overlapping top right */}
              <div className="absolute -top-8 right-8 w-16 h-16 rounded-2xl overflow-hidden border-4 border-surface shadow-lg">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={testimonial.starColor}
                    fill="currentColor"
                  />
                ))}
              </div>

              <p
                className={`text-sm mb-8 leading-relaxed ${index === 1 ? "text-white/90" : "text-gray-500"}`}
              >
                {testimonial.text}
              </p>

              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-1">{testimonial.name}</h4>
                <p
                  className={`text-xs ${index === 1 ? "text-white/70" : "text-gray-400"}`}
                >
                  {testimonial.role}
                </p>
              </div>

              {/* Quote Icon Decoration */}
              <div
                className={`absolute bottom-8 right-8 ${testimonial.quoteColor}`}
              >
                <svg
                  width="60"
                  height="45"
                  viewBox="0 0 60 45"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.3333 0C5.96954 0 0 5.96954 0 13.3333V45H26.6667V13.3333C26.6667 5.96954 20.6971 0 13.3333 0Z" />
                  <path d="M46.6667 0C39.3029 0 33.3333 5.96954 33.3333 13.3333V45H60V13.3333C60 5.96954 54.0305 0 46.6667 0Z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
