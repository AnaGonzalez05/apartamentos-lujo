import { Link } from 'react-router-dom';
import '../styles/global.css';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Encuentra tu espacio <span>Lujoso y Cómodo</span>
          </h1>
          <p className="hero-subtitle">
            Para quienes buscan un estándar superior, nuestras residencias equilibran perfectamente un diseño audaz y moderno con la máxima comodidad.
          </p>
          <Link to="/contacto" className="btn-gold">
            Contactanos
          </Link>
        </div>
      </section>

      <section className="proposal-section">
        <div className="container">
          <h2 className="proposal-title">¿Por qué Aurélis?</h2>
          <div className="proposal-grid">
            
            <div>
              <h3>Zonas de Privilegio</h3>
              <p>Situadas en los enclaves de mayor prestigio en Costa Rica, nuestras residencias representan una categoría superior de bienestar. Seleccionamos cada coordenada pensando en quienes aprecian la verdadera exclusividad: vistas imponentes, conectividad con lo mejor de la ciudad y el refugio silencioso y privado que merece su día a día.</p>
            </div>

            <div>
              <h3>Diseños modernos y exclusivos</h3>
              <p>Nuestros apartamentos van más allá de lo común. Diseñamos espacios abiertos, con líneas limpias y ventanales pensados para que la luz natural sea la protagonista. Elegimos cada detalle y material con mucho cuidado para transmitir paz y comodidad. Es un diseño moderno, único y sofisticado, hecho para quienes disfrutan de las cosas buenas.</p>
            </div>

            <div>
              <h3>Atención personalizada</h3>
              <p>"Nos comprometemos a brindarle un servicio de asesoría exclusivo y a la altura de sus expectativas. Le invitamos a iniciar una conversación privada mediante una llamada telefónica o vía correo electrónico. Nuestro equipo de asesores especializados evaluará minuciosamente su perfil, objetivos de inversión y estilo de vida, con el propósito de diseñar una propuesta a su medida y presentarle únicamente las opciones que representen el estándar ideal para usted.</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}