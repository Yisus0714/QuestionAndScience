// Realizado por Erick Gael y Jesus Manuel

// Cambia el contenido del elemento con ID "texto" por el texto de la pregunta
document.getElementById('texto').innerHTML = "Osash se ofrece llevar al aldeano en su carreta <br> cuando se percata que mientras <br> más áspero es el terreno, <br> más le cuesta avanzar. <br> ¿Qué tipo de fuerza se opone <br> al movimiento de la carreta?"

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {
  if (texto === 'Texto 2') {
    // Ventana emergente para el caso "Texto 2"
    Swal.fire({
      title: 'has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      // Redirecciona a otra página después de cerrar la ventana emergente
      window.location.href = 'MISION_FISICA.html';
      // Llama a la función sumarPuntos(10) para agregar puntos
      sumarPuntos(10);
    });
  } else {
    // Ventana emergente para casos diferentes a "Texto 2"
    Swal.fire({
      title: 'has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Redirecciona a otra página después de cerrar la ventana emergente
      window.location.href = 'MISION_FISICA.html';
      // Llama a la función restarPuntos(10) para restar puntos
      restarPuntos(10);
    });
  }
}
