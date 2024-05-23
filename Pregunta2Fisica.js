// Realizado por Erick Gael y Jesus Manuel
//Mediante un document Id y el Id Texto se pone el texto del problema con un innerHTML
document.getElementById('texto').innerHTML = "Después de que cada uno de los científicos <br> entendiera el problema de cada uno,  <br> Osash se le ocurrió inventar un nuevo concepto <br> que revolucionará la física de su época, <br> algo que  llama 'vectores' <br> ¿Cuál de los siguientes conceptos <br> debería de ser un componente de un 'vector'?"

// Obtener el valor almacenado en la clave 'Puntos' del objeto localStorage y asignarlo a la variable 'puntos'
var puntos = localStorage.getItem('Puntos');

// Definir una función llamada mostrarMensaje que toma un parámetro llamado 'texto'
function mostrarMensaje(texto) {
  // Verificar si el valor de 'texto' es igual a 'Texto 2'
  if (texto === 'Texto 2') {
    // Mostrar un mensaje utilizando Swal.fire con un título y una apariencia personalizada para indicar que se han recolectado 10 Monedas
    Swal.fire({
      title: 'Has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      // Redirigir al usuario a la página 'Pregunta3Fisica.html'
      window.location.href = 'Pregunta3Fisica.html';
      // Llamar a la función sumarPuntos para sumar 10 puntos
      sumarPuntos(10);
    });
  } else {
    // Mostrar un mensaje utilizando Swal.fire con un título y una apariencia personalizada para indicar que se han perdido 10 Monedas
    Swal.fire({
      title: 'Has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Redirigir al usuario a la página 'Pregunta3Fisica.html'
      window.location.href = 'Pregunta3Fisica.html';
      // Llamar a la función restarPuntos para restar 10 puntos
      restarPuntos(10);
    });
  }
}