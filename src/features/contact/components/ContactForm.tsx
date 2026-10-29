import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import apartmentsData from "../../../../public/data/apartments.json";
import type { ContactFormType } from "../types/contactForm";

const ContactForm = () => {
  const [searchParams] = useSearchParams();
  const apartmentName = searchParams.get("apartment") ?? "";
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    defaultValues: {
      apartment: apartmentName,
    },
  });

  function onSubmit(data: ContactFormType) {
    console.log(data);
    setIsSubmitted(true);
  }

  return (
    <main className="contact-form-card">
      {isSubmitted ? (
        <div className="success-card">
          <h3>¡Solicitud Enviada con Éxito!</h3>
          <p>
            Información recibida con éxito. Un asesor especializado se
            comunicará con usted a la brevedad para brindarle atención
            personalizada.
          </p>
          <button
            type="button"
            className="btn-gold contact-form__submit"
            onClick={() => setIsSubmitted(false)}
          >
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <>
          <h2>Envíe su consulta</h2>
          <p className="form-subtitle">Complete los campos obligatorios.</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="contact-form__field">
              <label htmlFor="name">Nombre completo</label>
              <input
                id="name"
                type="text"
                placeholder="Digite su nombre"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="contact-form__error">
                  El nombre es obligatorio
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="contact-form__error">
                  El correo es obligatorio
                </span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                type="tel"
                placeholder="+506 0000-0000"
                {...register("phone")}
              />
            </div>

            <div className="contact-form__field">
              <label htmlFor="apartment">Apartamento de interés</label>
              <select id="apartment" {...register("apartment")}>
                <option value="">Seleccione un apartamento</option>
                {apartmentsData.map((apt) => (
                  <option key={apt.id} value={apt.name}>
                    {apt.name} - ${apt.price}/mes
                  </option>
                ))}
              </select>
            </div>

            <div className="contact-form__field contact-form__field--wide">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                placeholder="Cuéntenos qué desea saber sobre la residencia..."
                rows={5}
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="contact-form__error">
                  El mensaje es obligatorio
                </span>
              )}
            </div>

            <button className="btn-gold contact-form__submit" type="submit">
              Enviar consulta
            </button>
          </form>
        </>
      )}
    </main>
  );
};

export default ContactForm;
