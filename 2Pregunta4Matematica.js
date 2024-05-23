// Realizado por Erick Gael y Jesus Manuel
document.getElementById('texto').innerHTML = "Finalmente, la última tarea que se le otorgó a Osash era aplicar al príncipe un examen, ya que no había pasado con una buena calificación el anterior. En este examen venían algunos problemas, y el primero era la siguiente ecuación: “√(16) + 2^3”. ¿Qué debería contestar el príncipe?";

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {
  // Verificar el valor de texto utilizando una estructura condicional if-else.
  if (texto === 'Texto 2') {
    // Si texto es igual a 'Texto 2':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de éxito con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página '2Pregunta5Matematica.html'
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
      window.location.href = '2Pregunta5Matematica.html';
      sumarPuntos(10);
    });
  } else {
    // Si texto no es igual a 'Texto 2':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de error con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página '2Pregunta5Matematica.html'
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
      window.location.href = '2Pregunta5Matematica.html';
      restarPuntos(10);
    });
  }
}
