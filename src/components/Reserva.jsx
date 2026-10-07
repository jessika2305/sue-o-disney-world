
import '../styles/Reserva.css'


function Reserva() {
  return (
    

         <main>
        <h1>Reserva</h1>
    <section className="reserva">
        <form action="#" method="post">
    
    <fieldset>
        <legend>Datos  personales</legend>
                <label htmlFor="nombre">Nombre</label>
                <input id="nombre" type="text" name="nombre" required/>

                <label htmlFor="apellido">Apellido</label>
                <input id="apellido" type="text" name="apellido" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required placeholder="usuario@ejemplo.com"/>
    </fieldset>
               
    <fieldset>
        <legend>Datos de la reserva</legend>
            <label htmlFor="telefono">Telefono:</label>
            <input id="telefono" type="tel" name="telefono"  required placeholder="1134878888"/>

            <label htmlFor="fecha">Fecha:</label>
            <input id="fecha" type="date" name="fecha" min="2026-09-01" max="2030-09-01"/>

            <label htmlFor="adultos">Cantidad de adultos</label>
            <input id="adultos" type="number" name="adultos" min="1" max="9"/>

            <label htmlFor="menores">Menores de 10 años</label>
            <input id="menores" type="number" name="menores" min="0" max="9"/>
    </fieldset> 
     <fieldset>
        <legend>Tipo de experiencia:</legend>
                <label htmlFor="alojamiento">Alojamiento</label>
                <input id="alojamiento" type="radio" name="tipo-experiencia" value="alojamiento"/>

                <label htmlFor="entrada">Entrada</label>
                <input id="entrada" type="radio" name="tipo-experiencia" value="entrada"/>

                <label htmlFor="actividad-especial">Actividad especial</label>
                <input id="actividad-especial" type="radio" name="tipo-experiencia" value="actividad-especial"/>

                <label htmlFor="comentarios">Comentarios:</label>
                <textarea id="comentarios" name="comentarios" rows="4" cols="50" placeholder="Escribe aquí tus comentarios..."></textarea>
    </fieldset>
          <button type="submit">Reservar</button>  
          <button type="reset">Resetear</button>
        </form>
    </section>
    </main>

     
  )
}

export default Reserva
