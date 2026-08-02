import emailjs from "@emailjs/browser";

export const sendEmail = async (formData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE,
    import.meta.env.VITE_EMAILJS_TEMPLATE,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC
  );
};