import { useEffect, useState } from "react";
import { FaRocket } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0,
            y: 100,
          }}
          whileHover={{
            scale: 1.15,
            y: -8,
          }}
          whileTap={{
            scale: 0.9,
          }}
          onClick={scrollToTop}
          className="
fixed
bottom-8
right-8
z-[999]
bg-red-600
text-white
p-5
rounded-full
shadow-2xl
shadow-red-500/50
"
        >
          <FaRocket size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;