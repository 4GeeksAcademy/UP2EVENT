import { Link, useNavigate } from "react-router-dom";
import "../pages/Footer.css"

export const Footer = () => {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const rutaVistaHome = () => navigate("/");
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer__inner">
        {/* Fila superior */}
        <div className="footer__top">
          {/* Marca */}
          <div className="footer__brand">
            <div className="brand__logo" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="brand__icon">
                <path d="M7 4h10a2 2 0 0 1 2 2v10l-4 4H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm9 11V6H8v12h6l2-3Z"/>
              </svg>
            </div>
            <div>
              <p className="brand__title">Knect</p>
              <p className="brand__tag">Tu red de planes reales</p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="footer__nav" aria-label="Enlaces del sitio">
            <button className="btn btn--link" onClick={rutaVistaHome}>Home</button>
            <Link className="btn btn--link" to="/createevent">Crear evento</Link>
            <Link className="btn btn--link" to="/login">Login</Link>
            <Link className="btn btn--link" to="/register">Register</Link>
          </nav>

          {/* Autores (Youtube Shorts 9º video) */}
          <a
           
          >
            Hecho por Héctor, Sergio e Ismaín.
            <svg className="heart" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-7-4.534-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.466-7 10-7 10Z"/>
            </svg>
          </a>
        </div>

        {/* Fila inferior. Tik tok Codeximg */}
        <div className="footer__bottom">
          <p>© {year} Knect. Todos los derechos reservados.</p>
          <div className="footer__actions">
            <button className="btn" onClick={rutaVistaHome} aria-label="Ir a inicio">Home</button>
            <button className="btn" onClick={scrollTop} aria-label="Volver arriba">↑ Arriba</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
