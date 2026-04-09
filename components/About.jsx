import { ArrowRight, Play } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const contentVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0.05 : 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.65,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden relative">
      <motion.div
        aria-hidden="true"
        className="absolute left-6 top-12 h-56 w-px bg-linear-to-b from-transparent via-brand/60 to-transparent"
        animate={
          shouldReduceMotion
            ? undefined
            : { y: [0, 26, 0], opacity: [0.3, 1, 0.3] }
        }
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <motion.div
              initial={{
                opacity: 0,
                x: shouldReduceMotion ? 0 : -36,
                clipPath: shouldReduceMotion
                  ? "inset(0 0 0 0)"
                  : "inset(0 100% 0 0)",
              }}
              whileInView={{ opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.95,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative w-[85%]"
              whileHover={
                shouldReduceMotion ? undefined : { scale: 1.02, rotate: -0.35 }
              }
            >
              <img
                src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=1000&auto=format&fit=crop"
                alt="Horse 1"
                className="rounded-[30px] w-full aspect-square object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 50,
                scale: 0.9,
              }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: [0, -8, 0],
                      rotate: [0, 0.45, 0],
                    }
              }
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              transition={{
                duration: shouldReduceMotion ? 0.2 : 0.85,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: "easeOut",
                ...(shouldReduceMotion
                  ? {}
                  : {
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      rotate: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }),
              }}
              className="absolute -bottom-10 right-0 w-1/2 aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
                alt="Horse 2"
                className="rounded-[30px] w-full h-full object-cover border-8 border-surface shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="absolute top-8 right-14 w-16 h-16 rounded-full border border-brand/30"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.25, 1],
                      opacity: [0.4, 0.9, 0.4],
                    }
              }
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Content */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="lg:pl-10 mt-16 lg:mt-0"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 text-brand font-bold mb-4"
            >
              <span className="w-6 h-0.5 bg-brand" />
              <span className="uppercase tracking-widest text-sm">
                About Us
              </span>
              <span className="w-6 h-0.5 bg-brand" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading mb-6 leading-tight"
            >
              We Are <span className="text-brand">Best Horse</span>
              <br /> Riding School.
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="h-1 w-28 rounded-full bg-brand/25 mb-6 overflow-hidden"
            >
              <motion.div
                className="h-full w-full bg-brand"
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{
                  duration: shouldReduceMotion ? 0.15 : 0.8,
                  ease: "easeOut",
                }}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 mb-8 leading-relaxed text-sm"
            >
              Welcome to Horseno, your ultimate destination for all things
              equestrian! Whether you're a seasoned rider or just beginning your
              journey with horses, Horseno is here to guide, inspire.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 mb-10"
            >
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { scale: 1.03, rotate: -0.5 }
                }
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="relative group cursor-pointer w-full sm:w-48 h-32 shrink-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop"
                  alt="Video Thumbnail"
                  className="rounded-2xl w-full h-full object-cover shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-2xl flex items-center justify-center">
                  <motion.div
                    animate={
                      shouldReduceMotion ? undefined : { scale: [1, 1.12, 1] }
                    }
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-10 h-10 bg-highlight rounded-full flex items-center justify-center text-brand shadow-lg"
                  >
                    <Play size={16} fill="currentColor" />
                  </motion.div>
                </div>
              </motion.div>

              <ul className="space-y-3 flex flex-col justify-center">
                {[
                  "Lorem ipsum dolor sit amet consectetur.",
                  "Mei an lericulaeu adipiscing elit.",
                  "lericulaeuri pidi sit amet.",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: shouldReduceMotion ? 0.15 : 0.55,
                      delay: shouldReduceMotion ? 0 : 0.1 * i,
                    }}
                    className="flex items-center space-x-3 text-xs text-gray-700 font-medium"
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-brand flex items-center justify-center shrink-0">
                      <motion.div
                        animate={
                          shouldReduceMotion
                            ? undefined
                            : { scale: [1, 1.35, 1] }
                        }
                        transition={{
                          duration: 1.6,
                          repeat: Infinity,
                          delay: i * 0.22,
                        }}
                        className="w-1.5 h-1.5 bg-brand rounded-full"
                      />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.button
              variants={itemVariants}
              whileHover={
                shouldReduceMotion ? undefined : { y: -2, scale: 1.02 }
              }
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="relative overflow-hidden bg-brand text-white px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-primary transition-all"
            >
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/25 to-transparent"
                initial={{ x: "-140%" }}
                animate={
                  shouldReduceMotion ? undefined : { x: ["-140%", "160%"] }
                }
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 1.4,
                  ease: "easeInOut",
                }}
              />
              <span>About Us</span>
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
