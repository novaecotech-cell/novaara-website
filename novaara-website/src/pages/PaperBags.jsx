import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  CheckCircle,
  ShoppingBag,
  FlaskConical,
} from "lucide-react";

import twistedbagImage from "../assets/Products/paperbags.jpg";
import flathandlebagImage from "../assets/Products/flathandlebag.png";
import vbottombagImage from "../assets/Products/v-bottombag.jpg";
import leafImage from "../assets/Products/leavesbag.jpg";

function PaperBags() {

  const products = [
    {
      title: "Flat Handle Paper Bags",
      image: flathandlebagImage,
      alt: "Flat handle sustainable paper bags",
      description:
        "Custom paper bags with flat handles for retail, food service and commercial packaging.",
      features: [
        "Custom size",
        "Custom design",
        "Branding available",
        "MOQ: 200 bags",
      ],
    },

    {
      title: "Twisted Handle Paper Bags",
      image: twistedbagImage,
      alt: "Twisted handle sustainable paper bags",
      description:
        "Custom paper bags with twisted handles for retail brands and commercial packaging.",
      features: [
        "Custom size",
        "Custom design",
        "Branding available",
        "MOQ: 200 bags",
      ],
    },

    {
      title: "V-Bottom Paper Bags",
      image: vbottombagImage,
      alt: "V-bottom sustainable paper bags",
      description:
        "Lightweight paper bags designed for bakeries, food businesses and everyday retail applications.",
      features: [
        "Custom size",
        "Custom design",
        "Branding available",
        "MOQ: 200 bags",
      ],
    },
  ];

  return (
    <main className="bg-[#fafaf8] min-h-screen">

      {/* ================= SEO ================= */}

      <Helmet>

        <title>
          Sustainable Paper Bags | Novaara Ecotechnologies
        </title>

        <meta
          name="description"
          content="Novaara Ecotechnologies develops custom sustainable paper bags in India, including flat handle, twisted handle and V-bottom bags made from recovered textile fibres."
        />

        <link
          rel="canonical"
          href="https://novaaraecotech.com/paper-bags"
        />

        <meta
          property="og:title"
          content="Sustainable Paper Bags | Novaara Ecotechnologies"
        />

        <meta
          property="og:description"
          content="Custom sustainable paper bags with flat handles, twisted handles and V-bottom designs."
        />

        <meta
          property="og:url"
          content="https://novaaraecotech.com/paper-bags"
        />
        <script type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://novaaraecotech.com/paper-bags#webpage",
        "url": "https://novaaraecotech.com/paper-bags",
        "name": "Sustainable Paper Bags | Novaara Ecotechnologies",
        "description":
          "Novaara Ecotechnologies develops custom sustainable paper bags in India, including flat handle, twisted handle and V-bottom bags made from recovered textile fibres.",
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
        "@id": "https://novaaraecotech.com/paper-bags#breadcrumb",
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
            "name": "Paper Bags",
            "item": "https://novaaraecotech.com/paper-bags"
          }
        ]
      }
    ]
  })}
