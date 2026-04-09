import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=400&auto=format&fit=crop",
    title: "Beginner Riding\nLessons",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1770242546571-75aa57b70303?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvcnNlc3xlbnwwfDJ8MHx8fDA%3D",
    title: "Advanced Riding\nTraining",
    color: "bg-primary text-white",
    btnColor: "bg-brand-muted text-white",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=400&auto=format&fit=crop",
    title: "Horse Care\nWorkshops",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?q=80&w=400&auto=format&fit=crop",
    title: "Memberships Of\nRiding Club",
    color: "bg-white text-primary",
    btnColor: "bg-brand text-white",
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  const sectionVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 36, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.15 : 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden">
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

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
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
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
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
                  <img
                    src="https://api.iconify.design/mdi:horse-human.svg?color=%23C5A16F"
                    className="w-8 h-8"
                    alt="icon"
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
        </motion.div>
      </div>
    </section>
  );
}
