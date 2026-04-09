import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] lg:h-screen pt-28 sm:pt-32 lg:pt-0 pb-14 sm:pb-16 lg:pb-0 flex items-start lg:items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Horse Riding"
          fill
          sizes="100vw"
          priority
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-2 sm:pt-4 lg:pt-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 text-secondary font-medium mb-4"
            >
              <span className="w-8 h-[2px] bg-secondary" />
              <span className="uppercase tracking-widest text-sm pt-4">
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
              At Buraq Horse Riding School, we make every ride powerful and
              unforgettable, whether you’re a beginner or advancing your skills,
              our expert trainers and well-trained horses guide your journey.
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
