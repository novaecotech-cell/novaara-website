import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import aboutImage from "../assets/images/about-main.jpg";
import { Link } from "react-scroll";

function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F6F2] py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT */}

          <div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5 }}
              viewport={{ once: true }}
              className="uppercase tracking-[4px] text-green-700 font-semibold"
            >
              WHY NOVAARA
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: .2,
                duration: .7,
              }}
              viewport={{ once: true }}
              className="mt-4 text-4xl lg:text-5xl font-bold leading-tight text-gray-900"
              style={{ fontFamily: "Playfair Display" }}
            >
              From Discarded Fibres to
              <br />
              Packaging
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: .4,
                duration: .7,
              }}
              viewport={{ once: true }}
              className="mt-5 text-base leading-7 text-gray-600"
            >
              Every year, millions of tonnes of valuable fibres are
              discarded while industries continue to rely on virgin
              wood for paper production.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                delay: .6,
                duration: .7,
              }}
              viewport={{ once: true }}
              className="mt-4 text-base leading-7 text-gray-600"
            >
            </motion.p>

            <Link
  to="technology"
  smooth={true}
  duration={700}
  offset={-80}
>
  <motion.button
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className="mt-12 flex items-center gap-3 bg-green-700 hover:bg-green-800 transition px-8 py-4 rounded-full text-white cursor-pointer"
  >
    Learn More

    <ArrowRight size={20} />
  </motion.button>
</Link>

          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >

            <img
              src={aboutImage}
              loading="lazy"
              decoding="async"
              alt="Wood-free paper materials developed by Novaara"
              className="rounded-2xl shadow-xl object-cover w-full h-[340px]"
            />

            {/* Floating Card */}

            <div
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg p-5 w-56"
            >

              <p className="text-green-700 font-semibold uppercase text-[11px] tracking-[2px]">

                Our Mission

              </p>

              <h3
                className="mt-2 text-xl font-bold"
                style={{ fontFamily: "Playfair Display" }}
              >
                Circular Materials
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">

                Replacing virgin wood fibres with renewable
                waste streams for the future of sustainable
                packaging.

              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;

