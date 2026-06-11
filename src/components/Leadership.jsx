import { motion } from "framer-motion";
import { useState } from "react";

import director from "../assets/leaders/director.jpg";
import amin from "../assets/leaders/amin-sir.jpg";
import kashish from "../assets/leaders/kashish-mam.jpg";

function LeadershipTree() {

  const [selectedLeader, setSelectedLeader] = useState(null);

  const leaders = [
    {
      name: "Mr. Amin Ul Aziz",
      role: "Vice President - Business Development",
      image: amin,
      quote:
        "Focus intently on where you are now and use this as leverage while everyone else is focused on projecting where they want to be.",
       message:
    "At Unicure India, we believe sustainable growth comes from strong partnerships, innovation, and a commitment to healthcare excellence. Our mission is to expand our global presence while ensuring that every customer receives products and services of the highest standards. We continue to explore new opportunities and markets with a vision of making quality healthcare accessible across the world."
    },

    {
      name: "Dr. Kashish Aziz",
      role: "Vice President - Quality Assurance",
      image: kashish,
      quote:
        "Quality is never an accident. It is always the result of sincere effort, intelligent direction and skillful execution.",
      message:
    "Quality remains the foundation of everything we do at Unicure India. Every product undergoes rigorous quality checks and complies with international manufacturing standards. Our team is dedicated to continuous improvement, regulatory excellence, and delivering safe, effective pharmaceutical solutions that healthcare professionals can trust."
    },
  ];

  return (
    <section
      id="leaders"
      className="py-28 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-gray-900">
            Leadership Team
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Guided by visionary leadership and driven by the
            next generation of pharmaceutical excellence.
          </p>

        </div>

        {/* Founder Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
          bg-gradient-to-r
          from-red-900
          to-red-700
          rounded-[40px]
          p-12
          text-white
          shadow-2xl
          "
        >

          <div className="flex flex-col lg:flex-row items-center gap-10">

            <img
              src={director}
              alt="Founder"
              className="
              w-52
              h-52
              rounded-full
              border-4
              border-white
              object-cover
              "
            />

            <div>

              <h3 className="text-5xl font-bold">
                Mr. Abdul Mateen
              </h3>

              <p className="text-2xl mt-2 text-red-100">
                Founder & Managing Director
              </p>

              <p className="mt-6 text-xl italic text-red-100">
                "I have promises to keep and miles to go before I sleep."
              </p>

              <button
                onClick={() =>
                  setSelectedLeader({
                    name: "Mr. Abdul Mateen",
                    message:
                      "When I look back upon the last four decades, I feel proud to observe the heights Unicure has achieved in pharmaceuticals manufacturing and innovations. With joint dedicated endeavours from our team we have realized the sole aim with which the company was established - to serve the country and mankind at large.",
                  })
                }
                className="
                mt-8
                bg-white
                text-red-700
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition
                "
              >
                Read Full Message
              </button>

            </div>

          </div>

          {/* Stats */}

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            <div className="bg-white/10 rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-bold">40+</h4>
              <p>Years Leadership</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-bold">100+</h4>
              <p>Products</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-bold">20+</h4>
              <p>Countries Served</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5 text-center">
              <h4 className="text-3xl font-bold">WHO-GMP</h4>
              <p>Certified</p>
            </div>

          </div>

        </motion.div>

        {/* Tree Line */}

        <div className="flex justify-center mt-12">
          <div className="w-1 h-20 bg-red-700"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-[300px] h-1 bg-red-700"></div>
        </div>

        <div className="flex justify-center">
          <div className="w-[300px] flex justify-between">

            <div className="w-1 h-16 bg-red-700"></div>

            <div className="w-1 h-16 bg-red-700"></div>

          </div>
        </div>

        {/* Executive Cards */}

        <div className="grid md:grid-cols-2 gap-10 mt-4">

          {leaders.map((leader, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              onClick={() => setSelectedLeader(leader)}
              className="
              bg-white
              rounded-3xl
              shadow-xl
              cursor-pointer
              hover:-translate-y-3
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >

              <div className="p-8">
              <div className="flex justify-center pt-8">

  <img
    src={leader.image}
    alt={leader.name}
    className="
    w-48
    h-48
    rounded-full
    object-cover
    border-4
    border-white
    shadow-xl
    "
  />

</div>

              <div className="p-8 text-center">

                <h3 className="text-3xl font-bold text-gray-900">
                  {leader.name}
                </h3>

                <p className="text-red-700 font-semibold mt-2">
                  {leader.role}
                </p>

                <p className="mt-4 text-gray-600 italic">
                  "{leader.quote}"
                </p>

                <p className="mt-6 text-red-700 font-semibold">
                  Click to read more →
                </p>

              </div>
              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* Popup */}

      {selectedLeader && (

        <div
          className="
          fixed
          inset-0
          bg-black/70
          z-50
          flex
          items-center
          justify-center
          p-6
          "
          onClick={() => setSelectedLeader(null)}
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="
            bg-white
            rounded-3xl
            max-w-3xl
            w-full
            p-10
            "
          >

            <h2 className="text-4xl font-bold text-red-700 mb-4">
              {selectedLeader.name}
            </h2>
             
            <p className="text-red-700 font-semibold mb-6">
  {selectedLeader.role}
</p>

            <p className="text-gray-700 text-lg leading-relaxed">
              {selectedLeader.message || selectedLeader.quote}
            </p>

            <button
              onClick={() => setSelectedLeader(null)}
              className="
              mt-8
              bg-red-700
              text-white
              px-6
              py-3
              rounded-xl
              "
            >
              Close
            </button>

          </div>

        </div>

      )}

    </section>
  );
}

export default LeadershipTree;