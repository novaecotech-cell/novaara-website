import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import technologyImage from "../assets/images/technology.jpeg";

function TechnologyPage() {
  return (
    <main className="bg-[#fafaf8] min-h-screen">
        <Helmet>
  <title>
    Textile Waste to Paper | Circular Materials Technology | Novaara
  </title>

  <meta
    name="description"
    content="Novaara develops circular materials by recovering fibres from textile waste and renewable resources for wood-free paper and sustainable packaging applications."
  />

  <link
    rel="canonical"
    href="https://novaaraecotech.com/technology"
  />

  <meta
    property="og:title"
    content="Textile Waste to Paper | Novaara Ecotechnologies"
  />

  <meta
    property="og:description"
    content="Exploring waste-derived fibres for wood-free paper and circular packaging materials."
  />

  <meta
    property="og:url"
    content="https://novaaraecotech.com/technology"
  />
  <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://novaaraecotech.com/technology#webpage",
        "url": "https://novaaraecotech.com/technology",
        "name":
          "Textile Waste to Paper | Circular Materials Technology | Novaara",
        "description":
          "Novaara develops circular materials by recovering fibres from textile waste and renewable resources for wood-free paper and sustainable packaging applications.",
        "isPartOf": {
          "@id": "https://novaaraecotech.com/#website"
        },
        "about": {
          "@id": "https://novaaraecotech.com/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://novaaraecotech.com/technology#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://novaaraecotech.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Technology",
            "item": "https://novaaraecotech.com/technology"
          }
        ]
      }
    ]
  })}
</script>
</Helmet>

      {/* ================= HERO ================= */}

      <section className="pt-36 pb-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

          <p className="uppercase tracking-[5px] text-green-700 font-semibold text-sm">
            Novaara Technology
          </p>

          <h1
            className="mt-4 text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            style={{ fontFamily: "Playfair Display" }}
          >
            Engineering Circular
            <br />
            Materials from Waste
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-8">
            Novaara develops fibrous materials from textile waste and 
            recovered waste streams for sustainable paper and 
            circular packaging applications.
          </p>

        </div>

      </section>


      {/* ================= CORE APPROACH ================= */}

      <section className="py-20 bg-[#fafaf8]">

        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >

              <img
                src={technologyImage}
                loading="lazy"
                decoding="async"
                alt="Fibrous material developed from recovered waste for sustainable paper applications"
                className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
              />

            </motion.div>


            {/* Text */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[4px] text-green-700 font-semibold text-sm">
                Our Approach
              </p>

              <h2
                className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                From Waste to Fibre to Paper to Packaging
              </h2>

              <p className="mt-5 text-gray-600 leading-8">
                Novaara focuses on recovering useful fibres from waste
                streams and developing them into materials suitable for
                paper manufacturing and sustainable packaging applications.
              </p>

              <p className="mt-4 text-gray-600 leading-8">
                Our approach is designed around fibre recovery, material
                utilization and circularity, helping redirect valuable
                resources away from disposal and towards new applications.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* ================= PROCESS ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <div className="text-center max-w-3xl mx-auto">

            <p className="uppercase tracking-[4px] text-green-700 font-semibold text-sm">
              Material Platform
            </p>

            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "Playfair Display" }}
            >
              Turning Underutilized Fibres into Useful Materials
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Our technology platform explores how different waste-derived
              fibres can be processed and incorporated into paper materials
              for practical packaging applications.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {/* Step 1 */}

            <div className="bg-[#fafaf8] rounded-2xl p-6 border border-gray-100">

              <div className="text-green-700 font-bold text-sm">
                01
              </div>

              <h3
                className="mt-3 text-xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                Waste Recovery
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Identifying and recovering suitable fibres from
                underutilized waste streams.
              </p>

            </div>


            {/* Step 2 */}

            <div className="bg-[#fafaf8] rounded-2xl p-6 border border-gray-100">

              <div className="text-green-700 font-bold text-sm">
                02
              </div>

              <h3
                className="mt-3 text-xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                Fibre Processing
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Processing recovered materials into fibrous feedstock
                suitable for further material development.
              </p>

            </div>


            {/* Step 3 */}

            <div className="bg-[#fafaf8] rounded-2xl p-6 border border-gray-100">

              <div className="text-green-700 font-bold text-sm">
                03
              </div>

              <h3
                className="mt-3 text-xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                Paper Development
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Exploring the use of recovered fibres in paper materials
                designed for sustainable packaging.
              </p>

            </div>


            {/* Step 4 */}

            <div className="bg-[#fafaf8] rounded-2xl p-6 border border-gray-100">

              <div className="text-green-700 font-bold text-sm">
                04
              </div>

              <h3
                className="mt-3 text-xl font-bold text-gray-900"
                style={{ fontFamily: "Playfair Display" }}
              >
                Packaging
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Applying these materials to practical circular packaging
                products.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= TEXTILE WASTE ================= */}

      <section className="py-20 bg-[#fafaf8]">

        <div className="max-w-5xl mx-auto px-6 md:px-8">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[4px] text-green-700 font-semibold text-sm">
              Textile Waste
            </p>

            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "Playfair Display" }}
            >
              Recovering Value from Textile Fibres
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Textile waste contains valuable fibrous material that can
              otherwise be lost through disposal. Novaara is developing
              processes to recover and utilize suitable textile fibres
              as a feedstock for wood-free paper and packaging materials.
            </p>

            <p className="mt-4 text-gray-600 leading-8">
              This creates a pathway from textile waste to new material
              applications while reducing reliance on conventional fibre
              sources and supporting a more circular materials system.
            </p>

          </div>

        </div>

      </section>


      {/* ================= LEAF R&D ================= */}

      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-6 md:px-8 text-center">

          <p className="uppercase tracking-[4px] text-green-700 font-semibold text-sm">
            Next Generation Materials
          </p>

          <h2
            className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            Exploring Renewable Biomass Fibres
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 leading-8">
            Novaara is also researching the use of fallen leaves and other
            renewable biomass resources as potential fibre sources for
            future tree-free paper and packaging materials.
          </p>

          <div className="inline-block mt-6 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium">
            Currently under R&D
          </div>

        </div>

      </section>


     {/* ================= CTA ================= */}

<section className="py-20 bg-green-700">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <h2
      className="text-3xl md:text-4xl font-bold text-white"
      style={{ fontFamily: "Playfair Display" }}
    >
      Building Materials for a Circular Future
    </h2>

    <p className="mt-4 text-green-50 leading-7">
      Novaara is developing new pathways for waste-derived fibres
      to become useful materials for sustainable packaging.
    </p>

    <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">

      <a
        href="/paper-bags"
        className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-50 transition"
      >
        Explore Our Paper Bags
      </a>

      <a
        href="/#contact"
        className="inline-block border border-white/60 text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
      >
        Contact Us
      </a>

    </div>

  </div>

</section>

    </main>
  );
}

export default TechnologyPage;