// src/components/InternationalMarkets.jsx

import { motion } from "framer-motion";
import worldMap from "../assets/world-map.jpg";

function InternationalMarkets() {

 const countries = [
  {
    name: "India",
    x: 514,
    y: 257,
    flag: "🇮🇳",
    hub: true,
  },

  {
    name: "Belgium",
    x: 350,
    y: 195,
    flag: "🇧🇪",
  },

  {
    name: "Uzbekistan",
    x: 474,
    y: 202,
    flag: "🇺🇿",
  },

  {
    name: "Iran",
    x: 454,
    y: 233,
    flag: "🇮🇷",
  },

  {
    name: "Iraq",
    x: 430,
    y: 235,
    flag: "🇮🇶",
  },

  {
    name: "Yemen",
    x: 439,
    y: 276,
    flag: "🇾🇪",
  },

  {
    name: "Kenya",
    x: 420,
    y: 310,
    flag: "🇰🇪",
  },

  {
    name: "Tanzania",
    x: 415,
    y: 328,
    flag: "🇹🇿",
  },

  {
    name: "Senegal",
    x: 299,
    y: 281,
    flag: "🇸🇳",
  },

  {
    name: "Dominican Republic",
    x: 194,
    y: 271,
    flag: "🇩🇴",
  },

  {
    name: "Philippines",
    x: 617,
    y: 284,
    flag: "🇵🇭",
  },
];
  return (
    <section
      id="markets"
      className="py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-gray-900">
            International Markets
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Delivering quality pharmaceutical products across
            multiple international markets with a growing
            global footprint.
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mb-16">

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-red-700">
              10+
            </h3>
            <p className="mt-2 text-gray-600">
              Export Countries
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-red-700">
              100+
            </h3>
            <p className="mt-2 text-gray-600">
              Products Exported
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-red-700">
              WHO-GMP
            </h3>
            <p className="mt-2 text-gray-600">
              Certified Manufacturing
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
            <h3 className="text-4xl font-bold text-red-700">
              40+
            </h3>
            <p className="mt-2 text-gray-600">
              Years of Excellence
            </p>
          </div>

        </div>

        {/* World Map */}

     <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="
  relative
  bg-gradient-to-br
  from-slate-900
  to-slate-800
  rounded-[40px]
  shadow-2xl
  overflow-hidden
  mx-auto
  "
  style={{
    width: "700px",
    height: "490px",
  }}
>

  <img
  src={worldMap}
  alt="Global Presence"
  className="
  absolute
  inset-0
  w-full
  h-full
  object-cover
  "
/>

  {/* India Hub */}

  <div
  className="absolute"
  style={{
    left: `${countries[0].x}px`,
    top: `${countries[0].y}px`,
    transform: "translate(-50%, -50%)",
  }}
>
    <div className="absolute w-20 h-20 bg-red-500/30 rounded-full animate-ping" />

    <div className="absolute w-12 h-12 bg-red-500/40 rounded-full animate-pulse" />

    <div
      className="
      w-6
      h-6
      bg-red-600
      rounded-full
      border-4
      border-white
      shadow-[0_0_40px_rgba(255,0,0,0.8)]
      relative
      z-20
      "
    />
  </div>

{/* Export Routes */}

<svg
  className="absolute inset-0 w-full h-full z-10 pointer-events-none"
>
  {/* Belgium */}
  <motion.line
    x1="514" y1="257"
    x2="350" y2="195"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 2 }}
  />

  {/* Uzbekistan */}
  <motion.line
    x1="514" y1="257"
    x2="474" y2="202"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, delay: 0.1 }}
  />

  {/* Iran */}
  <motion.line
    x1="514" y1="257"
    x2="454" y2="233"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, delay: 0.2 }}
  />

  {/* Iraq */}
  <motion.line
    x1="514" y1="257"
    x2="430" y2="235"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, delay: 0.3 }}
  />

  {/* Yemen */}
  <motion.line
    x1="514" y1="257"
    x2="439" y2="276"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.5, delay: 0.4 }}
  />

  {/* Kenya */}
  <motion.line
    x1="514" y1="257"
    x2="420" y2="310"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.8, delay: 0.5 }}
  />

  {/* Tanzania */}
  <motion.line
    x1="514" y1="257"
    x2="415" y2="328"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 1.8, delay: 0.6 }}
  />

  {/* Senegal */}
  <motion.line
    x1="514" y1="257"
    x2="299" y2="281"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="400"
    initial={{ strokeDashoffset: 400 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 2.2, delay: 0.7 }}
  />

  {/* Dominican Republic */}
  <motion.line
    x1="514" y1="257"
    x2="194" y2="271"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="500"
    initial={{ strokeDashoffset: 500 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 2.5, delay: 0.8 }}
  />

  {/* Philippines */}
  <motion.line
    x1="514" y1="257"
    x2="617" y2="284"
    stroke="rgba(255,215,0,0.55)"
    strokeWidth="2"
    strokeDasharray="300"
    initial={{ strokeDashoffset: 300 }}
    whileInView={{ strokeDashoffset: 0 }}
    transition={{ duration: 2, delay: 0.9 }}
  />
