import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { X } from "lucide-react";

function CatalogueModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    from_name: "",
    company: "",
    from_email: "",
    phone: "",
    business_type: "",
    requirement: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendCatalogue = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC
      )
      .then(() => {
        alert("Catalogue request sent successfully!");

        setLoading(false);

        setForm({
          from_name: "",
          company: "",
          from_email: "",
          phone: "",
          business_type: "",
          requirement: "",
          message: "",
        });

        onClose();
      })
      .catch((err) => {
        console.log(err);

        alert("Something went wrong.");

        setLoading(false);
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl w-[95%] max-w-5xl max-h-[92vh] overflow-y-auto p-6 sm:p-8 lg:p-12"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute top-5 right-5"
            >
              <X />
            </button>

            <h2
              className="text-3xl sm:text-4xl lg:text-6xl"
              style={{ fontFamily: "Playfair Display" }}
            >
              Request Product Catalogue
            </h2>

            <p className="mt-3 text-base sm:text-lg text-gray-600">
              Fill in your details and our team will get back to you with product specifications and pricing information.
            </p>

            <form
              onSubmit={sendCatalogue}
              className="mt-8 px-2 space-y-5"
            >
              <input
                required
                name="from_name"
                placeholder="Full Name"
                value={form.from_name}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 w-[430px] focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                name="company"
                placeholder="Company Name"
                value={form.company}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 w-[430px] focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                required
                type="email"
                name="from_email"
                placeholder="Business Email"
                value={form.from_email}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 w-[430px] focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                value={form.phone}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 w-[430px] focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
              <select
                name="business_type"
                value={form.business_type}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Business Type</option>
                <option>Restaurant</option>
                <option>Cafe</option>
                <option>Retail Store</option>
                <option>Boutique</option>
                <option>Corporate</option>
                <option>Distributor</option>
                <option>Manufacturer</option>
                <option>Other</option>
              </select>

              <select
                name="requirement"
                value={form.requirement}
                onChange={handleChange}
                className="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <option value="">Monthly Requirement</option>
                <option>Less than 1,000 bags</option>
                <option>1,000 – 5,000 bags</option>
                <option>5,000 – 10,000 bags</option>
                <option>10,000+ bags</option>
              </select>
            </div>
              <textarea
                rows="4"
                name="message"
                placeholder="Tell us about your requirement..."
                value={form.message}
                onChange={handleChange}
                className="mt-5 w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
              />

              <div className="flex justify-end gap-4 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 rounded-full border"
                >
                  Close
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
                >
                  {loading ? "Sending..." : "Request Catalogue"}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default CatalogueModal;