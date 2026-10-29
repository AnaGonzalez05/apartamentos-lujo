import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="container contact-page">
      <div className="contact">
        <ContactInfo />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;