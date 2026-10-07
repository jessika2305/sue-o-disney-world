 import '../styles/Navbar.css'
 import DisneyLogo from '../assets/disney.png'
 import {Link} from 'react-router-dom'
 
// Componente Navbar: barra de navegación principal con enlaces a las páginas

 function Navbar() {
   return (
     <div>
       <nav>
           
            <img src= {DisneyLogo} alt= "Disney Logo"  className="logo"/>

             <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/experiencias">Experiencias</Link></li>
                <li><Link to="/planear">Planear</Link></li>
                <li><Link to="/reserva">Reserva</Link></li>
            </ul>
        </nav>
     </div>
   )
 }
 
 export default Navbar
 