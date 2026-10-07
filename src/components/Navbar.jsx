 import '../styles/Navbar.css'
 import DisneyLogo from '../assets/disney.png'
 import {Link} from 'react-router-dom'
 import {useState} from "react";
 
// Componente Navbar: barra de navegación principal con enlaces a las páginas

 function Navbar() {
   const [open, setOpen] = useState(false);

   return (
    <nav className="navbar">
      <div className="logo">Sueño Disney</div>
      <button className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </button>
           
            <img src= {DisneyLogo} alt= "Disney Logo"  className="logo"/>

             <ul className={open? "menu open" : "menu"}>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/galeria">Galeria</Link></li>
                <li><Link to="/experiencias">Experiencias</Link></li>
                <li><Link to="/planear">Planear</Link></li>
                <li><Link to="/reserva">Reserva</Link></li>
            </ul>
        </nav>
   )
 }
 
 export default Navbar
 