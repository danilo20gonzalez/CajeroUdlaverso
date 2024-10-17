function mostrarVentana(tipo) {
    if (tipo === 'cultivos') {
        window.location.href = 'Cultivos.html'; // Redirige a la página de cultivos
    } else if (tipo === 'animales') {
        window.location.href = 'Animales.html'; // Redirige a la página de animales
    }
}