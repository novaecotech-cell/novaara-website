import { Helmet } from "react-helmet-async";

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SupportedBy from "./components/SupportedBy";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PaperBags from "./pages/PaperBags";
import TechnologyPage from "./pages/TechnologyPage";

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    const scrollTarget = new URLSearchParams(
      location.search
    ).get("scrollTo");

    if (!scrollTarget) return;

    const timer = setTimeout(() => {
      const element = document.getElementById(scrollTarget);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <Helmet>
        <title>
          Novaara Ecotechnologies | Paper Bags from Textile Waste
        </title>

        <meta
          name="description"
          content="Novaara Ecotechnologies develops tree-free paper and sustainable packaging from textile waste and fallen leaves."
        />

        <link
          rel="canonical"
          href="https://www.novaaraecotech.com/"
        />

        <meta
          property="og:title"
          content="Novaara Ecotechnologies | Sustainable Packaging from Waste"
        />

        <meta
          property="og:description"
          content="Tree-free paper and sustainable packaging engineered from textile waste and fallen leaves."
        />

        <meta
          property="og:url"
          content="https://www.novaaraecotech.com/"
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <Navbar />
      <Hero />
      <About />
      <SupportedBy />
      <Products />
      <Technology />
      <Impact />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollHandler />
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/paper-bags"
          element={
            <>
              <Navbar />
              <PaperBags />
              <Footer />
            </>
          }
        />

        <Route
          path="/technology"
          element={
            <>
              <Navbar />
              <TechnologyPage />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;