import { useState } from "react";
import CatalogueModal from "./CatalogueModal";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShoppingBag,
  FlaskConical,
} from "lucide-react";

import bagImage from "../assets/Products/paperbags.jpg";
import leafImage from "../assets/Products/leavesbag.jpg";

function Products() {
  const [openCatalogue, setOpenCatalogue] = useState(false);
  return (
    <section
      id="products"
      className="bg-[#fafaf8] py-20"
    >
      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[5px] text-green-700 font-semibold">
            Products
          </p>

          <h2
            className="mt-3 text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            Sustainable Packaging
          </h2>

          <p className="mt-5 text-base text-gray-600 leading-7">
            Commercial products available today together with
            our next-generation materials currently under research.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {/* ---------------- PRODUCT 1 ---------------- */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >

            <img
              src={bagImage}
              loading="lazy"
              decoding="async"
              alt="Wood-Free Paper Bags Made from Recycled Textile Waste Fibres"
              className="w-full h-[190px] object-cover"
            />

            <div className="p-6">

              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">

                <ShoppingBag size={14} />

                Available Now

              </div>

              <h3
                className="mt-4 text-2xl font-bold leading-tight"
                style={{ fontFamily: "Playfair Display" }}
              >
                Tree-Free Paper Bags
              </h3>

              <p className="mt-3 text-[15px] leading-6 text-gray-600">

                Brown kraft paper bags manufactured using
                recovered textile fibres for sustainable
                commercial packaging.

              </p>

              <div className="mt-5 space-y-2 text-[15px]">

                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Custom Printing
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Multiple Sizes
                </div>

                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-600" />
                  Bulk B2B Supply
                </div>

              </div>

              <button
                onClick={() => setOpenCatalogue(true)}
                className="mt-5 bg-green-600 hover:bg-green-700 transition px-5 py-2.5 rounded-full text-sm text-white"
              >

                Request Catalogue

              </button>

            </div>

          </motion.div>

          {/* ---------------- PRODUCT 2 ---------------- */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >

            <div className="relative">

              <img
                src={leafImage}
                alt="Packaging from Fallen Leaves"
                className="w-full h-[190px] object-cover blur-[3px] brightness-90"
              />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="bg-white/95 px-4 py-1 rounded-full text-xs font-semibold text-green-700 shadow">

                  UNDER R&D

                </div>

              </div>

            </div>

            <div className="p-6">

              <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">

                <FlaskConical size={14} />

                Under Development

              </div>

              <h3
                className="mt-4 text-2xl font-bold leading-tight"
                style={{ fontFamily: "Playfair Display" }}
              >
                Packaging from Fallen Leaves
              </h3>

              <p className="mt-3 text-[15px] leading-6 text-gray-600">

                Developing tree-free packaging from fallen
                leaves to reduce dependence on virgin wood
                fibres.

              </p>

              <div className="mt-5">

                <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">

                  Commercial launch after validation

                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
      <CatalogueModal
        isOpen={openCatalogue}
        onClose={() => setOpenCatalogue(false)}
      />
    </section>
  );
}

export default Products;