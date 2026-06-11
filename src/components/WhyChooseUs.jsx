// src/components/WhyChooseUs.jsx

import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaGlobe,
  FaIndustry,
  FaCapsules,
  FaAward,
  FaHandshake,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "WHO-GMP Certified",
    desc: "Maintaining world-class manufacturing and quality standards.",
  },

  {
    icon: <FaIndustry />,
    title: "40+ Years Experience",
    desc: "Decades of expertise in pharmaceutical manufacturing.",
  },

  {
    icon: <FaGlobe />,
    title: "Global Export Presence",
    desc: "Serving healthcare markets across multiple countries.",
  },

  {
    icon: <FaCapsules />,
    title: "100+ Product Portfolio",
    desc: "Comprehensive pharmaceutical and healthcare solutions.",
  },

  {
    icon: <FaCheckCircle />,
    title: "Advanced Facilities",
    desc: "Modern production units with stringent quality control.",
  },

  {
    icon: <FaHandshake />,
    title: "Trusted Partnerships",
    desc: "Preferred manufacturing partner for leading pharma brands.",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-gray-900">
            Why Choose Unicure?
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering pharmaceutical excellence through innovation,
            quality assurance, and global healthcare partnerships.
          </p>

          <div className="w-32 h-1 bg-red-700 mx-auto mt-6 rounded-full"></div>

        </div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8">

          {/* Left Side */}

          <motion.div
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  whileHover={{
    scale: 1.02,
    y: -5,
  }}
  transition={{
    duration: 0.3,
  }}
 style={{
    boxShadow:
      "0 25px 60px rgba(0,0,0,0.15)"
  }}
  className="
  relative
  overflow-hidden
  rounded-[40px]
  shadow-2xl
  bg-black
  "
>

  <video
  autoPlay
  loop
  muted
  controls
  playsInline
  controlsList="nodownload"
  className="w-full h-full object-cover"
>
  <source
    src="/videos/unicure-highlights.mp4"
    type="video/mp4"
  />
</video>

  {/* Dark Overlay */}

  <div
  className="
  absolute
  inset-0
  bg-gradient-to-t
  from-black/70
  via-black/10
  to-transparent
  pointer-events-none
  "
/>

  {/* Text Content */}
<div
  className="
  absolute
  bottom-8
  left-0
  p-10
  text-white
  pointer-events-none
  "
>
    <span
      className="
      bg-red-600
      px-4
      py-2
      rounded-full
      text-sm
      font-semibold
      "
    >
      WHO-GMP Certified
    </span>

    <h3 className="text-4xl lg:text-5xl font-bold mt-5">
      Excellence In Every Dose
    </h3>

    <p className="mt-4 text-lg text-gray-200 max-w-xl">
      Over 40 years of pharmaceutical manufacturing excellence,
      serving healthcare markets across India and worldwide.
    </p>

  </div>



</motion.div>

          {/* Right Side */}

          <div className="grid sm:grid-cols-2 gap-6">

            {features.map((feature, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                bg-white
                p-8
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                border
                border-gray-100
                transition-all
                duration-300
                "
              >

                <div
                  className="
                  w-14
                  h-14
                  bg-red-100
                  text-red-700
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-2xl
                  mb-5
                  "
                >
                  {feature.icon}
                </div>

                <h4 className="font-bold text-xl text-gray-900 mb-3">
                  {feature.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;