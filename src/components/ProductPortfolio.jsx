
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
import cream from "../assets/products/cream.jpg";
import cold from "../assets/products/cold.jpg";
import gastro from "../assets/products/gastro.jpg";
import allergy from "../assets/products/allergy.jpg";
import vets from "../assets/products/vets.jpg";
import other from "../assets/products/other.jpg";

const products = [
  {
    image: antimalarial,
    title: "Anti Malarial Drugs",
    desc: "Effective anti-malarial treatments.",
    medicines: [
      "Artesunate + Sulphadoxine + Pyrimethamine Tablets",
      "Chloroquine Phosphate Tablets",
      "Primaquine Phosphate Tablets",
      "Mefloquine Tablets"
    ]
  },

  {
    image: antibiotics,
    title: "Antibiotics & Anti-Fungal",
    desc: "Broad range of anti-infective formulations.",
    medicines: [
      "Acyclovir Tablets",
      "Amoxicillin Capsules/Tablets/Dry Syrup",
      "Azithromycin Oral Suspension",
      "Azithromycin Tablets",
      "Cefixime Tablets",
      "Cefpodoxime Capsules",
      "Cefpodoxime Proxetil Oral Suspension",
      "Cefuroxime Axetil Tablets",
      "Clotrimazole Vaginal Pessaries",
      "Cloxacillin + Amoxicillin Capsules",
      "Fluconazole Tablets",
      "Itraconazole Tablets",
      "Levofloxacin Tablets",
      "Nitrofurantoin Tablets",
      "Norfloxacin Tablets",
      "Ofloxacin + Ornidazole Tablets",
      "Povidone Iodine Vaginal Pessaries",
      "Roxithromycin Tablets"
    ]
  },

  {
    image: nutrition,
    title: "Nutritional Supplements",
    desc: "Health and wellness formulations.",
    medicines: [
      "Biotin with Calcium Pantothenate, N-Acetyl Cysteine and Minerals Tablets",
      "Calcium Pantothenate & Antioxidants Capsules",
      "Calcium, Cholecalciferol & Minerals",
      "Ferrous Ascorbate & Folic Acid Suspension",
      "Ferrous Ascorbate & Folic Acid Tablets",
      "Lycopene + Vitamins + Minerals Syrup",
      "Multivitamins and Multi Minerals Tablets",
      "Soya Isoflavones with Calcium, Magnesium and Vitamin D₃ Tablets",
      "Ubidecarenone (100mg), Arginine, Alpha Tocopheryl Acetate and Selenium Capsules",
      "Ubidecarenone (Coenzyme Q10) USP Capsules",
      "Vitamin A Solution",
      "Premix of Vitamin / Mineral for Flour Fortification"
    ]
  },

  {
    image: hormonal,
    title: "Hormonal Drugs",
    desc: "Specialized hormonal formulations.",
    medicines: [
      "21 Day OCP Kit",
      "Allylestrenol Tablets",
      "Danazol Capsules",
      "Levonorgestrel Tablets(For Contraception)",
      "Medroxy Progesterone Tablets",
      "Micronized Progesterone Tablets",
      "Norethisterone Tablets",
      "Ulipristal Tablets"
    ]
  },

  {
    image: cream,
    title: "Creams and Ointments",
    desc: "Creams and ointments for skina dn other related problems",
    medicines: [
    "Beclometasone Dipropionate and Clotrimazole and Neomycin Sulphate Cream",
    "Beclometasone Dipropionate and Clotrimazole Cream",
    "Benzoyl Peroxide Cream",
    "Betamethasone Cream",
    "Ciclopirox Olamine Cream",
    "Clindamycin Phosphate and Adapalene Cream",
    "Clindamycin Phosphate and Nicotinamide Cream",
    "Clobetasol Propionate, Miconazole Nitrate and Gentamicin Sulphate Cream",
    "Clobetasol Propionate, Miconazole Nitrate and Neomycin Sulphate Cream",
    "Clotrimazole Cream",
    "Fusidic Acid Cream",
    "Hydrocortisone Acetate Cream",
    "Hydroquinone, Tretinoin & Mometasone Furoate Cream",
    "Ketoconazole Cream / Shampoo ",
    "Metronidazole Gel",
    "Mupirocin Ointment",
    "Neomycin Cream",
    "Neomycin, Polymyxin, Bacitracin Cream",
    "Povidone Iodine Ointment",
    "Silver Sulphadiazine Cream"  
  ]
},

 {
    image: cold,
    title: "Analgesics,Anti-Cough & Cold",
    desc: "Products help during cold and coughs",
    medicines: [
    "Ambroxol Hydrochloride & Cetirizine Hydrochloride Tablets",
    "Ambroxol Hydrochloride, Salbutamol, Guaifenesin and Racementhol Expectorant",
    "Aspirin Tablets",
    "Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride and Chlorpenamine Maleate Syrup",
     "Diclofenac Diethylamine + Linseed Oil + Menthol Gel",
     "Diclofenac Diethylamine Gel",
     "Diclofenac Sodium Tablets",
     "Ibuprofen Tablets / Suspension",
     "Mefenamic Acid Tablets",
     "Paracetamol, Phenylephrine Hydrochloride & Chlorpheniramine Maleate Liquid",
     "Paracetamol + Diclofenac Tablets",
     "Paracetamol and Ibuprofen Tablets / Suspension",
     "Paracetamol Drops",
     "Paracetamol Effervescent Tablets",
     "Paracetamol Phenylephrine Hydrochloride, Chlorpheniramine Maleate and Caffeine Tablets",
     "Paracetamol Tablets / Syrup",
     "Paracetamol, Phenylephrine Hydrochloride and Chlorpheniramine Maleate Tablets",
     "Paracetamol, Phenylpropanolamine Hydrochloride, Dextromethorphan Hydrobromide & Cetirizine Tablets",
     "Paracetamol, Phenylpropanolamine, Dextromethorphan Hydrobromide & Cetirizine Suspension",
     "Tramadol Tablets"  
  ]
},
   {
    image: gastro,
    title: "Gastro Related Drugs",
    desc: "Gastric control solutions",
    medicines: [
      "Aluminium Hydroxide + Magnesium Hydroxide Tablets / Suspension",
      "Aluminium Hydroxide Tablets",
      "Chloroxylenol Solution",
      "Domperidone Tablets / Suspension",
      "Ivermectin + Albendazole Syrup / Tablets",
      "Mebendazole Capsules",
      "Omeprazole Capsules",
      "Pantoprazole + Domperidone Tablets",
      "Pantoprazole Tablets",
      "Ranitidine Tablets",
      "Tinidazole, Diloxanide Furoate, Dimeticone & Homatropine Methylbromide Tablets",
      "Tinidazole, Diloxanide & Simethicone Suspension",
      "Glycerin Enema"
    ]
  },

   {
    image: disinfectant,
    title: "Disinfectants",
    desc: "Hygiene and infection control solutions.",
    medicines: [
      "Benzyl Benzoate Solution",
      "Chlorhexidine + Cetrimide Solution",
      "Chloroxylenol Solution",
      "Lysol (Cresol+soap solution)",
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
      "Alprazolam Tablets",
      "Bromocriptine Tablets",
      "Chlordiazepoxide Tablets",
      "Diazepam Tablets",
      "Fluoxetine Tablets",
      "Imipramine Tablets",
      "Olanzapine Tablets",
      "Phenobarbitone Suspension/Tablets",
      "Sodium Valproate Tablets"
    ]
  },

  {
    image: cardio,
    title: "Cardiovascular Drugs",
    desc: "Products supporting heart health.",
    medicines: [
      "Isosorbide Dinitrate Tablets",
      "Atenolol Tablets",
      "Amlodipine Tablets",
      "Atenolol + Amlodipine Tablets",
      "Enalapril Maleate Tablets",
      "Captopril Tablets",
      "Atorvastatin Tablets",
      "Diltiazem Hydrochloride Tablets",
      "Verapamil Tablets",
      "Simvastatin Tablets",
      "Losartan Potassium Tablets",
      "Metoprolol Tablets",
      "Clopidogrel Tablets",
      "Aspirin Tablets"
    ]
  },

  {
    image: diabetes,
    title: "Diabetes Care",
    desc: "Products supporting diabetes management.",
    medicines: [
      "Acarbose Tablets",
      "Glibenclamide Tablets",
      "Gliclazide Tablets",
      "Glipizide Tablets",
      "Metformin + Gliclazide Tablets",
      "Metformin Tablets",
      "Metformin + Glimepiride Tablets"
    ]
  },
  
   {
    image: allergy,
    title: "Anti Allergy and Anti Emetic Drugs",
    desc: "Products supporting during allergies.",
    medicines: [
      "Cetirizine Tablets / Suspension",
      "Doxylamine + Pyridoxine Tablets",
      "Fexofenadine Tablets",
      "Metoclopramide Tablets",
      "Montelukast Tablets",
      "Ondansetron Mouth Dissolving Tablets",
      "Promethazine Tablets / Suspension"
    ]
  },

  {
    image: vets,
    title: "Veterinary Drugs",
    desc: "Products used for animals",
    medicines: [
      "Benzyl Benzoate Lotion",
      "Fenbendazole Bolus",
      "Multimineral, Multivitamin Feed",
      "Oxytetracycline Bolus",
      "Sulphadimidine Bolus"
    ]
  },

   {
    image: other,
    title: "Other Exciting Range",
    desc: "Other medicines",
    medicines: [
      "Cyproheptadine + Tricholine Citrate Syrup",
      "Mouth Saliva Drops",
      "Mycophenolate Mofetil Tablets",
      "Oral Rehydration Powders",
      "Sildenafil Citrate Tablets",
      "Tadalafil Tablets"
    ]
  },

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

  <p className="mt-5 text-lg text-gray-600 max-w-4xl mx-auto">
    Diverse pharmaceutical formulations serving healthcare needs across multiple therapeutic segments.
  </p>

 <a
  href="/brochure.pdf"
  download
  className="
  inline-block
  mt-8

  bg-red-600
  hover:bg-red-700

  text-white
  px-8
  py-3

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