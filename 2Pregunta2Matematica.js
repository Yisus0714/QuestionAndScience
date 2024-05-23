// Realizado por Erick Gael y Jesus Manuel
document.getElementById('texto').innerHTML = "Para una de las partes del edificio <br> Osash necesita saber cuántas veces cabe <br> el diámetro de un círculo en su circunferencia <br> ¿Cuál es el valor aproximado que encontraría?";

var puntos = localStorage.getItem('Puntos');

function mostrarMensaje(texto) {
  // Verificar el valor de texto utilizando una estructura condicional if-else.
  if (texto === 'Texto 1') {
    // Si texto es igual a 'Texto 1':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de éxito con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página '2Pregunta3Matematica.html'
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
      window.location.href = '2Pregunta3Matematica.html';
      sumarPuntos(10);
    });
  } else {
    // Si texto no es igual a 'Texto 1':

    // Mostrar un mensaje utilizando la biblioteca Swal.fire().
    // Se muestra un mensaje de error con un título y una apariencia personalizada.
    // Después de hacer clic en el botón de confirmación, se redirige al usuario a la página '2Pregunta3Matematica.html'
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
      window.location.href = '2Pregunta3Matematica.html';
      restarPuntos(10);
    });
  }
}
