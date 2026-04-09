import { ArrowRight, Plus } from "lucide-react";
import { motion } from "motion/react";

const galleryItems = [
  {
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=600&auto=format&fit=crop",
    type: "portrait",
  },
  {
    image:
      "https://images.unsplash.com/photo-1679198488361-1e829637dbd0?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "featured",
    badge: "Riding Club",
    title: "Unforgettable Moments in...",
    desc: "Explore our favorite riding moments and training highlights captured in action.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=600&auto=format&fit=crop",
    type: "portrait",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=600&auto=format&fit=crop",
    type: "portrait",
  },
];

export default function Gallery() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-[#5A806B] font-bold mb-4"
          >
            <span className="w-6 h-[2px] bg-[#5A806B]" />
            <span className="uppercase tracking-widest text-sm">Gallery</span>
            <span className="w-6 h-[2px] bg-[#5A806B]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#333] mb-6"
          >
            Moments With <br /> <span className="text-[#5A806B]">Horses</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 h-auto md:h-[500px]">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 rounded-[30px] overflow-hidden h-[400px] md:h-full relative group"
          >
            <img
              src={galleryItems[0].image}
              alt="Gallery 1"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Item 2 (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 rounded-[30px] overflow-hidden relative h-[400px] md:h-full group"
          >
            <img
              src={galleryItems[1].image}
              alt="Gallery 2"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#5A806B]/90 via-[#5A806B]/20 to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-[#5A806B]/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-medium">
              {galleryItems[1].badge}
            </div>

            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#E8D154] rounded-full flex items-center justify-center text-[#333] shadow-lg cursor-pointer hover:scale-110 transition-transform">
              <Plus size={24} />
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                {galleryItems[1].title}
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {galleryItems[1].desc}
              </p>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 rounded-[30px] overflow-hidden h-[400px] md:h-full relative group"
          >
            <img
              src={galleryItems[2].image}
              alt="Gallery 3"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 rounded-[30px] overflow-hidden h-[400px] md:h-full relative group"
          >
            <img
              src={galleryItems[3].image}
              alt="Gallery 4"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 text-sm font-bold text-[#333]">
            <span>See others Moments?</span>
            <a
              href="#"
              className="text-[#5A806B] flex items-center space-x-1 hover:underline"
            >
              <span>View More</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
