import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import heroImage from "../assets/hero.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-[#08130F]"
    >
      {/* Background Image */}
      <motion.img
        src={heroImage}
        alt="Sustainable packaging materials made from wood-free paper developed by Novaara"
        loading="eager"
        fetchPriority="high"
        decoding="async"
        animate={{
          scale: [1, 1.05, 1],
          x: [0, -15, 0],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07160f]/90 via-[#07160f]/55 to-transparent" />

      {/* Animated Green Glow */}
      <motion.div
        animate={{
          opacity: [0.15, 0.35, 0.15],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-48 top-0 w-[700px] h-[700px] rounded-full bg-green-500 blur-[180px]"
      />

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [-25, 25, -25],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute rounded-full bg-green-300"
            style={{
              width: 4,
              height: 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <HeroContent />
    </section>
  );
}

export default Hero;