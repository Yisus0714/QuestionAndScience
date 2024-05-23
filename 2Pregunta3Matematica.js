// Realizado por Erick Gael y Jesus Manuel
document.getElementById('texto').innerHTML = "Luego de haber construido el edificio, se le encargó a Osash una nueva tarea: fortificar una ciudad a las afueras del reino. Si se quiere construir una muralla circular alrededor de la ciudad, ¿cuál sería el área protegida por el muro si la ciudad tiene un diámetro de 5 kilómetros?";

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {
  // Verificar el valor de texto utilizando una estructura condicional if-else.
  if (texto === 'Texto 1') {
    // Si texto es igual a 'Texto 1':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de éxito con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página '2Pregunta4Matematica.html'
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
      window.location.href = '2Pregunta4Matematica.html';
      sumarPuntos(10);
    });
  } else {
    // Si texto no es igual a 'Texto 1':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de error con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página '2Pregunta4Matematica.html'
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
      window.location.href = '2Pregunta4Matematica.html';
      restarPuntos(10);
    });
  }
}
