import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    from_name: "",
    company: "",
    from_email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
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
        setSuccess("Thank you! Your enquiry has been sent.");

        setForm({
          from_name: "",
          company: "",
          from_email: "",
          phone: "",
          interest: "",
          message: "",
        });

        setLoading(false);
      })
      .catch((err) => {
        console.log(err);

        setSuccess("Something went wrong. Please try again.");

        setLoading(false);
      });
  };

  return (
    <section
      id="contact"
      className="bg-[#F7F6F2] py-20"
    >
      <div className="max-w-6xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[4px] text-green-700 font-semibold">
              Contact
            </p>

            <h2
              className="mt-4 text-5xl font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Let's Build
              <br />
              Together
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Whether you're looking for sustainable packaging,
              collaboration opportunities or wish to know more
              about Novaara, we'd love to hear from you.
            </p>

            <div className="mt-10 space-y-3 text-gray-700">

              <p>
                📧 novaecotech@gmail.com
              </p>

              <p>
                📞 +91 9345211524
              </p>
                
              <p>
                📍 Madurai, India
              </p>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg p-8 space-y-5"
          >

            <input
              name="from_name"
              placeholder="Full Name"
              value={form.from_name}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="company"
              placeholder="Company"
              value={form.company}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              name="from_email"
              placeholder="Business Email"
              value={form.from_email}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />

            <input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            />

            <select
              name="interest"
              value={form.interest}
              onChange={handleChange}
              className="w-full border rounded-xl px-4 py-3"
            >
              <option>Paper Bags</option>
              <option>Product Catalogue</option>
              <option>Research Partnership</option>
              <option>Investment</option>
              <option>General Enquiry</option>
            </select>

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full border rounded-xl px-4 py-3"
            />

            <button
              disabled={loading}
              className="w-full bg-green-700 hover:bg-green-800 text-white py-4 rounded-full transition"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>

            {success && (
              <p className="text-center text-green-700">
                {success}
              </p>
            )}

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;