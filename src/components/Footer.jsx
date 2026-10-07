import '../styles/Footer.css'
import instagramImg from '../assets/instagram.png'
import facebookImg from '../assets/facebook.png'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer>
         <nav className="nav-footer">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/experiencias">Experiencias</Link></li>
                <li><Link to="/planear">Planear</Link></li>
                <li><Link to="/reserva">Reserva</Link></li>
            </ul>
         </nav>
         {/* Íconos de redes sociales con enlaces externos */}
            <div className="footer-social">
        <a href="#" target='_blank' rel='noopener noreferrer' aria-label='Abrir Instagram'  > <img src={instagramImg} alt="instagram"/></a>
        <a href="#" target='_blank' rel='noopener noreferrer' aria-label='Abrir Fcebook'> <img src={facebookImg}  alt="facebook"/></a>
            </div>
        <div className="copyright">
            <p>&copy; 2026 Sueño Disney. Todos los derechos reservados.</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
