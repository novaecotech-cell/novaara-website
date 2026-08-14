import { useState } from "react";
import CatalogueModal from "./CatalogueModal";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  FlaskConical,
  CheckCircle,
} from "lucide-react";

import twistedbagImage from "../assets/Products/paperbags.jpg";
import flathandlebagImage from "../assets/Products/flathandlebag.png";
import vbottombagImage from "../assets/Products/v-bottombag.jpg";
import leafImage from "../assets/Products/leavesbag.jpg";

function Products() {
  const [openCatalogue, setOpenCatalogue] = useState(false);

  const availableProducts = [
    {
      title: "Square Bottom Bags — Flat Handle",
      image: flathandlebagImage,
      description:
        "Tree-free paper bags made using recovered textile fibres, designed for sustainable retail and commercial packaging.",
    },
    {
      title: "Square Bottom Bags — Twisted Handle",
      image: twistedbagImage,
      description:
        "Tree-free paper bags made using recovered textile fibres with a premium twisted-handle finish.",
    },
    {
      title: "V-Bottom Bags",
      image: vbottombagImage,
      description:
        "Lightweight tree-free paper bags designed for bakeries, food businesses and everyday retail applications.",
    },
  ];

  return (
    <section
      id="products"
      className="bg-[#fafaf8] py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="uppercase tracking-[5px] text-green-700 font-semibold text-sm">
            Products
          </p>

          <h2
            className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            Sustainable Packaging
          </h2>

          <p className="mt-4 text-base text-gray-600 leading-7">
            Packaging solutions made from recovered textile fibres,
            alongside next-generation materials under development.
          </p>
        </motion.div>


        {/* ================= COMMON SPECIFICATIONS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >

          <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
            <CheckCircle size={15} />
            Custom sizes & designs
          </div>

          <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
            <CheckCircle size={15} />
            Branding available
          </div>

          <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
            <CheckCircle size={15} />
            No MOQ
          </div>

        </motion.div>


        {/* =====================================================
            TEXTILE WASTE PRODUCT RANGE
        ===================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {availableProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >

              {/* Image */}

              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100">

                <img
                  src={product.image}
                  loading="lazy"
                  decoding="async"
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />

              </div>


              {/* Content */}

              <div className="p-5 flex flex-col flex-1">

                {/* Status */}

                <div className="inline-flex self-start items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">

                  <ShoppingBag size={13} />

                  Launching Soon

                </div>


                {/* Title */}

                <h3
                  className="mt-3 text-xl font-bold leading-tight text-gray-900"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {product.title}
                </h3>


                {/* Description */}

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>


                {/* CTA */}

                <div className="mt-auto pt-5">

                  <button
                    onClick={() => setOpenCatalogue(true)}
                    className="bg-green-600 hover:bg-green-700 transition px-5 py-2 rounded-full text-sm text-white"
                  >
                    Request Catalogue
                  </button>

                </div>

              </div>

            </motion.div>
          ))}

        </div>


        {/* =====================================================
            LEAF R&D
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="mt-6 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
        >

          <div className="grid md:grid-cols-2">

            {/* Leaf Image */}

            <div className="relative min-h-[240px] md:min-h-[300px] overflow-hidden bg-gray-100">

              <img
                src={leafImage}
                loading="lazy"
                decoding="async"
                alt="Packaging developed from fallen leaves"
                className="absolute inset-0 w-full h-full object-cover blur-[2px] brightness-90"
              />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="bg-white/95 px-5 py-2 rounded-full text-sm font-semibold text-green-700 shadow">
                  UNDER R&D
                </div>

              </div>

            </div>


            {/* Leaf Content */}

            <div className="p-6 md:p-8 flex flex-col justify-center">

              <div className="inline-flex self-start items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">

                <FlaskConical size={13} />

                Under Development

              </div>


              <h3
                className="mt-4 text-2xl md:text-3xl font-bold leading-tight text-gray-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                Packaging from Fallen Leaves
              </h3>


              <p className="mt-3 text-sm md:text-base leading-6 text-gray-600">
                Developing tree-free packaging materials from fallen
                leaves to reduce dependence on virgin wood fibres and
                create new pathways for biomass waste.
              </p>


              <div className="mt-5 space-y-2 text-sm text-gray-700">

                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="text-green-600 shrink-0"
                  />
                  Fallen leaf fibre-based materials
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="text-green-600 shrink-0"
                  />
                  Tree-free paper development
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle
                    size={15}
                    className="text-green-600 shrink-0"
                  />
                  Sustainable packaging applications
                </div>

              </div>


              <div className="mt-5">

                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs">
                  Currently under research & validation
                </span>

              </div>

            </div>

          </div>

        </motion.div>


        {/* ================= CATALOGUE MODAL ================= */}

        <CatalogueModal
          isOpen={openCatalogue}
          onClose={() => setOpenCatalogue(false)}
        />

      </div>
    </section>
  );
}

export default Products;