</script>

      </Helmet>


      {/* ================= HERO ================= */}

      <section className="pt-28 pb-12 md:pt-32 md:pb-14">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[5px] text-green-700 font-semibold text-sm">
            Sustainable Packaging
          </p>

          <h1
            className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
            style={{ fontFamily: "Playfair Display" }}
          >
            Custom Sustainable Paper Bags
            <br />
            from Recovered Fibres
          </h1>

          <p className="mt-5 max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-7">
            Customizable paper bags for businesses seeking sustainable
            packaging solutions made using recovered textile fibres.
          </p>

        </div>

      </section>


      {/* ================= COMMON SPECIFICATIONS ================= */}

      <section className="pb-10">

        <div className="max-w-5xl mx-auto px-6">

          <div className="flex flex-wrap gap-3 justify-center">

            <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              <CheckCircle size={15} />
              Range of sizes
            </div>

            <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              <CheckCircle size={15} />
              Custom designs
            </div>

            <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              <CheckCircle size={15} />
              Branding available
            </div>

            <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-800 px-4 py-2 rounded-full text-sm">
              <CheckCircle size={15} />
              No MOQ
            </div>

          </div>

        </div>

      </section>


      {/* ================= PRODUCT RANGE ================= */}

      <section className="py-10">

        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {products.map((product, index) => (

              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
              >

                {/* PRODUCT IMAGE */}

                <div className="h-[180px] overflow-hidden bg-gray-50">

                  <img
                    src={product.image}
                    loading="lazy"
                    decoding="async"
                    alt={product.alt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />

                </div>


                {/* PRODUCT CONTENT */}

                <div className="p-5 flex flex-col flex-1">

                  <div className="inline-flex self-start items-center gap-2 bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">

                    <ShoppingBag size={12} />

                    Paper Bag

                  </div>


                  <h2
                    className="mt-3 text-xl font-bold text-gray-900 leading-tight"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {product.title}
                  </h2>


                  <p className="mt-2 text-sm text-gray-600 leading-6">
                    {product.description}
                  </p>


                  <div className="mt-4 space-y-1.5 text-sm text-gray-700">

                    {product.features.map((feature) => (

                      <div
                        key={feature}
                        className="flex items-center gap-2"
                      >

                        <CheckCircle
                          size={14}
                          className="text-green-600 shrink-0"
                        />

                        {feature}

                      </div>

                    ))}

                  </div>


                  <div className="mt-5">

                    <a
                      href="/#contact"
                      className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
                    >
                      Enquire Now
                    </a>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= LEAF R&D ================= */}

      <section className="py-12">

        <div className="max-w-6xl mx-auto px-6 md:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >

            <div className="grid md:grid-cols-[0.9fr_1.1fr]">

              {/* IMAGE */}

              <div className="h-[220px] md:h-[260px] overflow-hidden bg-gray-100 relative">

                <img
                  src={leafImage}
                  loading="lazy"
                  decoding="async"
                  alt="Tree-free Packaging materials developed from fallen leaves"
                  className="w-full h-full object-cover blur-[1px] brightness-90"
                />

                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="bg-white/95 px-4 py-2 rounded-full text-sm font-semibold text-green-700 shadow">
                    UNDER R&D
                  </div>

                </div>

              </div>


              {/* CONTENT */}

              <div className="p-6 md:p-8 flex flex-col justify-center">

                <div className="inline-flex self-start items-center gap-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium">

                  <FlaskConical size={13} />

                  Under Development

                </div>


                <h2
                  className="mt-3 text-2xl md:text-3xl font-bold text-gray-900"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Packaging from Fallen Leaves
                </h2>


                <p className="mt-3 text-sm md:text-base text-gray-600 leading-6">
                  Novaara is developing tree-free packaging materials from
                  fallen leaves to reduce dependence on virgin wood fibres
                  and create new pathways for biomass waste.
                </p>


                <div className="mt-4 grid sm:grid-cols-2 gap-2 text-sm text-gray-700">

                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={14}
                      className="text-green-600 shrink-0"
                    />
                    Fallen leaf fibre-based materials
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={14}
                      className="text-green-600 shrink-0"
                    />
                    Tree-free paper development
                  </div>

                  <div className="flex items-center gap-2">
                    <CheckCircle
                      size={14}
                      className="text-green-600 shrink-0"
                    />
                    Sustainable packaging applications
                  </div>

                </div>


                <div className="mt-4">

                  <span className="inline-block bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-xs">
                    Currently under research & validation
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* ================= MATERIAL STORY ================= */}

      <section className="py-14 bg-white">

        <div className="max-w-5xl mx-auto px-6 md:px-8">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[4px] text-green-700 font-semibold text-sm">
              Novaara Materials
            </p>

            <h2
              className="mt-3 text-3xl md:text-4xl font-bold text-gray-900"
              style={{ fontFamily: "Playfair Display" }}
            >
              From Recovered Fibres to Sustainable Packaging
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              Novaara is developing circular paper materials using recovered
              textile waste and renewable fibres, creating new pathways for
              underutilized waste streams.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="py-14 bg-green-700">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ fontFamily: "Playfair Display" }}
          >
            Looking for Custom Paper Bags?
          </h2>

          <p className="mt-3 text-green-50 leading-7">
            Talk to Novaara about your required bag size, design, branding
            and quantity.
          </p>

          <button
            onClick={() => {
              window.location.href = "/?scrollTo=contact";
            }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition"
          >
            Enquire Now
          </button>

        </div>

      </section>

    </main>
  );
}

export default PaperBags;