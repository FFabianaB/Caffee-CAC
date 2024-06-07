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


// // Selecciona todos los elementos con la clase .fa-heart
// var icono = document.querySelectorAll('.ikon');

// // Itera sobre cada icono la funcion like
// icono.forEach(function(clikear) {

//     // Agrega un evento de clickear
//     clikear.addEventListener("click", function() {
        
//         // Añade la clase 'red' al elemento que fue clickeado
//         var ai= document.getElementById('kokoro')
//         ai.classList.toggle('red');
//     })
//  });


// Elemento icono
const icono = document.querySelectorAll('.ikon');
// Elemento corazon
const corazon= document.querySelectorAll('.fa-heart');

// Para cada icono funcion like
corazon.forEach(function(like) {
    //  En icono escucha click
    like.addEventListener("click", function() {
        
        // agrega y quita clase red en 
        like.classList.toggle('red');
       
    })
 });