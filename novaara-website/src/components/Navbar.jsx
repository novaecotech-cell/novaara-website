import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "About",
    "Technology",
    "Products",
    "Impact",
    "Contact",
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-3 md:px-6 pt-3 md:pt-5">

          <div
            className={`transition-all duration-500 rounded-full flex justify-between items-center px-8 ${
              scrolled
                ? "h-20 md:h-20 bg-white/75 backdrop-blur-2xl shadow-xl border border-white/30"
                : "h-16 md:h-24 bg-transparent"
            }`}
          >

            {/* Logo */}

            <Link
              to="home"
              smooth={true}
              duration={700}
              className="cursor-pointer flex items-center gap-4"
            >
              <img
                src={logo}
                alt="Novaara"
                className="w-14 h-14 object-contain"
              />

              <div>

                <h1
                  className={`text-3xl font-bold tracking-wide transition ${
                    scrolled ? "text-green-900" : "text-white"
                  }`}
                  style={{ fontFamily: "Playfair Display" }}
                >
                  Novaara
                </h1>

                <p
                  className={`text-sm transition ${
                    scrolled ? "text-gray-600" : "text-gray-200"
                  }`}
                >
                  Ecotechnologies
                </p>

              </div>

            </Link>

            {/* Desktop Navigation */}

            <div className="hidden lg:flex items-center gap-12">

              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  spy={true}
                  activeClass="text-green-700"
                  className={`cursor-pointer relative text-lg font-medium transition group ${
                    scrolled
                      ? "text-gray-800"
                      : "text-white"
                  }`}
                >
                  {item}

                  <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>

                </Link>
              ))}

            </div>


            {/* Mobile */}

            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X
                  className={
                    scrolled
                      ? "text-black"
                      : "text-white"
                  }
                />
              ) : (
                <Menu
                  className={
                    scrolled
                      ? "text-black"
                      : "text-white"
                  }
                />
              )}
            </button>

          </div>

        </div>
      </motion.nav>

      {/* Mobile Menu */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: .4 }}
            className="fixed top-0 right-0 w-80 h-screen bg-white z-50 shadow-2xl"
          >

            <div className="flex justify-end p-8">

              <button
                onClick={() => setMenuOpen(false)}
              >
                <X size={30} />
              </button>

            </div>

            <div className="px-10 pt-6 flex flex-col gap-8">

              {navItems.map((item) => (

                <Link
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-2xl font-semibold text-gray-700 cursor-pointer hover:text-green-700"
                >
                  {item}
                </Link>

              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}

export default Navbar;