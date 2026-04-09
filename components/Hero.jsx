import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2071&auto=format&fit=crop"
          alt="Horse Riding"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-secondary font-medium mb-4"
            >
              <span className="w-8 h-[2px] bg-secondary" />
              <span className="uppercase tracking-widest text-sm">
                Be Ready for Your Next Ride
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-[1.1] mb-6"
            >
              Discover The Joy <br />
              Of <span className="text-secondary">Riding</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
            >
              At Horseno, we turn every ride into an unforgettable journey.
              Whether you're a beginner or an experienced rider, join us to
              explore.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <button className="bg-primary text-white px-8 py-4 rounded-full font-medium flex items-center space-x-2 hover:bg-primary/90 transition-all group">
                <span>Read More</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 hidden lg:block">
          <div className="w-32 h-32 border-2 border-secondary/30 rounded-lg -rotate-12" />
        </div>
      </div>
    </section>
  );
}
