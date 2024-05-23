// Cambia el contenido del elemento con ID "texto" por el texto de la pregunta
document.getElementById('texto').innerHTML = "Osash solo le quedan 5 min para regresar <br> a su torre y descansar, <br> asi que hace un último experimento en el cual <br> necesita un gas inerte <br> para un experimento <br> ¿podrías enseñarle cual de estos es un gas inerte?";

// Obtiene el valor de los puntos del localStorage
var puntos = localStorage.getItem('Puntos');

// Función para mostrar el mensaje y realizar acciones según la opción seleccionada
function mostrarMensaje(texto) {
  if (texto === 'Texto 4') {
    // Ventana emergente mostrando que se han recolectado 10 monedas
    Swal.fire({
      title: 'has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      // Redirecciona a la siguiente página y suma 10 puntos
      window.location.href = 'MISION_QUIMICA.html';
      sumarPuntos(10);
    });
  } else {
    // Ventana emergente mostrando que se han perdido 10 monedas
    Swal.fire({
      title: 'has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Redirecciona a la siguiente página y resta 10 puntos
      window.location.href = 'MISION_QUIMICA.html';
      restarPuntos(10);
    });
  }
}
