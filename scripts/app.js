// Up Botón
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.up a').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('logo').scrollIntoView({
      behavior: 'smooth',
    });
  });
});

// Mostrar/ocultar el botón según la posición de desplazamiento
window.addEventListener('scroll', function () {
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
// -------------------like en productos-------------------

// Seleccionar todos los iconos
const iconos = document.querySelectorAll('.ikon');

// Iterar sobre cada icono
iconos.forEach(function (icono) {
  // Agregar un evento de clic a cada icono
  icono.addEventListener('click', function () {
    // Seleccionar el corazón dentro del icono actual
    const corazon = icono.querySelector('.fa-heart');
    corazon.classList.toggle('red');
  });
});

const buyIcon = document.querySelectorAll('.iconbuy');
buyIcon.forEach(function (like) {
  //  En icono escucha click
  like.addEventListener('click', function () {
    // agrega y quita clase red en
    like.classList.toggle('red');

   
  });
});

// ------------------------------------------------------------
const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
const alertTriggers = document.querySelectorAll('.liveAlertBtn');


// funcion que
appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  const alertId = 'alert-' + Date.now(); // ID único basado en el timestamp actual
  wrapper.setAttribute('id', alertId); // Asignar el ID único al wrapper
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');

  alertPlaceholder.append(wrapper);

  // Eliminar el cartel después de 1 segundo
  setTimeout(() => {
    const alertToRemove = document.getElementById(alertId);
    if (alertToRemove) {
      alertToRemove.remove();
    }
  }, 1000); // 1000 ms = 1 segundo
};


alertTriggers.forEach((alertTrigger) => {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Item agregado al carrito!', 'success');
  });
});




// --------------------------------------------------------
// const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
// const appendAlert = (message, type) => {
//   const wrapper = document.createElement('div')
//   const alertId = 'alert-' + Date.now(); // ID único basado en el timestamp actual
//   wrapper.setAttribute('id', alertId); // Asignar el ID único al wrapper
//   wrapper.innerHTML = [
//     `<div class="alert alert-${type} alert-dismissible" role="alert">`,
//     `   <div>${message}</div>`,
//     '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
//     '</div>'
//   ].join('')

//   alertPlaceholder.append(wrapper)

//   // Eliminar el cartel después de 1 segundo
//   setTimeout(() => {
//     const alertToRemove = document.getElementById(alertId);
//     if (alertToRemove) {
//       alertToRemove.remove();
//     }
//   }, 1000); // 1000 ms = 1 segundo
// };

// -----------------------------------------------------------------

// const alertTriggers = document.querySelectorAll('.liveAlertBtn');
// alertTriggers.forEach(alertTrigger => {
//   alertTrigger.addEventListener('click', () => {
//     appendAlert('Item agregado al carrito!', 'success');
//   });
// });
