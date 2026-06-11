import { motion } from "framer-motion";

import mankind from "../assets/clients/mankind.jpg";
import jagsonpal from "../assets/clients/jagsonpal.jpg";
import obsurge from "../assets/clients/obsurge.jpg";
import seagull from "../assets/clients/seagull.jpg";
import wings from "../assets/clients/wings.jpg";
import devats from "../assets/clients/devats.jpg";
import radicura from "../assets/clients/radicura.jpg";
import mohrish from "../assets/clients/mohrish.jpg";
import iressia from "../assets/clients/iressia.jpg";
import shifa from "../assets/clients/shifa.jpg";
import ravenbhel from "../assets/clients/ravenbhel.jpg";
import quality from "../assets/clients/quality.jpg";
import cradel from "../assets/clients/cradel.jpg";
import adips from "../assets/clients/adips.jpg";

const clients = [
  { name: "Mankind Pharma", logo: mankind },
  { name: "Jagsonpal Pharmaceuticals", logo: jagsonpal },
  { name: "Obsurge", logo: obsurge },
  { name: "Seagull Pharma", logo: seagull },
  { name: "Wings Pharma", logo: wings },
  { name: "DeVats", logo: devats },
  { name: "Radicura", logo: radicura },
  { name: "Mohrish", logo: mohrish },
  { name: "Iressia", logo: iressia },
  { name: "Shifa", logo: shifa },
  { name: "Ravenbhel", logo: ravenbhel },
  { name: "Quality Innovations", logo: quality },
  { name: "Cradel Pharmaceuticals", logo: cradel },
  { name: "Adips Dermatek", logo: adips },
];

function Clients() {
  return (
    <section 
     id="clients"
     className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Our Esteemed Clients
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Trusted by leading pharmaceutical companies
          </p>

          <div className="w-32 h-1 bg-red-700 mx-auto mt-5 rounded-full"></div>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

     {clients.map((client, index) => (

  <motion.div
    key={index}
    whileHover={{
      y: -12,
      scale: 1.05,
      rotateY: 8,
    }}
    transition={{
      type: "spring",
      stiffness: 300,
    }}
    className="
    group
    relative
    overflow-hidden

    bg-white

    rounded-3xl
    p-8

    shadow-lg
    hover:shadow-red-200
    hover:shadow-2xl

    border
    border-gray-100

    transition-all
    duration-500
    "
  >

    {/* Shine Effect */}

    <div
      className="
      absolute
      top-0
      -left-full

      w-1/2
      h-full

      bg-white/40

      skew-x-12

      group-hover:left-[150%]

      transition-all
      duration-700
      "
    />

    {/* Logo Area */}

    <div
      className="
      h-32

      flex
      items-center
      justify-center

      relative
      "
    >

      {/* Red Glow */}

      <div
        className="
        absolute

        w-24
        h-24

        bg-red-500/20

        blur-3xl

        opacity-0
        group-hover:opacity-100

        transition-all
        duration-500
        "
      />

      <img
        src={client.logo}
        alt={client.name}
        className="
        relative
        z-10

        max-h-28
        object-contain

        transition-all
        duration-500

        group-hover:scale-125
        group-hover:rotate-2
        "
      />

    </div>

    {/* Company Name */}

    <div className="mt-5 text-center">

      <h3
        className="
        font-semibold
        text-gray-800

        group-hover:text-red-700

        transition-colors
        duration-300
        "
      >
        {client.name}
      </h3>

      <p
        className="
        text-sm
        text-gray-500
        mt-1
        "
      >
        Trusted Partner
      </p>

    </div>

  </motion.div>

))}

        </div>

      </div>
    </section>
  );
}

export default Clients;