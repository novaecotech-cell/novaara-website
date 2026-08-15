import { motion } from "framer-motion";
import {
  Trees,
  Recycle,
  Droplets,
  BriefcaseBusiness,
} from "lucide-react";

function Impact() {
  const impacts = [
    {
      icon: <Trees size={28} />,
      title: "Tree-Free Materials",
      description:
        "Reducing dependence on virgin wood by developing alternative fibre sources.",
    },
    {
      icon: <Recycle size={28} />,
      title: "Circular Economy",
      description:
        "Transforming waste into valuable packaging materials.",
    },
    {
      icon: <Droplets size={28} />,
      title: "Resource Efficient",
      description:
        "Designed to minimize water and energy consumption.",
    },
    {
      icon: <BriefcaseBusiness size={28} />,
      title: "Green Jobs",
      description:
        "Supporting sustainable livelihoods through waste recovery and circular manufacturing.",
    },
  ];

  return (
    <section
      id="impact"
      className="bg-[#081A12] py-16 md:py-20"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >

          <p className="uppercase tracking-[4px] text-green-400 font-semibold">

            Our Impact

          </p>

          <h2
            className="mt-3 text-3xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "Playfair Display" }}
          >
            Creating Better Packaging,
            <br />
            Not Bigger Footprints
          </h2>

          <p className="mt-5 text-gray-300 text-base md:text-lg leading-8">
            Every innovation at Novaara is designed to replace
            conventional materials with circular, sustainable
            alternatives that benefit businesses and the environment.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {impacts.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
                duration: 0.5,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="bg-[#11261B] rounded-2xl border border-white/10 p-6"
            >

              <div className="w-14 h-14 rounded-full bg-green-900/50 flex items-center justify-center text-green-400">

                {item.icon}

              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">

                {item.title}

              </h3>

              <p className="mt-3 text-gray-400 text-sm leading-7">

                {item.description}

              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Impact;