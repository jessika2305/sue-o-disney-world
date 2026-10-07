import {Link} from 'react-router-dom'
import '../styles/Experiencias.css'

function Experiencias() {
  return (
        // Sección de alojamientos
      <main>
        <h1>Experiencias</h1>
        <section className="cards">
            <h2>Alojamientos</h2>
            <div className="card">
                <img src="/img/cards/disneyNewport.jpg" alt="Hotel en Disney"/>
                <h3>Disney Newport Bay Club</h3>
                <p>Hospédate en un lugar lleno de magia.</p>
                <Link to="/reserva" className="btn btn-secondary">Reservar</Link>
            </div>
            <div className="card">
                <img src="/img/cards/Disneylandhotel.jpg" alt="Hotel"/>
                <h3>Disneyland Hotel</h3>
                <p>Hospédate rodeado de fantasía, comodidad y la esencia Disney.</p>
                <Link to="/reserva" className="btn btn-secondary">Reservar</Link>
            </div>
        </section>
        <section className="cards">
            <h2>Parques</h2>
            <div className="card">
                <img src="/img/cards/parqueadventure.jpg" alt="Parque adventure"/>
                <h3>Parque Adventure</h3>
                <p>Embárcate en un viaje lleno de atracciones, espectáculos y aventuras mágicas que te harán vivir momentos inolvidables.</p>
                <Link to="/reserva" className="btn btn-secondary">Reservar</Link>
            </div>
            <div className="card">
                <img src="/img/cards/parquedisneyland.avif" alt="Parque disneyland"/>
                <h3>Parque Disneyland</h3>
                <p>El parque más emblemático, donde los sueños se hacen realidad entre castillos, personajes inolvidables y espectáculos llenos de magia.</p>
                <Link to="/reserva" className="btn btn-secondary">Reservar</Link>
            </div>
        </section>
        
    </main>
  )
}

export default Experiencias
