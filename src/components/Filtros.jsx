import { useState, useEffect } from 'react'

const Filtros = ({ filtro, setFiltro }) => {
    return (
        <div className='contenedor sombra filtros'>
            <form>
                <div className='campo'>
                    <label>Filtrar Gastos</label>
                    <select value={filtro} onChange={e => setFiltro(e.target.value)}>
                        <option value="">-- Todos --</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="salud">Salud</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros