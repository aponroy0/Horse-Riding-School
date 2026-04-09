import { Facebook, Instagram, Share2, Twitter } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const instructors = [
  {
    name: "Andrew John",
    role: "CEO, Horseno",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    delay: 0.1,
  },
  {
    name: "Rivanur R. Rafi",
    role: "Lead Riding Instructor",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
    delay: 0.2,
  },
  {
    name: "Emma Hayes",
    role: "Equestrian Trainer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop",
    delay: 0.3,
  },
  {
    name: "Sophia Davis",
    role: "Jumping Specialist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    delay: 0.4,
  },
];

export default function Instructors() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-brand font-bold mb-4"
          >
            <span className="w-6 h-0.5 bg-brand" />
            <span className="uppercase tracking-widest text-sm">
              Team Members
            </span>
            <span className="w-6 h-0.5 bg-brand" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-heading mb-6"
          >
            Meet Our Best <br /> <span className="text-brand">Instructors</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: instructor.delay }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[40px] aspect-3/4">
                <Image
                  src={instructor.image}
                  alt={instructor.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                />

                {/* Social Overlay */}
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center space-y-4">
                  <div className="flex space-x-3 translate-y-10 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-white text-primary rounded-full flex items-center justify-center hover:bg-secondary hover:text-white transition-colors"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>

                {/* Info Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-3xl shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-heading">
                        {instructor.name}
                      </h3>
                      <p className="text-xs text-brand uppercase tracking-widest mt-1">
                        {instructor.role}
                      </p>
                    </div>
                    <button className="text-gray-300 hover:text-secondary transition-colors">
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
