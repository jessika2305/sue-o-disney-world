import '../styles/Hero.css'
import heroImg from '../assets/hero.png'
import {Link} from 'react-router-dom'
function Hero() {
  return (
    <div>
      <main>
         <section className="hero">
            <img src={heroImg} alt="castillo"/>
           <div className="hero-text">
             <h1>Sueño Disney</h1>
            <p>Tu guía mágica para vivir la experiencia completa</p>   
             <Link to="/planear" className="btn btn-primary">Planear mi viaje</Link>
           </div>
        </section>
    </main>
    </div>
  )
}

export default Hero
