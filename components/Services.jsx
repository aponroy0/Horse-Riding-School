import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

const services = [
  {
    image: "/assets/services/riding.png",
    title: "Horse Riding & Professional Training",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image: "/assets/services/archery.png",
    title: "Horseback Archery Training",
    color: "bg-primary text-white",
    btnColor: "bg-brand-muted text-white",
  },
  {
    image: "/assets/services/consultancy.png",
    title: "Expert Horse Consultancy",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image: "/assets/services/rental.png",
    title: "Horse & Stable Rental Facilities",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image: "/assets/services/trainners.png",
    title: "Well-Trained Horses with Experienced Trainers",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image: "/assets/services/environment.png",
    title: "Spacious Arena with a Safe & Comfortable Environment",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image: "/assets/services/photography.png",
    title: "Photography & Videography Services",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-visible">
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 -left-16 w-64 h-64 bg-brand/15 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -18, 0],
                x: [0, 8, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-24 -right-12 w-72 h-72 bg-secondary/15 rounded-full blur-3xl"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, 14, 0],
                x: [0, -10, 0],
                rotate: [0, 5, 0],
              }
        }
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 text-primary font-bold mb-4"
          >
            <span className="w-6 h-[2px] bg-primary" />
            <span className="uppercase tracking-widest text-sm">
              Our Services
            </span>
            <span className="w-6 h-[2px] bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-heading mb-6"
          >
            Our Awesome <br /> <span className="text-primary">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: shouldReduceMotion ? 1 : 0,
                y: shouldReduceMotion ? 0 : 20,
                scale: shouldReduceMotion ? 1 : 0.98,
              }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.45,
                delay: shouldReduceMotion ? 0 : index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      y: -10,
                      rotate: index % 2 === 0 ? -0.6 : 0.6,
                      transition: { duration: 0.28, ease: "easeOut" },
                    }
              }
              className={`rounded-[30px] overflow-hidden shadow-xl flex flex-col items-center text-center group ${service.color}`}
            >
              <div className="w-full h-48 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full border-4 border-surface flex items-center justify-center shadow-lg"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -4, 0],
                          boxShadow: [
                            "0 8px 24px rgba(45, 74, 62, 0.16)",
                            "0 14px 30px rgba(45, 74, 62, 0.25)",
                            "0 8px 24px rgba(45, 74, 62, 0.16)",
                          ],
                        }
                  }
                  transition={{
                    duration: 2.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/assets/Buraq_Horse_Riding_Logo.png"
                    alt="icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </motion.div>
              </div>
              <div className="pt-12 pb-8 px-6 flex flex-col items-center flex-grow w-full">
                <h3 className="text-xl font-bold mb-6 whitespace-pre-line">
                  {service.title}
                </h3>
                <div className="mt-auto">
                  <motion.button
                    whileHover={
                      shouldReduceMotion ? undefined : { scale: 1.04 }
                    }
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
                    className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center space-x-2 hover:opacity-90 transition-opacity ${service.btnColor}`}
                  >
                    <span>About Us</span>
                    <motion.span
                      animate={
                        shouldReduceMotion ? undefined : { x: [0, 4, 0] }
                      }
                      transition={{
                        duration: 1.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
