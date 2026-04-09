import { ArrowRight, Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const galleryItems = [
  {
    image: "/assets/moments/m-1.png",
    type: "portrait",
  },
  {
    image: "/assets/moments/m-2.png",
    type: "featured",
    badge: "Riding Club",
    title: "Unforgettable Moments in...",
    desc: "Explore our favorite riding moments and training highlights captured in action.",
  },
  {
    image: "/assets/moments/m-3.png",
    type: "portrait",
  },
  {
    image: "/assets/moments/m-4.png",
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
            className="inline-flex items-center space-x-2 text-brand font-bold mb-4"
          >
            <span className="w-6 h-0.5 bg-brand" />
            <span className="uppercase tracking-widest text-sm">Gallery</span>
            <span className="w-6 h-0.5 bg-brand" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-heading mb-6"
          >
            Moments With <br /> <span className="text-brand">Horses</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 h-auto md:h-125">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 rounded-[30px] overflow-hidden h-100 md:h-full relative group"
          >
            <Image
              src={galleryItems[0].image}
              alt="Gallery 1"
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Item 2 (Featured) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 rounded-[30px] overflow-hidden relative h-100 md:h-full group"
          >
            <Image
              src={galleryItems[1].image}
              alt="Gallery 2"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-brand/90 via-brand/20 to-transparent" />

            {/* Badge */}
            <div className="absolute top-6 left-6 bg-brand/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-xs font-medium">
              {galleryItems[1].badge}
            </div>

            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-highlight rounded-full flex items-center justify-center text-heading shadow-lg cursor-pointer hover:scale-110 transition-transform">
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
            className="md:col-span-1 rounded-[30px] overflow-hidden h-100 md:h-full relative group"
          >
            <Image
              src={galleryItems[2].image}
              alt="Gallery 3"
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>

          {/* Item 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-1 rounded-[30px] overflow-hidden h-100 md:h-full relative group"
          >
            <Image
              src={galleryItems[3].image}
              alt="Gallery 4"
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <div className="text-center mt-12">
          <div className="flex items-center justify-center space-x-2 text-sm font-bold text-heading">
            <span>See others Moments?</span>
            <a
              href="#"
              className="text-brand flex items-center space-x-1 hover:underline"
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
