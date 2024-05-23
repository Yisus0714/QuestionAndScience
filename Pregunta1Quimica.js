// Realizado por Erick Gael y Jesus Manuel
// Modificar el contenido de un elemento HTML con el id "texto"
document.getElementById('texto').innerHTML = "Osash ha estado jugando en su laboratorio, <br> al final del día se encuentra con que tiene un <br> matraz lleno de ácido clorhídrico <br> ¿Qué podría utilizar Osash para <br> neutralizarlo y convertirlo en algo más?"

// Obtener el valor almacenado en la clave 'Puntos' del objeto localStorage y asignarlo a la variable 'puntos'
var puntos = localStorage.getItem('Puntos');

// Definir una función llamada mostrarMensaje que toma un parámetro llamado 'texto'
function mostrarMensaje(texto) {
  // Verificar si el valor de 'texto' es igual a 'Texto 1'
  if (texto === 'Texto 1') {
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
      // Redirigir al usuario a la página 'Pregunta2Quimica.html'
      window.location.href = 'Pregunta2Quimica.html';
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
      // Redirigir al usuario a la página 'Pregunta2Quimica.html'
      window.location.href = 'Pregunta2Quimica.html';
      // Llamar a la función restarPuntos para restar 10 puntos
      restarPuntos(10);
    });
  }
}