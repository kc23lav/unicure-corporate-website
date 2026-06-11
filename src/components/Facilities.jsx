import { motion } from "framer-motion";
import { FaIndustry, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

import unit1 from "../assets/facilities/unit1.png";
import unit2 from "../assets/facilities/unit2.png";
import unit3 from "../assets/facilities/unit3.png";

const facilities = [
  {
    unit: "Unit I",
    location: "Noida",
    year: "1984",
    image: unit1,
    description:
      "WHO-GMP approved pharmaceutical manufacturing facility focused on quality and innovation.",
  },

  {
    unit: "Unit II",
    location: "Roorkee",
    year: "2006",
    image: unit2,
    description:
      "Advanced production facility with modern manufacturing capabilities.",
  },

  {
    unit: "Unit III",
    location: "Greater Noida",
    year: "Present",
    image: unit3,
    description:
      "High-capacity operations supporting pharmaceutical excellence and growth.",
  },
];


function Facilities() {

const [selectedFacility, setSelectedFacility] = useState(facilities[0]);

const [showImage, setShowImage] = useState(false);
  return (
    <section
        id="facilities"
        className="py-28 bg-gray-50"
    >

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-gray-900">
            Our Facilities
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            State-of-the-art manufacturing facilities supporting
            quality healthcare products and pharmaceutical innovation.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

         {/* LEFT IMAGE */}

         <motion.div
           key={selectedFacility.unit + "-image"}
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="relative"
         >

         <img
          src={selectedFacility.image}
          alt={selectedFacility.unit}
          onClick={() => setShowImage(true)}
          className="
          rounded-3xl
          shadow-2xl
          cursor-pointer
          hover:scale-105
          transition
          duration-500
          "
         />

         <p className="text-center mt-4 text-gray-500">
          Click image to enlarge
        </p>

        </motion.div>

  {/* RIGHT DETAILS */}

  <motion.div
    key={selectedFacility.unit + "-details"}
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
  >

    <h3 className="text-5xl font-bold text-red-700">
      {selectedFacility.unit}
    </h3>

    <div className="mt-6 space-y-4">

      <div className="flex items-center gap-3">
        <FaMapMarkerAlt />
        {selectedFacility.location}
      </div>

      <div className="flex items-center gap-3">
        <FaIndustry />
        Established {selectedFacility.year}
      </div>

    </div>

    <p className="mt-8 text-lg text-gray-600 leading-relaxed">
      {selectedFacility.description}
    </p>

  </motion.div>

</div>
<div className="flex justify-center gap-4 mt-16">
  {facilities.map((facility) => (
    <button
      key={facility.unit}
      onClick={() => setSelectedFacility(facility)}
      className={`px-8 py-3 rounded-xl font-semibold transition ${
        selectedFacility.unit === facility.unit
          ? "bg-red-700 text-white"
          : "bg-white border border-red-200"
      }`}
    >
      {facility.unit}
    </button>
  ))}
</div>

      </div>

      {showImage && (
        <div
          onClick={() => setShowImage(false)}
          className="
          fixed
          inset-0
          bg-black/80
          z-50
          flex
          items-center
          justify-center
          p-8
          "
        >
          <img
            src={selectedFacility.image}
            alt={selectedFacility.unit}
            className="
            max-h-[90vh]
            rounded-3xl
            shadow-2xl
            "
          />
        </div>
      )}
    </section>
  );
}

export default Facilities;