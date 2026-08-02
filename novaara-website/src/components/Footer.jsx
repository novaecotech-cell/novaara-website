

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-white">
              Novaara
            </h2>

            <p className="mt-6 leading-7">
              Engineering sustainable materials for a cleaner,
              greener, and circular future.
            </p>
        </div>
          
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p>
            © 2026 Novaara Ecotechnologies. All Rights Reserved.
          </p>

          <p className="mt-4 md:mt-0">
            Designed for a Sustainable Future
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;