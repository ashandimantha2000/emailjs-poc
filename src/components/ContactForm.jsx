import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent:", result.text);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message.");
    }
  };

  return (
    <form ref={formRef} onSubmit={sendEmail} className="contact-form">
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="form-input"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className="form-textarea"
        ></textarea>
      </div>

      <button type="submit" className="form-button">
        Send
      </button>
    </form>
  );
}
