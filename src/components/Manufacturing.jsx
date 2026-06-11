import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";

import raw from "../assets/manufacturing/raw_materials.jpg";
import quality from "../assets/manufacturing/quality_testing.jpg";
import manufacturingImg from "../assets/manufacturing/manufacturing.jpg";
import packaging from "../assets/manufacturing/packaging.jpg";
import distribution from "../assets/manufacturing/distribution.jpg";

const processSteps = [
  {
    number: "01",
    title: "Raw Materials",
    description: "Premium pharmaceutical ingredients sourced globally.",
    fullDescription:
      "All active pharmaceutical ingredients are sourced from trusted global suppliers and undergo rigorous quality verification before entering the manufacturing process.",
    image: raw,
    x: 0,
    y: -300,
  },

  {
    number: "02",
    title: "Quality Testing",
    description: "Rigorous laboratory testing and validation.",
    fullDescription:
      "Every batch undergoes microbiological, chemical and stability testing to ensure compliance with WHO-GMP quality standards.",
    image: quality,
    x: 280,
    y: -90,
  },

  {
    number: "03",
    title: "Manufacturing",
    description: "WHO-GMP compliant production process.",
    fullDescription:
      "Manufacturing is performed in controlled environments using advanced pharmaceutical equipment and validated production procedures.",
    image: manufacturingImg,
    x: 180,
    y: 260,
  },

  {
    number: "04",
    title: "Packaging",
    description: "Secure and reliable pharmaceutical packaging.",
    fullDescription:
      "Products are packed using automated systems ensuring product integrity, traceability and compliance with regulatory requirements.",
    image: packaging,
    x: -180,
    y: 260,
  },

  {
    number: "05",
    title: "Distribution",
    description: "Efficient global logistics and exports.",
    fullDescription:
      "A strong logistics network ensures safe storage, transportation and timely delivery across domestic and international markets.",
    image: distribution,
    x: -280,
    y: -90,
  },
];
function Manufacturing() {
    const [selectedStep, setSelectedStep] = useState(null);
    return (
  <section
    id="manufacturing"
    className="
    py-32
    bg-gradient-to-b
    from-white
    via-red-50
    to-white
    overflow-hidden
    "
  >
    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}

      <div className="text-center mb-24">

        <h2 className="text-5xl font-bold text-gray-900">
          Manufacturing Excellence
        </h2>

        <div className="w-28 h-1 bg-red-600 rounded-full mx-auto mt-5"></div>

        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          Every product passes through a strict quality-controlled
  manufacturing lifecycle.
        </p>

      </div>

      {/* Orbit */}

      <div className="flex justify-center">

        <div
  className="
  relative
  w-[550px]
h-[550px]

md:w-[850px]
md:h-[850px]
  "
>

          {/* Orbit Ring */}

          <div
            className="
            absolute
            inset-0
            rounded-full
            border-[3px]
            border-red-200
            "
          />

          <div
            className="
            absolute
            inset-8
            rounded-full
            border
            border-red-100
            "
          />

          {/* Rotating Orbit */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0"
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                animate={{
                  rotate: -360,
                }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.08,
                  y: -10,
                }}
                className="absolute"
                style={{
                  left: `calc(50% + ${step.x}px - 90px)`,
                  top: `calc(50% + ${step.y}px - 120px)`,
                }}
              >
                {/* Connecting Line */}

                  <div
                  className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[2px]
                  h-28
                  bg-red-200
                  -z-10
                  "
                />

                <div
                  onClick={() =>
                    setSelectedStep(
                     selectedStep?.title === step.title
                       ? null
                       : step
                    )
                  }
                  className="
                  w-44
                  bg-white
                  rounded-3xl
                  shadow-xl
                  overflow-hidden
                  cursor-pointer
                  hover:shadow-red-200
                  transition-all
                  duration-500
                  "
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="
                    w-full
                    h-28
                    object-cover
                    "
                  />

                  <motion.div 
                    layout 
                    className="p-4">

                    <p className="text-red-600 font-bold text-xs">
                      {step.number}
                    </p>
   
                    <h3 className="font-bold text-gray-800 mt-1">
                         {step.title}
                     </h3>

                    <p className="text-red-600 text-xs mt-1">
                      {selectedStep?.title === step.title
                       ? "Click to collapse"
                       : "Click to learn more"}
                    </p>

                    <p
                      className="
                      text-xs
                      text-gray-500
                      mt-2
                      leading-relaxed
                      "
                    >
                      {selectedStep?.title === step.title
                       ? step.fullDescription
                       : step.description}
                    </p>

                  </motion.div>

                </div>

              </motion.div>
            ))}
          </motion.div>

          {/* Center Circle */}

          <motion.div
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[340px]
            h-[340px]

            rounded-full
            bg-white

            border-[5px]
            border-red-600

            shadow-[0_0_40px_rgba(220,38,38,0.25)]

            flex
            flex-col
            justify-center
            items-center
            text-center
            "
          >

            <img
              src={logo}
              alt="Unicure"
              className="w-20 mb-3"
            />

            <h3 className="text-4xl font-bold text-red-600">
              UNICURE
            </h3>

            <p className="text-gray-700 mt-2">
              Manufacturing
            </p>

            <p className="text-gray-700">
              Excellence
            </p>

            <div className="mt-6 space-y-2">

              <p className="font-semibold text-gray-800">
                40+ Years Experience
              </p>

              <p className="font-semibold text-gray-800">
                WHO-GMP Certified
              </p>

              <p className="font-semibold text-gray-800">
                Global Exports
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </div>
  </section>
);
}

export default Manufacturing;