// Realizado por Erick Gael y Jesus Manuel

// Cambia el contenido del elemento con ID "texto" por el texto de la pregunta
document.getElementById('texto').innerHTML = "Durante una presentación en el bosque <br>hecha por Osash,<br> se le informa a este que la fuente de <br> agua del reino se ha contaminado <br> ¿Qué compuesto puede utilizar <br> Osash para limpiarla y regresar a su presentación?"

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {
  if (texto === 'Texto 1') {
    // Ventana emergente para el caso "Texto 1"
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
      window.location.href = '2Pregunta2Quimica.html';
      // Llama a la función sumarPuntos(10) para agregar puntos
      sumarPuntos(10);
    });
  } else {
    // Ventana emergente para casos diferentes a "Texto 1"
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
      window.location.href = '2Pregunta2Quimica.html';
      // Llama a la función restarPuntos(10) para restar puntos
      restarPuntos(10);
    });
  }
}
