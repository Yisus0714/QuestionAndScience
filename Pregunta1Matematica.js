// Realizado por Erick Gael y Jesus Manuel
// Modificar el contenido de un elemento HTML con el id "texto"
document.getElementById('texto').innerHTML = "Ohsas entra en una clase con la que compartirá con el príncipe del reino. Empieza la clase y el maestro comienza a hablar sobre las funciones lineales. Entonces, el príncipe le pregunta a Osash: ¿Qué es una función lineal? ¿Qué debería responderle Osash?";

/**
 * Esta variable almacena el valor recuperado del almacenamiento local bajo la clave 'Puntos'.
 */
var puntos = localStorage.getItem('Puntos');

/**
 * Esta función se ejecuta al llamarla con un parámetro 'texto'.
 * Compara el valor del parámetro con 'Texto 1' y muestra un mensaje en función del resultado.
 * Si el valor es 'Texto 1', se muestra un mensaje de éxito y se redirige a una página.
 * Si el valor es diferente, se muestra un mensaje de error y se redirige a una página.
 */
function mostrarMensaje(texto) {
  // Comprueba si el valor del parámetro 'texto' es igual a 'Texto 1'
  if (texto === 'Texto 1') {
    // Muestra un mensaje de éxito utilizando la librería Swal
    Swal.fire({
      title: 'Has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      // Redirecciona a la página 'Pregunta2Matematica.html'
      window.location.href = 'Pregunta2Matematica.html';
      // Llama a la función 'sumarPuntos' pasando 10 como parámetro
      sumarPuntos(10);
    });
  } else {
    // Muestra un mensaje de error utilizando la librería Swal
    Swal.fire({
      title: 'Has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Redirecciona a la página 'Pregunta2Matematica.html'
      window.location.href = 'Pregunta2Matematica.html';
      // Llama a la función 'restarPuntos' pasando 10 como parámetro
      restarPuntos(10);
    });
  }
}
