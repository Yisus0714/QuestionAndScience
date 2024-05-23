// Cambia el contenido del elemento con ID "texto" por el texto de la pregunta
document.getElementById('texto').innerHTML = "Osash tan atareado en su laboratorio <br> se ha encontrado un bote por debajo <br> de uno de los estantes, <br> este venia con una etiqueta que marca <br> “Cu” pero no recuerda lo que significa <br> ¿puedes ayudar a identificarlo?";

// Obtiene el valor de los puntos del localStorage
var puntos = localStorage.getItem('Puntos');

// Función para mostrar el mensaje y realizar acciones según la opción seleccionada
function mostrarMensaje(texto) {
  if (texto === 'Texto 2') {
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
      // Redirecciona a la siguiente pregunta y suma 10 puntos
      window.location.href = '2Pregunta5Quimica.html';
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
      // Redirecciona a la siguiente pregunta y resta 10 puntos
      window.location.href = '2Pregunta5Quimica.html';
      restarPuntos(10);
    });
  }
}
