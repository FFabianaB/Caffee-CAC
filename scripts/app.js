//-------------------- Up Botón---------------------------
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

// ----------------------Boton comprar y alerta---------------------------
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

document.querySelectorAll('.iconbuy').forEach(function (button) {
  button.addEventListener('click', function () {
    button.classList.toggle('red');
    if (button.classList.contains('red')) {
      showAlert(button, 'Item agregado al carrito!', 'success');
    } else {
      console.log("Acción revertida");
    }
  });
});

function showAlert(button, message, type) {
  // ID único basado en el timestamp actual
  const alertId = 'alert-' + Date.now(); 
  const alertHTML = `
    <div id="${alertId}" class="alert alert-${type} alert-dismissible" role="alert" style="position: absolute; transform:translateX(-57px)translateY(-57px);">
      ${message}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;
  button.insertAdjacentHTML('afterend', alertHTML);

  // Eliminar la alerta después de 1 segundo
  setTimeout(() => {
    const alertElement = document.getElementById(alertId);
    if (alertElement) {
      alertElement.remove();
    }
  }, 1000); // 1000 ms = 1 segundo
}

// -------------------Categorias---------------------------------
const btnCategorias = document.querySelectorAll('.navBusquedaBtn');
const catCafe = document.getElementsByClassName('catCafe');
const catPostres = document.getElementsByClassName('catPostres');
const catDesayunos = document.getElementsByClassName('catDesayunos');
const cards = document.querySelectorAll('.carta');

btnCategorias.forEach(function (boton) {
  boton.addEventListener('click', function () {
    // Cuando clikeo un boton: SI contiene la clase SELECCIONADO la toggle
    // SINO agrega la clase SELECCIONADO y la elimina de los demás botones    

    if (boton.classList.contains('seleccionado')) {

      boton.classList.remove('seleccionado');
      cards.forEach(function (card) { card.classList.remove('estadoOculto');}); 

    }else{
      
      btnCategorias.forEach(function (btn) {
      btn.classList.remove('seleccionado');});

      boton.classList.add('seleccionado');
      cards.forEach(function (card) { card.classList.add('estadoOculto'); });     
      
    }
    
  });

});


// if (cards.classList.contains('catCafe')) {
//   cards.forEach(function (card) { card.classList.add('estadoOculto'); });
//   if (card.classList.contains('catCafe')) {
//     card.classList.remove('estadoOculto');
//    }

// } else if (boton.classList.contains('catPostres')) {
//   cards.forEach(function (card) {
//     card.classList.add('estadoOculto');
//   });
// } else if (boton.classList.contains('catDesayunos')) {
//   cards.forEach(function (card) {
//     card.classList.add('estadoOculto');
//   });
// };