export const generarId = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

export const formatearFecha = (fecha) => {
    const fechaFormateada = new Date(fecha);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return fechaFormateada.toLocaleDateString('es-ES', options);
}