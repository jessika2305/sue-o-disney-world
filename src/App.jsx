
import {Routes, Route } from 'react-router-dom'
import './styles/Global.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Footer from './components/Footer.jsx'
import Experiencias from './components/Experiencias.jsx'
import Galeria from './components/Galeria.jsx'
import Reserva from './components/Reserva.jsx'
import PlanearViaje from './components/PlanearViaje.jsx'


function App() {

  return (
    <>

    <Navbar />
      {/* Ruta principal: muestra el Hero */}
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/galeria" element={<Galeria />} />
      <Route path="/experiencias" element={<Experiencias />} />
      <Route path="/reserva" element={<Reserva />} />
      <Route path="/planear" element={<PlanearViaje />} />
      
    </Routes>
    
    <Footer />
    
    </>
  )
}

export default App
