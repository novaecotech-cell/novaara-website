import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", type: "home" },
    { label: "About", type: "scroll", target: "about" },
    { label: "Impact", type: "scroll", target: "impact" },
    { label: "Contact", type: "scroll", target: "contact" },
    { label: "Technology", type: "page", target: "/technology" },
    { label: "Products", type: "page", target: "/paper-bags" },
  ];

  const handleScrollNavigation = (target) => {
    setMenuOpen(false);

    if (location.pathname === "/") {
      document.getElementById(target)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate(`/#${target}`);

      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

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

            {/* LOGO */}

            <RouterLink
              to="/"
              className="cursor-pointer flex items-center gap-4"
              onClick={() => setMenuOpen(false)}
            >
              <img
                src={logo}
                alt="Novaara Ecotechnologies"
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
            </RouterLink>


            {/* DESKTOP NAVIGATION */}

            <div className="hidden lg:flex items-center gap-10">

              {navItems.map((item) => {

                if (item.type === "home") {
                  return (
                    <RouterLink
                      key={item.label}
                      to="/"
                      className={`cursor-pointer text-lg font-medium transition ${
                        scrolled ? "text-gray-800" : "text-white"
                      }`}
                    >
                      {item.label}
                    </RouterLink>
                  );
                }

                if (item.type === "page") {
                  return (
                    <RouterLink
                      key={item.label}
                      to={item.target}
                      className={`cursor-pointer text-lg font-medium transition ${
                        scrolled ? "text-gray-800" : "text-white"
                      }`}
                    >
                      {item.label}
                    </RouterLink>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => handleScrollNavigation(item.target)}
                    className={`cursor-pointer text-lg font-medium transition ${
                      scrolled ? "text-gray-800" : "text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}

            </div>


            {/* MOBILE MENU BUTTON */}

            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X
                  className={
                    scrolled ? "text-black" : "text-white"
                  }
                />
              ) : (
                <Menu
                  className={
                    scrolled ? "text-black" : "text-white"
                  }
                />
              )}
            </button>

          </div>
        </div>
      </motion.nav>


      {/* MOBILE MENU */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-80 h-screen bg-white z-50 shadow-2xl"
          >

            <div className="flex justify-end p-8">
              <button onClick={() => setMenuOpen(false)}>
                <X size={30} />
              </button>
            </div>

            <div className="px-10 pt-6 flex flex-col gap-8">

              {navItems.map((item) => {

                if (item.type === "page" || item.type === "home") {
                  return (
                    <RouterLink
                      key={item.label}
                      to={item.type === "home" ? "/" : item.target}
                      onClick={() => setMenuOpen(false)}
                      className="text-2xl font-semibold text-gray-700 hover:text-green-700"
                    >
                      {item.label}
                    </RouterLink>
                  );
                }

                return (
                  <button
                    key={item.label}
                    onClick={() => handleScrollNavigation(item.target)}
                    className="text-2xl font-semibold text-gray-700 text-left hover:text-green-700"
                  >
                    {item.label}
                  </button>
                );
              })}

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;