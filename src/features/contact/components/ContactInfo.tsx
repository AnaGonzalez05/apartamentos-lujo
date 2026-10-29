const ContactInfo = () => {
  return (
    <div className="contact-copy">
      <p className="eyebrow">Contacto Exclusivo</p>
      <h1>Conversemos sobre su próxima residencia</h1>
      <p className="contact-description">
        Por favor, ingrese sus datos y nos comunicaremos con usted de inmediato.
        Un experto de nuestra firma le atenderá de manera estrictamente
        personalizada.
      </p>

      <div className="contact-details">
        <div className="contact-detail-item">
          <strong>Oficina Principal</strong>
          <br />
          Escazú, San José, Costa Rica
        </div>
        <div className="contact-detail-item">
          <strong>Atención Telefónica</strong>
          <br />
          +506 2200-0000
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