</svg>
  {/* Countries */}

  {countries
    .filter((c) => c.name !== "India")
    .map((country, index) => (
      <motion.div
        key={index}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.08 }}
        className="
        absolute
        group
        cursor-pointer
        "
        style={{
          top: `${country.y}px`,
left: `${country.x}px`,
transform: "translate(-50%, -50%)",
        }}
      >
        {/* Glow */}

        <div
          className="
          absolute
          w-8
          h-8
          bg-red-500/30
          rounded-full
          animate-pulse
          "
        />

        {/* Dot */}

        <div
          className="
          w-4
          h-4
          bg-red-500
          rounded-full
          border-2
          border-white
          shadow-[0_0_20px_rgba(255,0,0,0.8)]
          relative
          z-10
          "
        />

        {/* Tooltip */}

        <div
          className="
          absolute
          left-6
          top-[-12px]
          bg-red-700
          text-white
          px-3
          py-1
          rounded-lg
          text-sm
          whitespace-nowrap
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-300
          "
        >
          {country.flag} {country.name}
        </div>
      </motion.div>
    ))}

  {/* Floating Title */}

{/* Moving Shipment : India -> Belgium */}

<motion.div
  className="
  absolute
  w-3
  h-3
  bg-yellow-400
  rounded-full
  shadow-[0_0_15px_rgba(255,0,0,1)]
  z-30
  "
  animate={{
    left: [514, 350],
    top: [257, 195],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear",
  }}
/>

{/* Moving Shipment : India -> Iraq */}

<motion.div
  className="
  absolute
  w-3
  h-3
  bg-yellow-400
  rounded-full
  shadow-[0_0_15px_rgba(255,0,0,1)]
  z-30
  "
  animate={{
    left: [514, 430],
    top: [257, 235],
  }}
  transition={{
    duration: 2.5,
    repeat: Infinity,
    ease: "linear",
    delay: 1,
  }}
/>

{/* Moving Shipment : India -> Philippines */}

<motion.div
  className="
  absolute
  w-3
  h-3
  bg-yellow-400
  rounded-full
  shadow-[0_0_15px_rgba(255,0,0,1)]
  z-30
  "
  animate={{
    left: [514, 617],
    top: [257, 284],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
    delay: 2,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 474],
    top: [257, 202],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "linear",
    delay: 0.5,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 454],
    top: [257, 233],
  }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
    ease: "linear",
    delay: 1,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 439],
    top: [257, 276],
  }}
  transition={{
    duration: 3.2,
    repeat: Infinity,
    ease: "linear",
    delay: 1.5,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 420],
    top: [257, 310],
  }}
  transition={{
    duration: 3.5,
    repeat: Infinity,
    ease: "linear",
    delay: 2,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 415],
    top: [257, 328],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "linear",
    delay: 2.5,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 299],
    top: [257, 281],
  }}
  transition={{
    duration: 4.5,
    repeat: Infinity,
    ease: "linear",
    delay: 3,
  }}
/>

<motion.div
  className="absolute w-4 h-4 bg-yellow-400 rounded-full shadow-[0_0_25px_rgba(255,215,0,1)] z-30"
  animate={{
    left: [514, 194],
    top: [257, 271],
  }}
  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "linear",
    delay: 3.5,
  }}
/>
  <div
    className="
    absolute
    top-8
    left-8
    bg-white/10
    backdrop-blur-md
    px-6
    py-3
    rounded-2xl
    text-white
    "
  >
    <h3 className="text-2xl font-bold">
      Global Export Network
    </h3>

    <p className="text-sm text-gray-200">
      Connecting Healthcare Worldwide
    </p>
  </div>

</motion.div>

        {/* Country List */}

        <div className="mt-16">

          <h3 className="text-4xl font-bold text-center mb-3">
  Global Footprint
</h3>

<p className="text-center text-gray-500 mb-10">
  Delivering pharmaceutical excellence across international markets
</p>

<div className="flex justify-center mb-10">
  <div
    className="
    bg-red-700
    text-white

    px-8
    py-4

    rounded-2xl

    shadow-xl
    "
  >
    <span className="text-4xl font-bold">10+</span>
    <p className="text-sm">
      Active Export Markets
    </p>
  </div>
</div>

          <div className="flex flex-wrap justify-center gap-5">

  {countries.map((country, index) => (

    <motion.div
      key={index}
      whileHover={{
        y: -8,
        scale: 1.05
      }}
      className="
      bg-white
      rounded-2xl
      px-6
      py-4
      shadow-lg
      hover:shadow-2xl
      border
      border-red-100
      transition-all
      duration-300
      min-w-[220px]
      "
    >

      <div className="flex items-center gap-4">

        <span className="text-4xl">
          {country.flag}
        </span>

        <div>

          <h4 className="font-bold text-gray-900">
            {country.name}
          </h4>

          <p className="text-sm text-gray-500">
            Export Market
          </p>

        </div>

      </div>

    </motion.div>

  ))}

</div>

        </div>

      </div>
    </section>
  );
}

export default InternationalMarkets;