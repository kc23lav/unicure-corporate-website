import { motion } from "framer-motion";
import { FaBuilding, FaIndustry, FaGlobe, FaAward } from "react-icons/fa";

const milestones = [
  {
    year: "1984",
    icon: <FaBuilding />,
    title: "Foundation",
    desc: "Beginning the journey with a vision to provide quality healthcare solutions.",
  },
  {
    year: "2006",
    icon: <FaIndustry />,
    title: "Manufacturing Expansion",
    desc: "Strengthened production capabilities with modern manufacturing facilities.",
  },
  {
    year: "2020",
    icon: <FaAward />,
    title: "Quality Excellence",
    desc: "Enhanced quality systems and industry-standard compliance.",
  },
  {
    year: "Today",
    icon: <FaGlobe />,
    title: "Trusted Presence",
    desc: "Serving healthcare needs with innovation, quality and trust.",
  },
];

function About() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-bold text-gray-900">
            Our Journey
          </h2>

          <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
            Building trust through decades of commitment,
            innovation and pharmaceutical excellence.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {milestones.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="
              bg-white
              rounded-3xl
              p-8
              shadow-lg
              hover:shadow-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >

              <div className="text-red-700 text-5xl mb-5">
                {item.icon}
              </div>

              <span className="text-red-700 font-bold text-lg">
                {item.year}
              </span>

              <h3 className="text-2xl font-semibold mt-2 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default About;