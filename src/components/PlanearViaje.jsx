import { useState } from 'react'
import '../styles/PlanearViaje.css'

// Componente Planear: formulario controlado para planificar un viaje
function Planear() {
  // Estado inicial del formulario
  const [datos, setDatos] = useState({
    nombre: '',
    apellido: '',
    mail: '',
    telefono: '',
    destino: '',
    fechaInicio: '',
    fechaFin: '',
    adultos: 1,
    menores: 0,
  })
  //  Maneja los cambios en los inputs y actualiza el estado
  const handleChange = (evento) => {
    setDatos({ ...datos, [evento.target.name]: evento.target.value })
    console.log(`Campo cambiado: ${evento.target.name} → ${evento.target.value}`)
  }
  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos enviados:', datos)
  }
  // Resetea el formulario a su estado inicial
  const handleReset = () => {
    setDatos({
      nombre: '',
      apellido: '',
      mail: '',
      telefono: '',
      destino: '',
      fechaInicio: '',
      fechaFin: '',
      adultos: 1,
      menores: 0,
    })
    console.log('Formulario reseteado')
  }

  return (
    <main>

      <h1>Planear viaje ✨</h1>
      <form className="Planear" onSubmit={handleSubmit} onReset={handleReset}>
        <label>
          Nombre:
          <input 
            type="text" 
            name="nombre" 
            value={datos.nombre} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Apellido:
          <input 
            type="text" 
            name="apellido" 
            value={datos.apellido} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Email:
          <input 
            type="email" 
            name="mail" 
            value={datos.mail} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Teléfono:
          <input 
            type="tel" 
            name="telefono" 
            value={datos.telefono} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Destino:
          <input 
            type="text" 
            name="destino" 
            value={datos.destino} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Fecha inicio:
          <input 
            type="date" 
            name="fechaInicio" 
            value={datos.fechaInicio} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Fecha fin:
          <input 
            type="date" 
            name="fechaFin" 
            value={datos.fechaFin} 
            onChange={handleChange} 
          />
        </label>

        <label>
          Adultos:
          <input 
            type="number" 
            name="adultos" 
            value={datos.adultos} 
            onChange={handleChange} 
            min="1" 
            max="9" 
          />
        </label>

        <label>
          Menores:
          <input 
            type="number" 
            name="menores" 
            value={datos.menores} 
            onChange={handleChange} 
            min="0" 
            max="9" 
          />
        </label>

        <button type="submit">Enviar</button>
        <button type="reset">Resetear</button>
      </form>
    </main>
  )
}

export default Planear
