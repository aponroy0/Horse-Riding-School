import { Check, Eye, Play, Target } from "lucide-react";
import { motion } from "motion/react";

export default function WhyChoose() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Video & Mission/Vision */}
          <div className="space-y-12">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 text-secondary font-medium mb-4"
              >
                <span className="w-8 h-0.5 bg-secondary" />
                <span className="uppercase tracking-widest text-sm">
                  Why Choose Horseno
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-primary mb-8"
              >
                We Are Providing <br /> Best Services
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer aspect-video rounded-[40px] overflow-hidden shadow-2xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-lg group-hover:scale-110 transition-transform">
                    <Play size={24} fill="currentColor" />
                  </div>
                </div>
              </motion.div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Our Mission
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      To inspire a love for horse riding through expert
                      training, community, and unforgettable experiences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent text-secondary rounded-full flex items-center justify-center shrink-0">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Our Vision
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      To be the leading hub for equestrian enthusiasts,
                      fostering a deep bond between riders and horses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-accent/30 p-10 md:p-16 rounded-[40px] relative"
          >
            <h3 className="text-2xl font-bold text-primary mb-8">
              What Makes Horseno <br /> Your Best Choice.
            </h3>
            <p className="text-gray-600 mb-10 text-sm leading-relaxed">
              Experience expert training, a welcoming community, and a true
              passion for horse riding at Horseno.
            </p>

            <ul className="space-y-4">
              {[
                "100% Satisfaction Guaranty",
                "Commitment To Customers",
                "Quality Control System",
                "Eco Friendly Environment",
                "Professional Trainer",
                "Best Horses Riding",
                "Healthy Horses",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 text-sm font-medium text-primary"
                >
                  <div className="w-5 h-5 bg-secondary text-primary rounded-full flex items-center justify-center">
                    <Check size={12} strokeWidth={3} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Decorative Dots */}
            <div className="absolute top-10 right-10 opacity-10">
              <div className="grid grid-cols-4 gap-2">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-primary rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
