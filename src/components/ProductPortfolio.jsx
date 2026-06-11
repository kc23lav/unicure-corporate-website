
import { motion } from "framer-motion";
import { useState } from "react";
import antimalarial from "../assets/products/antimalarial.jpg";
import antibiotics from "../assets/products/antibiotics.jpg";
import nutrition from "../assets/products/nutrition.jpg";
import hormonal from "../assets/products/hormonal.jpg";
import cardio from "../assets/products/cardio.jpg";
import diabetes from "../assets/products/diabetes.jpg";
import disinfectant from "../assets/products/disinfectant.jpg";
import cns from "../assets/products/cns.jpg";

const products = [
  {
    image: antimalarial,
    title: "Anti Malarial Drugs",
    desc: "Effective anti-malarial treatments.",
    medicines: [
      "Artesunate + Sulphadoxine + Pyrimethamine",
      "Chloroquine Phosphate",
      "Primaquine Phosphate",
      "Mefloquine"
    ]
  },

  {
    image : antibiotics,
    title: "Antibiotics & Anti-Fungal",
    desc: "Broad range of anti-infective formulations.",
    medicines: [
      "Acyclovir",
      "Amoxicillin",
      "Azithromycin Oral Suspension",
      "Azithromycin Tablets",
      "Cefixime",
      "Cefpodoxime",
      "Cefpodoxime Proxetil",
      "Cefuroxime Axetil",
      "Clotrimazole Vaginal Pessaries",
      "Cloxacillin + Amoxicillin",
      "Fluconazole",
      "Itraconazole",
      "Levofloxacin",
      "Nitrofurantoin",
      "Norfloxacin",
      "Ofloxacin + Ornidazole",
      "Povidone Iodine Vaginal Pessaries",
      "Roxithromycin"
    ]
  },

  {
    image: nutrition,
    title: "Nutritional Supplements",
    desc: "Health and wellness formulations.",
    medicines: [
      "Biotin + Minerals",
      "Calcium Pantothenate",
      "Calcium + Cholecalciferol",
      "Ferrous Ascorbate + Folic Acid",
      "Lycopene Syrup",
      "Multivitamins",
      "Soya Isoflavones",
      "Ubidecarenone Capsules",
      "Vitamin A Solution"
    ]
  },

  {
    image: hormonal,
    title: "Hormonal Drugs",
    desc: "Specialized hormonal formulations.",
    medicines: [
      "21 Day OCP Kit",
      "Allylestrenol",
      "Danazol",
      "Levonorgestrel",
      "Medroxy Progesterone",
      "Micronized Progesterone",
      "Norethisterone",
      "Ulipristal"
    ]
  },

  {
    image: cardio,
    title: "Cardiovascular Drugs",
    desc: "Products supporting heart health.",
    medicines: [
      "Isosorbide Dinitrate",
      "Atenolol",
      "Amlodipine",
      "Atenolol + Amlodipine",
      "Enalapril",
      "Captopril",
      "Atorvastatin",
      "Diltiazem",
      "Verapamil",
      "Simvastatin",
      "Losartan",
      "Metoprolol",
      "Clopidogrel",
      "Aspirin"
    ]
  },

  {
    image: diabetes,
    title: "Diabetes Care",
    desc: "Products supporting diabetes management.",
    medicines: [
      "Acarbose",
      "Glibenclamide",
      "Gliclazide",
      "Glipizide",
      "Metformin + Gliclazide",
      "Metformin",
      "Metformin + Glimepiride"
    ]
  },

  {
    image: disinfectant,
    title: "Disinfectants",
    desc: "Hygiene and infection control solutions.",
    medicines: [
      "Benzyl Benzoate Solution",
      "Chlorhexidine + Cetrimide",
      "Chloroxylenol Solution",
      "Lysol",
      "Povidone Iodine Scrub",
      "Povidone Iodine Solution",
      "Strong Cetrimide Solution"
    ]
  },

  {
    image: cns,
    title: "CNS Drugs",
    desc: "Central nervous system treatments.",
    medicines: [
      "Alprazolam",
      "Bromocriptine",
      "Chlordiazepoxide",
      "Diazepam",
      "Fluoxetine",
      "Imipramine",
      "Olanzapine",
      "Phenobarbitone",
      "Sodium Valproate"
    ]
  }
];
function ProductPortfolio() {
const [selectedProduct, setSelectedProduct] = useState(null);
const [searchTerm, setSearchTerm] = useState("");
  return (
    <section
       id="products"
       className="py-28 bg-white"
    >
     <div className="max-w-7xl mx-auto px-6">

     <div className="text-center mb-20">

  <h2 className="text-5xl font-bold text-gray-900">
    Product Portfolio
  </h2>

  <p className="mt-5 text-lg text-gray-600 max-w-3xl mx-auto">
    Diverse pharmaceutical formulations serving
    healthcare needs across multiple therapeutic segments.
  </p>

  <a
  href="/brochure/brochure.pdf"
  download
  className="
  bg-red-600
  hover:bg-red-700
  text-white
  px-8
  py-4
  rounded-xl
  font-semibold
  shadow-lg
  transition-all
  hover:scale-105
  "
>
  Download Brochure
</a>

</div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((item, index) => (

            <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: index * 0.1 }}
  onClick={() => setSelectedProduct(item)}
  className="
  bg-white
  rounded-3xl
  p-8
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-3
  transition-all
  duration-500
  cursor-pointer
  "
>

              <img
  src={item.image}
  alt={item.title}
  className="
  w-full
  h-40
  object-cover
  rounded-2xl
  mb-5
  "
/>

              <h3 className="text-xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>

              <p className="mt-3 text-red-600 text-sm font-semibold">
  Click to view medicines →
</p>

            </motion.div>

          ))}

        </div>

      </div>

    {selectedProduct && (
  <div
    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-6"
    onClick={() => setSelectedProduct(null)}
  >
 <div
  onClick={(e) => e.stopPropagation()}
  className="bg-white rounded-3xl max-w-4xl w-full p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
>

  <img
    src={selectedProduct.image}
    alt={selectedProduct.title}
    className="
    w-full
    h-64
    object-cover
    rounded-3xl
    mb-6
    "
  />

  <div className="flex justify-between items-center mb-4">

    <div>
      <h2 className="text-4xl font-bold text-red-700">
        {selectedProduct.title}
      </h2>

      <p className="text-gray-600 mt-2">
        Complete product range manufactured by Unicure India Ltd.
      </p>

      <p className="text-red-600 font-semibold mt-2">
        {selectedProduct.medicines.length} Products Available
      </p>
    </div>

   
 
  <input
  type="text"
  placeholder="Search medicine..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="
  w-full
  p-4
  border
  border-red-200
  rounded-xl
  mb-8
  outline-none
  focus:border-red-600
  "
/>
  </div>

      <div className="grid md:grid-cols-2 gap-4">
        {selectedProduct.medicines
  .filter((medicine) =>
    medicine.toLowerCase().includes(
      searchTerm.toLowerCase()
    )
  )
  .map((medicine, index) => (
          <div
            key={index}
            className="
bg-red-50
border
border-red-100
rounded-xl
p-4

hover:bg-red-600
hover:text-white

hover:scale-105

transition-all
duration-300
"
          >
            <span className="font-bold text-red-700 mr-3">
  {String(index + 1).padStart(2, "0")}
</span>

{medicine}
          </div>
        ))}
      </div>

      <button
        onClick={() => setSelectedProduct(null)}
        className="mt-8 bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
}

export default ProductPortfolio;