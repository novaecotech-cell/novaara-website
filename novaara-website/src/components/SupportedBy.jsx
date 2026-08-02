import { motion } from "framer-motion";

import ECELL from "../assets/logos/ECELL.png";
import IITMANLogo from "../assets/logos/IITMandi.png";
import CEDAU from "../assets/logos/CED.png";
import EDIITN from "../assets/logos/EDIITN.png";
import SIA from "../assets/logos/SIA.png";

function SupportedBy() {
  const logos = [
    {
      src: ECELL,
      alt: "ECELL IIT Madras",
    },
    {
      src: IITMANLogo,
      alt: "IIT Mandi",
    },
    {
      src: CEDAU,
      alt: "CED AU",
    },
    {
      src: EDIITN,
      alt: "EDII-TN",
    },
    {
      src: SIA,
      alt: "SIA",
    }
  ];

  const scrollingLogos = [...logos, ...logos];

  return (
    <section className="bg-white py-20 overflow-hidden">

      {/* Heading */}

      <div className="max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            text-center
            text-gray-500
            uppercase
            tracking-[5px]
            text-sm
            font-semibold
            mb-14
          "
        >
          Supported By
        </motion.p>

      </div>

      {/* Logo Slider */}

      <div className="relative w-full overflow-hidden">

        {/* Left fade */}

        <div
          className="
            absolute
            left-0
            top-0
            bottom-0
            w-32
            bg-gradient-to-r
            from-white
            to-transparent
            z-10
            pointer-events-none
          "
        />

        {/* Right fade */}

        <div
          className="
            absolute
            right-0
            top-0
            bottom-0
            w-32
            bg-gradient-to-l
            from-white
            to-transparent
            z-10
            pointer-events-none
          "
        />

        {/* Moving Logos */}

        <motion.div
          className="flex items-center w-max"
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {scrollingLogos.map((logo, index) => (

            <div
              key={index}
              className="
                flex
                items-center
                justify-center
                min-w-[260px]
                mx-8
              "
            >

              <img
                src={logo.src}
                alt={logo.alt}
                className="
                  h-20
                  max-w-[190px]
                  object-contain
                  opacity-75
                  hover:opacity-100
                  hover:scale-110
                  transition-all
                  duration-300
                "
              />

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}

export default SupportedBy;