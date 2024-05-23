// Realizado por Erick Gael y Jesus Manuel
// Modificar el contenido de un elemento HTML con el id "texto"
document.getElementById('texto').innerHTML = "Finalmente Osash lo logró,<br> creó una máquina del tiempo con otros <br> componentes de su laboratorio desarrolló <br> el viaje en el tiempo para así ayudarse <br> a sí mismo, cuando regresó al presente,<br> se fue a pasear por el aburrimiento <br> y decide empujar una piedra con forma semi-circular <br> al borde de un desnivel, nota como la piedra <br> llega al otro lado, escala unos metros y vuelve <br> al lado por donde fue empujada <br> ¿Qué tipo de movimiento tuvo la piedra al final?";

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
      // Redirigir al usuario a la página 'MISION_FISICA.html'
      window.location.href = 'MISION_FISICA.html';
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
      // Redirigir al usuario a la página 'MISION_FISICA.html'
      window.location.href = 'MISION_FISICA.html';
      // Llamar a la función restarPuntos para restar 10 puntos
      restarPuntos(10);
    });
  }
}