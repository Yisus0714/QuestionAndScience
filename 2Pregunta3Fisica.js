// Realizado por Erick Gael y Jesus Manuel

// Cambia el contenido del elemento con ID "texto" por el texto de la pregunta
document.getElementById('texto').innerHTML = "Después de acompañar a uno de sus amigos <br> con el curandero por el accidente de la flecha, <br> Osash se encontraba pensativo <br> jugando con una pelota, <br> tirándola hacia arriba y luego atrapándola, <br> cuando de pronto se pregunta <br> ¿Qué sucede con su energía cinética <br> a medida que la pelota asciende?"

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
      window.location.href = '2Pregunta4Fisica.html';
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
      window.location.href = '2Pregunta4Fisica.html';
      // Llama a la función restarPuntos(10) para restar puntos
      restarPuntos(10);
    });
  }
}
