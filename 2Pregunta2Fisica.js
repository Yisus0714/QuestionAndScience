// Realizado por Erick Gael y Jesus Manuel

// Cambia el contenido del elemento con ID "texto" por el texto de la pregunta
document.getElementById('texto').innerHTML = "Todo estaba bien hasta que Osash arroja una <br> flecha hacia arriba y luego cae libremente <br>  asustando a todos sus amigos, <br> ¿cuál de las siguientes afirmaciones es <br> correcta acerca de su velocidad  en <br> el punto más alto de su trayectoria?"

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
      window.location.href = '2Pregunta3Fisica.html';
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
      window.location.href = '2Pregunta3Fisica.html';
      // Llama a la función restarPuntos(10) para restar puntos
      restarPuntos(10);
    });
  }
}
