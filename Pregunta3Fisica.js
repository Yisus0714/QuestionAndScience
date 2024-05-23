// Realizado por Erick Gael y Jesus Manuel
// Modificar el contenido de un elemento HTML con el id "texto"
document.getElementById('texto').innerHTML = "La creación del vector fue importante para que Osash <br> creará el diseño de una   máquina del <br> tiempo, pero sin embargo, <br> todavía faltaba encontrar <br> la manera de crear el combustible  perfecto para <br> encenderla. Entonces, fue así <br> que pasó el tiempo y llegó al reino una <br> nueva tecnología   desde oriente el  “fuego artificial” <br> por lo que Osash se dispone a estudiarlo. <br> ¿Cuál de las siguientes  afirmaciones es <br> correcta acerca de la aceleración <br> vertical de un fuego artificial una vez se queda <br> sin combustible pero  sigue subiendo?";

// Obtener el valor almacenado en la clave 'Puntos' del objeto localStorage y asignarlo a la variable 'puntos'
var puntos = localStorage.getItem('Puntos');

// Definir una función llamada mostrarMensaje que toma un parámetro llamado 'texto'
function mostrarMensaje(texto) {
  // Verificar si el valor de 'texto' es igual a 'Texto 4'
  if (texto === 'Texto 4') {
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
      // Redirigir al usuario a la página 'Pregunta4Fisica.html'
      window.location.href = 'Pregunta4Fisica.html';
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
      // Redirigir al usuario a la página 'Pregunta4Fisica.html'
      window.location.href = 'Pregunta4Fisica.html';
      // Llamar a la función restarPuntos para restar 10 puntos
      restarPuntos(10);
    });
  }
}