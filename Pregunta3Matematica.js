// Realizado por Erick Gael y Jesus Manuel
document.getElementById('texto').innerHTML="Luego de la clase el maestro comenta a Osash <br> que le gustaría que fuera al reino  muy muy lejano como <br>  Mago/científico de intercambio, <br> por lo que acepta. Al llegar al <br> reino escucha de algo  llamado <br> “teorema  de Pitágoras”, <br> por lo que decide preguntarle que es al <br> sabio de la ciudad <br>¿Qué es  lo más probable que le  responda el sabio?"
/**
 * Esta variable almacena el valor recuperado del almacenamiento local bajo la clave 'Puntos'.
 */
var puntos = localStorage.getItem('Puntos');

/**
 * Esta función se ejecuta al llamarla con un parámetro 'texto'.
 * Compara el valor del parámetro con 'Texto 3' y muestra un mensaje en función del resultado.
 * Si el valor es 'Texto 3', se muestra un mensaje de éxito y se redirige a una página.
 * Si el valor es diferente, se muestra un mensaje de error y se redirige a una página.
 */
function mostrarMensaje(texto) {
  // Comprueba si el valor del parámetro 'texto' es igual a 'Texto 3'
  if (texto === 'Texto 3') {
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
      // Redirecciona a la página 'Pregunta4Matematica.html'
      window.location.href = 'Pregunta4Matematica.html';
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
      // Redirecciona a la página 'Pregunta4Matematica.html'
      window.location.href = 'Pregunta4Matematica.html';
      // Llama a la función 'restarPuntos' pasando 10 como parámetro
      restarPuntos(10);
    });
  }
}
