 // JavaScript para desplazarse suavemente hacia la parte superior de la página
 document.querySelector('.up a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('logo').scrollIntoView({
        behavior: 'smooth'
    });
});

// JavaScript para mostrar/ocultar el botón según la posición de desplazamiento
window.addEventListener('scroll', function() {
    var upButton = document.querySelector('.up');
    if (window.scrollY > 100) {
        upButton.classList.remove('hidden');
    } else {
        upButton.classList.add('hidden');
    }
});

// Ocultar el botón inicialmente si la página está ya en la parte superior
if (window.scrollY === 0) {
    document.querySelector('.up').classList.add('hidden');
}