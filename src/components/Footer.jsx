import '../styles/Footer.css'
import instagramImg from '../assets/instagram.png'
import facebookImg from '../assets/facebook.png'


function Footer() {
  return (
    <div>
      <footer>
         
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
