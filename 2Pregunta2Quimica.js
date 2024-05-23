// Asigna el texto de la pregunta al elemento con el id 'texto'
document.getElementById('texto').innerHTML = "Osash dejo olvidado su equipo de laboratorio <br> a el bosque por varios días, <br> al ir por ellos nota  que una capa rasposa <br> de color naranja <br> amarronado ah empezado a crecer en <br> algunos  de sus instrumentos de metal <br> ¿qué tipo de reacción ah ocurrido?";

// Obtiene el valor de los puntos del localStorage
var puntos = localStorage.getItem('Puntos');

// Función para mostrar el mensaje y realizar acciones según la opción seleccionada
function mostrarMensaje(texto) {
  if (texto === 'Texto 1') {
    // Ventana emergente mostrando que se han recolectado 10 monedas
    Swal.fire({
      title: 'has recolectado 10 Monedas',
      customClass: {
        popup: 'pupup-correcto',
        title: 'titulo-correcto',
        content: 'contenido-correcto',
        confirmButton: 'confirmar-correcto',
      }
    }).then(function () {
      // Redirecciona a la siguiente pregunta y suma 10 puntos
      window.location.href = '2Pregunta3Quimica.html';
      sumarPuntos(10);
    });
  } else {
    // Ventana emergente mostrando que se han perdido 10 monedas
    Swal.fire({
      title: 'has perdido 10 Monedas',
      customClass: {
        popup: 'pupup-incorrecto',
        title: 'titulo-incorrecto',
        content: 'contenido-incorrecto',
        confirmButton: 'confirmar-incorrecto',
      },
    }).then(function () {
      // Redirecciona a la siguiente pregunta y resta 10 puntos
      window.location.href = '2Pregunta3Quimica.html';
      restarPuntos(10);
    });
  }
}
