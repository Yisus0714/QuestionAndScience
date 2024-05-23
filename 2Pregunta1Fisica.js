// Realizado por Erick Gael y Jesus Manuel

// Accede al elemento llamado "Texto" para cambiar su contenido por el texto de la pregunta
document.getElementById('texto').innerHTML = "Un día Ohsas quedó temprano con sus amigos elfos <br> de la guardia real para aprender a disparar <br> flechas, <br> Osash tira una flecha horizontalmente <br> desde lo alto del castillo.<br>¿Qué afirmación describe  mejor <br> la trayectoria de la flecha después de ser lanzada?"

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {

  if (texto === 'Texto 4') {
    // Ventana emergente para el caso "Texto 4"
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
      window.location.href = '2Pregunta2Fisica.html';
      // Llama a la función sumarPuntos(10) para agregar puntos
      sumarPuntos(10);
    });
  } else {
    // Ventana emergente para casos diferentes a "Texto 4"
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
      window.location.href = '2Pregunta2Fisica.html';
      // Llama a la función restarPuntos(10) para restar puntos
      restarPuntos(10);
    });
  }
}