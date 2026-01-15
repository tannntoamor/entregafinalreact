import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section className="not-found">
      <h2>404 - Página no encontrada</h2>
      <p>Ups, esta ruta no existe dentro de Tanto Amor.</p>
      <Link to="/">Volver al inicio</Link>
    </section>
  )
}

export default NotFound
