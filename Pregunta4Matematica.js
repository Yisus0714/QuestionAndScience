// Realizado por Erick Gael y Jesus Manuel
document.getElementById('texto').innerHTML="Al llegar a la nueva escuela y después <br> de que se le asigna una clase de nuevo Osash <br> escucha de un nuevo concepto, <br> este se llamaba “derivada” <br> por lo que decide experimentar con ella   <br> ¿Cuál sería el resultado si Osash deriva un número real? "
// Obtener el valor de 'Puntos' almacenado en el objeto localStorage
var puntos = localStorage.getItem('Puntos');

// Definir la función mostrarMensaje que recibe un parámetro 'texto'
function mostrarMensaje(texto) {
  // Verificar si el valor de 'texto' es igual a 'Texto 1'
  if (texto === 'Texto 1') {
    // Mostrar un cuadro de diálogo con el título 'has recolectado 10 Monedas'
    Swal.fire({
      title: 'has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      // Redireccionar al archivo 'Pregunta5Matematica.html'
      window.location.href = 'Pregunta5Matematica.html';
      // Llamar a la función 'sumarPuntos' pasando 10 como argumento
      sumarPuntos(10);
    });
  } else {
    // Mostrar un cuadro de diálogo con el título 'has perdido 10 Monedas'
    Swal.fire({
      title: 'has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Redireccionar al archivo 'Pregunta5Matematica.html'
      window.location.href = 'Pregunta5Matematica.html';
      // Llamar a la función 'restarPuntos' pasando 10 como argumento
      restarPuntos(10);
    });
  }
}
