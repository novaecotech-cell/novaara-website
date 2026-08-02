import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-scroll";

function HeroContent() {
  return (
    <div className="relative z-10 h-full flex items-center pt-36 md:pt-28 lg:pt-32">
      <div className="max-w-7xl mx-auto w-full px-8">
        <div className="max-w-xl lg:max-w-4xl">

          {/* Heading */}

          <h1
            className="text-white font-bold leading-[1.02] text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl"
            style={{ fontFamily: "Playfair Display" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="block"
            >
              Packaging
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="block"
            >
              Made from
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="block"
            >
              Upcycled Materials
            </motion.span>
          </h1>

          {/* Green Line */}

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ delay: 0.7 }}
            className="h-1 bg-green-500 rounded-full mt-8"
          />

          {/* Subtitle */}

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-6 text-gray-200 text-base sm:text-lg leading-8 max-w-md sm:max-w-lg"
          >
            Eco-friendly, high-performance wood-free paper engineered
            from discarded textiles and fallen leaves, helping
            businesses transition to sustainable packaging.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            {/* View Products */}

            <Link
              to="products"
              smooth={true}
              duration={700}
              offset={-80}
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(34,197,94,.45)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-green-600 hover:bg-green-700 transition px-7 py-4 rounded-full text-white flex items-center gap-3 cursor-pointer"
              >
                View Our Products
                <ArrowRight size={20} />
              </motion.button>
            </Link>


            {/* Contact */}

            <Link
              to="contact"
              smooth={true}
              duration={700}
              offset={-80}
            >
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="border border-white/40 px-7 py-4 rounded-full text-white hover:bg-white hover:text-black transition cursor-pointer"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.div
        animate={{
          y: [0, 10, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="hidden md:block absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-white" size={38} />
      </motion.div>
    </div>
  );
}

export default HeroContent;