 // JavaScript para desplazarse suavemente hacia la parte superior de la página
 document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.up a').addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('logo').scrollIntoView({
            behavior: 'smooth'
        });
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

 // JavaScript para desplazarse suavemente hacia la parte superior de la página
 document.querySelector('.up a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('logo').scrollIntoView({
        behavior: 'smooth'
    });
});

// -------------------like en productos-------------------

// Seleccionar todos los iconos
const iconos = document.querySelectorAll('.ikon');

// Iterar sobre cada icono
iconos.forEach(function(icono) {
    // Agregar un evento de clic a cada icono
    icono.addEventListener("click", function() {
        // Seleccionar el corazón dentro del icono actual
        const corazon = icono.querySelector('.fa-heart');
        corazon.classList.toggle('red');
        
    });
});

const buyIcon = document.querySelectorAll('.iconbuy');
buyIcon.forEach(function(like) {
    //  En icono escucha click
    like.addEventListener("click", function() {

        // agrega y quita clase red en 
        like.classList.toggle('red');

    })
 });