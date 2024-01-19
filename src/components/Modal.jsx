import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

  const [mensaje, setMensaje] = useState('');

  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [categoria, setCategoria] = useState('');

  const ocultarModal = () => {
    setAnimarModal(false)

    setTimeout(() => {
      setModal(false)
    }, 250);
  }

  const handleSubmit = e => {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')

      setTimeout(() => {
        setMensaje('')
      }, 3000);
      return
    }
    guardarGasto({ nombre, cantidad, categoria })
  }

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>

      <form onSubmit={handleSubmit} className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className='campo'>
          <label htmlFor="nombre">Nombre Gasto</label>
          <input type="text" id='nombre' placeholder='Añade el Nombre del Gasto' value={nombre} onChange={e => setNombre(e.target.value)} />
        </div>
        <div className='campo'>
          <label htmlFor="cantidad">Cantidad</label>
          <input type="number" id='cantidad' placeholder='Añade la Cantidad del Gasto: ej. 300' value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />
        </div>
        <div className='campo'>
          <label htmlFor="categoria">Categoria</label>
          <select id="categoria" value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value="" disabled hidden>-- Seleccionar --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="ocio">Ocio</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="salud">Salud</option>
            <option value="otros">Otros</option>
          </select>

          <input type="submit" value="Añadir Gasto" />
        </div>
      </form>
    </div>
  )
}

export default Modal