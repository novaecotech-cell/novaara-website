import { motion } from "framer-motion";
import technologyImage from "../assets/images/technology.jpeg";

function Technology() {
  return (
    <section
      id="technology"
      className="bg-white py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[4px] text-green-700 font-semibold">
            Technology
          </p>

          <h2
            className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Playfair Display" }}
          >
            Engineering Circular
            <br />
            Materials from Waste
          </h2>


        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-14">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >

            <img
              src={technologyImage}
              loading="lazy"
              decoding="async"
              alt="Recovered fibres used to develop wood-free paper materials and packaging"
              className="w-full h-[280px] object-cover rounded-2xl shadow-lg"
            />

          </motion.div>

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .7 }}
            viewport={{ once: true }}
          >


            
            <p className="mt-4 text-base leading-7 text-gray-600">
              
              FROM WASTE TO FIBRE TO PAPER TO PACKAGING
              <br />

              <br />
              Every stage is designed to maximize fibre recovery,
              reduce waste, and minimize energy and water consumption.

            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Technology;