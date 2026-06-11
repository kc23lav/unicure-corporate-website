import { motion } from "framer-motion";
import logo from "../assets/logo.png";import {
  FaCheckCircle,
  FaIndustry,
  FaGlobeAsia,
} from "react-icons/fa";


function Hero() {

  return (
    <section 
    id="home"
    className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-red-50 to-white">

      {/* Background Glow */}

      <div className="absolute top-10 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SECTION */}

          <div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="w-20 h-1 bg-red-600 rounded-full mb-6"></div>

              <span className="bg-red-100 text-red-700 px-5 py-2 rounded-full font-semibold">
                Since 1984 • Trusted Pharmaceutical Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-8 text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              Pursuing Excellence

              <span className="block text-red-600">
                in Healthcare
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl"
            >
              Unicure India Pvt. Ltd. is a leading pharmaceutical
              manufacturing company delivering innovative,
              affordable and high-quality healthcare products
              across India and international markets.
            </motion.p>

                        {/* Trust Points */}

            <div className="flex flex-wrap gap-8 mt-12">

              <div className="flex items-center gap-2">
                <FaCheckCircle className="text-red-600" />
                <span>40+ Years Experience</span>
              </div>

              <div className="flex items-center gap-2">
                <FaIndustry className="text-red-600" />
                <span>120+ Products</span>
              </div>

              <div className="flex items-center gap-2">
                <FaGlobeAsia className="text-red-600" />
                <span>10+ Export Countries</span>
              </div>

            </div>

          </div>

          {/* RIGHT SECTION */}

         
           <div className="relative h-[500px] flex items-center justify-center overflow-hidden">

  {/* Background Glow */}

  <motion.div
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.2, 0.5, 0.2],
    }}
    transition={{
      repeat: Infinity,
      duration: 5,
    }}
    className="
    absolute
    w-[400px]
    h-[400px]
    rounded-full
    bg-red-500
    blur-[120px]
    "
  />

  {/* Particles */}

  {[...Array(120)].map((_, i) => {

    const x = Math.cos((i / 120) * Math.PI * 2) * 400;
    const y = Math.sin((i / 120) * Math.PI * 2) * 400;

    return (

      <motion.div
        key={i}
        initial={{
          x,
          y,
          opacity: 0,
          scale: 0,
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: [0, 1, 0],
          scale: [0, 1, 0.3],
        }}
        transition={{
          duration: 3.5,
          delay: i * 0.02,
        }}
       className="
absolute
w-5
h-2
rounded-full
bg-gradient-to-r
from-red-600
to-white
shadow-md
"
      />

    );

  })}

  {/* Logo */}

  <motion.img
  src={logo}
  alt="Unicure Logo"
  initial={{
    opacity: 0,
    scale: 0.2,
    rotate: -15,
  }}
 animate={{
  opacity: 1,
  scale: 1,
  rotate: 0,
  y: [0, -12, 0],
}}

transition={{
  opacity: {
    delay: 3,
    duration: 1,
  },
  scale: {
    delay: 3,
    duration: 1,
  },
  rotate: {
    delay: 3,
    duration: 1,
  },
  y: {
    repeat: Infinity,
    duration: 5,
    ease: "easeInOut",
  },
}}
  className="w-[380px]"
/>

</div>

 


        </div>

      </div>

    </section>
  );
}

export default Hero;