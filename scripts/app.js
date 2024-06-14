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

 // ------------------------Notificación Badge--------------------------
 const contadorB = document.getElementById('contadorBadge');
 let contador = 0;
 
 function notificarCompras() {
   contadorB.textContent = contador;
   if (contador == 0) {
    contadorB.style.display = 'none';
  } else {
    contadorB.style.display = 'block';
  }
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

      contador++;
      console.log(contador);
      notificarCompras()
    } else {
      

      contador--;
      console.log(contador);
      notificarCompras()
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
const catCafe = document.getElementById('catCafe');
const catPostres = document.getElementById('catPostres');
const catDesayunos = document.getElementById('catDesayunos');
const cards = document.querySelectorAll('.carta');



btnCategorias.forEach(function (boton) {
  boton.addEventListener('click', function () {
     if (boton.classList.contains('seleccionado')) {

      boton.classList.remove('seleccionado'); 
      cards.forEach(function (card) { card.classList.remove('estadoOculto');}); 

    }else{
      
      btnCategorias.forEach(function (btn) {
      btn.classList.remove('seleccionado');});

      boton.classList.add('seleccionado');
      cards.forEach(function (card) { card.classList.add('estadoOculto'); 
        
        if (catCafe.classList.contains('seleccionado')) {

          cards.forEach(function (card) { 
            if(card.classList.contains('cafe')){
              card.classList.remove('estadoOculto')
            } });  
         
        } else if (catPostres.classList.contains('seleccionado')) {
          cards.forEach(function (card) { 
            if(card.classList.contains('postre')){
              card.classList.remove('estadoOculto')
            } });  
          
        } else if (catDesayunos.classList.contains('seleccionado')) {
          
          cards.forEach(function (card) { 
            if(card.classList.contains('desayuno')){
              card.classList.remove('estadoOculto')
            } });  

        
        };
      });     
      
    }
    
  });

});


