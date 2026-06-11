import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaChevronDown,
} from "react-icons/fa";

function Contact() {

const offices = [
  {
    name: "Noida Unit",
    address: "C-21, Sector 58, Noida, Uttar Pradesh",
    map:
      "https://www.google.com/maps?q=Noida&output=embed",
  },

  {
    name: "Roorkee Unit",
    address: "Roorkee, Uttarakhand",
    map:
      "https://www.google.com/maps?q=Roorkee&output=embed",
  },

  {
    name: "Greater Noida Unit",
    address: "Greater Noida, Uttar Pradesh",
    map:
      "https://www.google.com/maps?q=Greater+Noida&output=embed",
  },
];


const [selectedOffice, setSelectedOffice] =
  useState(offices[0]);

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Do you provide third-party manufacturing?",
      answer:
        "Yes. Unicure India Ltd. offers third-party pharmaceutical manufacturing solutions for domestic and international clients.",
    },

    {
      question: "Do you export internationally?",
      answer:
        "Yes. We export pharmaceutical products across Asia, Africa, Europe and other global markets.",
    },

    {
      question: "How quickly can I receive a response?",
      answer:
        "Our team typically responds to all inquiries within 24–48 business hours.",
    },

    {
      question: "Can I become a distribution partner?",
      answer:
        "Yes. We welcome partnerships with distributors, healthcare organizations and pharmaceutical companies worldwide.",
    },
  ];
  return (
    <section
      id="contact"
      className="py-28 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}

        <div className="text-center mb-20">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold text-gray-900"
          >
            Get In Touch
          </motion.h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Let's build healthcare partnerships together and create
            a healthier future through pharmaceutical excellence.
          </p>

        </div>

        {/* CONTACT CARDS */}

        <div className="grid md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {[
            {
              icon: <FaPhoneAlt />,
              title: "Call Us",
              value: "+91 XXXXX XXXXX",
            },

            {
              icon: <FaEnvelope />,
              title: "Email",
              value: "info@unicureindia.com",
            },

            {
              icon: <FaGlobe />,
              title: "Website",
              value: "www.unicureindia.com",
            },
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              className="
bg-white
rounded-3xl
p-10
shadow-lg
hover:shadow-red-100
hover:shadow-2xl
border
border-gray-100
text-center

flex
flex-col
justify-center
items-center

min-h-[220px]

transition-all
duration-300
"
            >

              <div className="text-red-700 text-5xl mb-6 flex justify-center">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>

        {/* FORM + CTA */}

        <div className="grid lg:grid-cols-2 gap-12">

          {/* FORM */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
            bg-white
            rounded-[40px]
            shadow-xl
            p-10
            "
          >

            <h3 className="text-4xl font-bold mb-8">
              Send Us A Message
            </h3>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-gray-200"
              />

              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-4 rounded-xl border border-gray-200"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-gray-200"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-4 rounded-xl border border-gray-200"
              />

              <input
                type="text"
                placeholder="Country"
                className="w-full p-4 rounded-xl border border-gray-200"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full p-4 rounded-xl border border-gray-200"
              />

              <button
                type="submit"
                className="
                bg-red-700
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                hover:bg-red-800
                transition
                "
              >
                Request Partnership
              </button>

            </form>

          </motion.div>

          {/* EXPORT CTA */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="
            bg-gradient-to-br
            from-red-700
            to-red-900
            text-white
            rounded-[40px]
            p-12
            flex
            flex-col
            justify-center
            "
          >

            <h3 className="text-5xl font-bold mb-6">
              Looking For Export Partnerships?
            </h3>

            <p className="text-lg leading-relaxed text-red-100">
              Our international business team is ready to assist
              distributors, wholesalers, healthcare organizations,
              and pharmaceutical companies worldwide.
            </p>

            <button
              className="
              mt-8
              bg-white
              text-red-700
              px-8
              py-4
              rounded-xl
              font-semibold
              w-fit
              hover:scale-105
              transition
              "
            >
              Schedule Discussion
            </button>

          </motion.div>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-8 mt-24">

          {[
            ["40+", "Years Experience"],
            ["100+", "Products"],
            ["10+", "Export Markets"],
            ["WHO-GMP", "Certified"],
          ].map((item, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              p-8
              text-center
              shadow-lg
              "
            >

              <h3 className="text-4xl font-bold text-red-700">
                {item[0]}
              </h3>

              <p className="text-gray-600 mt-2">
                {item[1]}
              </p>

            </div>

          ))}

        </div>

       {/* OFFICE LOCATIONS */}

<div className="mt-28">

  <h3 className="text-5xl font-bold text-center mb-10">
    Our Locations
  </h3>

  <div className="flex flex-wrap justify-center gap-4 mb-8">

    {offices.map((office) => (

      <button
        key={office.name}
        onClick={() => setSelectedOffice(office)}
        className={`
        px-6 py-3 rounded-xl font-semibold transition

        ${
          selectedOffice.name === office.name
            ? "bg-red-700 text-white"
            : "bg-white border border-red-200"
        }
        `}
      >
        {office.name}
      </button>

    ))}

  </div>

  <div className="text-center mb-8">

    <h4 className="text-3xl font-bold text-red-700">
      {selectedOffice.name}
    </h4>

    <p className="text-gray-600 mt-2">
      {selectedOffice.address}
    </p>

  </div>

  <iframe
    src={selectedOffice.map}
    width="100%"
    height="450"
    style={{
      border: 0,
      borderRadius: "30px",
    }}
    loading="lazy"
  />

</div>

        {/* FAQ */}

        <div className="mt-28">

          <h3 className="text-5xl font-bold text-center mb-16">
            Frequently Asked Questions
          </h3>

          <div className="max-w-4xl mx-auto">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="
                mb-5
                bg-white
                rounded-2xl
                shadow-md
                overflow-hidden
                "
              >

                <button
                  onClick={() =>
                    setOpenFAQ(
                      openFAQ === index ? null : index
                    )
                  }
                  className="
                  w-full
                  p-6
                  flex
                  justify-between
                  items-center
                  text-left
                  "
                >

                  <span className="font-semibold">
                    {faq.question}
                  </span>

                  <FaChevronDown />

                </button>

                {openFAQ === index && (

                  <div className="px-6 pb-6 text-gray-600">
                    {faq.answer}
                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;