import React from 'react'

const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantaidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <div className='contenedor contenedor-presupuesto sombra dos-columnas'>
            <div>
                <p>Grafica</p>
            </div>

            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span>{formatearCantaidad(presupuesto)}
                </p>
                <p>
                    <span>Disponible: </span>{formatearCantaidad(0)}
                </p>
                <p>
                    <span>Gastado: </span>{formatearCantaidad(0)}
                </p>
            </div>
        </div>
    )
}

export default ControlPresupuesto