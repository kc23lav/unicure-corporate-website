import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-20">

      {/* Top Section */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h3 className="text-4xl font-bold text-red-500">
              UNICURE
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Delivering pharmaceutical excellence through
              innovation, quality manufacturing and global
              healthcare partnerships for over four decades.
            </p>

            <div className="flex gap-4 mt-6">

              {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="
                    w-10
                    h-10
                    rounded-full
                    bg-red-700
                    flex
                    items-center
                    justify-center
                    hover:scale-110
                    transition
                    cursor-pointer
                    "
                  >
                    <Icon />
                  </div>
                )
              )}

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h4 className="text-xl font-bold mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home" className="hover:text-red-400">
                  Home
                </a>
              </li>

              <li>
                <a href="#manufacturing" className="hover:text-red-400">
                  About Us
                </a>
              </li>

              <li>
                <a href="#why-us" className="hover:text-red-400">
                  Why Choose Us
                </a>
              </li>


              <li>
                <a href="#facilities" className="hover:text-red-400">
                  Facilities
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-red-400">
                  Products
                </a>
              </li>
    
              <li>
                <a href="#leaders" className="hover:text-red-400">
                  Our Leaders 
                </a>
              </li>

              <li>
                <a href="#markets" className="hover:text-red-400">
                  International Markets
                </a>
              </li>

             <li>
                <a href="#clients" className="hover:text-red-400">
                  Our Clients
                </a>
              </li>


              <li>
                <a href="#contact" className="hover:text-red-400">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Global Presence */}

          <div>

            <h4 className="text-xl font-bold mb-5">
              Global Presence
            </h4>

            <ul className="space-y-3 text-gray-400">

              <li>🇮🇳 India</li>
              <li>🇧🇪 Belgium</li>
              <li>🇺🇿 Uzbekistan</li>
              <li>🇮🇷 Iran</li>
              <li>🇮🇶 Iraq</li>
              <li>🇾🇪 Yemen</li>
              <li>🇵🇭 Philippines</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h4 className="text-xl font-bold mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-gray-400">

              <div className="flex gap-3">
                <FaPhoneAlt className="text-red-500 mt-1" />
                <span>+91 XXXXX XXXXX</span>
              </div>

              <div className="flex gap-3">
                <FaEnvelope className="text-red-500 mt-1" />
                <span>info@unicureindia.com</span>
              </div>

              <div className="flex gap-3">
                <FaMapMarkerAlt className="text-red-500 mt-1" />
                <span>
                  Haridwar, Uttarakhand, India
                </span>
              </div>

            </div>

            <div
              className="
              mt-6
              bg-red-700/20
              border
              border-red-700/30
              rounded-2xl
              p-4
              "
            >
              <h5 className="font-bold text-red-400">
                WHO-GMP Certified
              </h5>

              <p className="text-sm text-gray-400 mt-1">
                Maintaining international quality standards.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-slate-800">

        <div
          className="
          max-w-7xl
          mx-auto
          px-6
          py-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          "
        >

          <p className="text-gray-500 text-sm">
            © 2026 Unicure India Pvt. Ltd.
            All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed & Developed with ❤️ by{" "}
            <span className="text-red-500 font-semibold">
              Lavanya Tyagi
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;