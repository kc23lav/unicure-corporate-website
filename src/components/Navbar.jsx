import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

       <div className="flex items-center gap-2 md:gap-3">

          <img
  src={logo}
  alt="Unicure"
  className="h-10 md:h-12"
/>

          <div>
            <h1 className="text-xl font-bold text-red-700">
              UNICURE
            </h1>

            <p className="text-xs text-gray-500">
              India Pvt. Ltd.
            </p>
          </div>

        </div>

        {/* Menu */}

        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <a href="#home" className="hover:text-red-600 transition">
           Home
          </a>

          <a href="#manufacturing" className="hover:text-red-600 transition">
           About
          </a>

          <a href="#facilities" className="hover:text-red-600 transition">
            Facilities
          </a>

          <a href="#products" className="hover:text-red-600 transition">
           Products
          </a>

          

          <a href="#contact" className="hover:text-red-600 transition">
           Contact
          </a>

        </ul>

        <a
  href="#contact"
  className="
  bg-red-600
  hover:bg-red-700

  px-3 md:px-6
  py-2 md:py-3

  text-sm md:text-base

  rounded-xl
  text-white
  font-semibold

  shadow-lg
  transition
  hover:scale-105

  whitespace-nowrap
  "
>
  Request Partnership
</a>

      </div>

    </nav>
  );
}

export default Navbar;