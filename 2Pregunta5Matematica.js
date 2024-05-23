// Realizado por Erick Gael y Jesus Manuel
document.getElementById('texto').innerHTML = "A el príncipe le faltaba un problema para terminar el examen. El problema era el siguiente: ¿Cuál es la suma de los primeros 10 números naturales?";

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {
  // Verificar el valor de texto utilizando una estructura condicional if-else.
  if (texto === 'Texto 3') {
    // Si texto es igual a 'Texto 3':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de éxito con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página 'MISION_MATEMATICAS.html'
    // y se llama a la función sumarPuntos(10) para sumar 10 puntos.
    Swal.fire({
      title: 'Has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      window.location.href = 'MISION_MATEMATICAS.html';
      sumarPuntos(10);
    });
  } else {
    // Si texto no es igual a 'Texto 3':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de error con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página 'MISION_MATEMATICAS.html'
    // y se llama a la función restarPuntos(10) para restar 10 puntos.
    Swal.fire({
      title: 'Has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      window.location.href = 'MISION_MATEMATICAS.html';
      restarPuntos(10);
    });
  }
}
