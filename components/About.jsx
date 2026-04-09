import { ArrowRight, Play } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-[85%]"
            >
              <img
                src="https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=1000&auto=format&fit=crop"
                alt="Horse 1"
                className="rounded-[30px] w-full aspect-square object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />

              {/* Vertical Experience Bar */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-12 bg-[#5A806B] text-white rounded-full py-8 px-3 shadow-xl flex items-center justify-center h-48">
                <p
                  className="text-sm font-medium tracking-widest"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  25+ Years Experience
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 right-0 w-1/2 aspect-square"
            >
              <img
                src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop"
                alt="Horse 2"
                className="rounded-[30px] w-full h-full object-cover border-8 border-[#EFEBE1] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="lg:pl-10 mt-16 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-2 text-[#5A806B] font-bold mb-4"
            >
              <span className="w-6 h-[2px] bg-[#5A806B]" />
              <span className="uppercase tracking-widest text-sm">
                About Us
              </span>
              <span className="w-6 h-[2px] bg-[#5A806B]" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] mb-6 leading-tight"
            >
              We Are <span className="text-[#5A806B]">Best Horse</span>
              <br /> Riding School.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 mb-8 leading-relaxed text-sm"
            >
              Welcome to Horseno, your ultimate destination for all things
              equestrian! Whether you're a seasoned rider or just beginning your
              journey with horses, Horseno is here to guide, inspire.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-6 mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer w-full sm:w-48 h-32 flex-shrink-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop"
                  alt="Video Thumbnail"
                  className="rounded-2xl w-full h-full object-cover shadow-md"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all rounded-2xl flex items-center justify-center">
                  <div className="w-10 h-10 bg-[#E8D154] rounded-full flex items-center justify-center text-[#5A806B] shadow-lg">
                    <Play size={16} fill="currentColor" />
                  </div>
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
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-center space-x-3 text-xs text-gray-700 font-medium"
                  >
                    <div className="w-4 h-4 rounded-full border-2 border-[#5A806B] flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-[#5A806B] rounded-full" />
                    </div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-[#5A806B] text-white px-8 py-3.5 rounded-full font-bold flex items-center space-x-2 hover:bg-primary transition-all"
            >
              <span>About Us</span>
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
