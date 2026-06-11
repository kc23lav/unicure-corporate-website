import { motion } from "framer-motion";

const stats = [
  {
    number: "40+",
    label: "Years Experience",
  },
  {
    number: "120+",
    label: "Products",
  },
  {
    number: "600+",
    label: "Employees",
  },
  {
    number: "3",
    label: "Manufacturing Units",
  },
];

function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">

      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-6"
        >
          <h2 className="text-4xl font-bold text-red-700">
            {item.number}
          </h2>

          <p className="text-gray-600 mt-2">
            {item.label}
          </p>
        </motion.div>
      ))}

    </div>
  );
}

export default Stats;