// Realizado por ramses norberto

function comparacion() {
  // Declarar variable cap.
  var cap;

  // Obtener el valor seleccionado en el elemento de lista desplegable con el ID "lista"
  // y convertirlo a un número entero utilizando parseInt(). Asignar el resultado a la variable cap.
  cap = parseInt(document.getElementById("lista").value);

  // Verificar el valor de cap utilizando una estructura condicional if-else.

  if (cap == 1) {
    // Si cap es igual a 1:

    // Modificar el contenido HTML del elemento con el ID "Misiones".
    // Se agrega un enlace (<a>) y un botón (<input>) que lleva a la página "Pregunta1Quimica.html".
    // También se agregan elementos HTML adicionales como etiquetas <p> y una imagen (<img>) con atributos específicos.
    document.getElementById("Misiones").innerHTML = "<a href='Pregunta1Quimica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='QUIMICA1.png' height='130' width='200' class='img1'></a><p class='parra1'>Osash se encuentra en su laboratorio por la mañana y no sabe qué hacer hasta que una serie de ideas se le vienen a la cabeza.</p><br><br><p class='parra'>Próximamente más capítulos..</p>";
  } else if (cap == 2) {
    // Si cap es igual a 2:

    // Modificar el contenido HTML del elemento con el ID "Misiones".
    // Se agrega un enlace y un botón que lleva a la página "2Pregunta1Quimica.html".
    // También se agregan elementos HTML adicionales como etiquetas <p> y una imagen.
    document.getElementById("Misiones").innerHTML = "<a href='2Pregunta1Quimica.html'><input type='button' class='M1' value='Historia 1:'> <br><br><br> <img src='QUIMICA2.png' height='130' width='200' class='img1'></a><p class='parra1'>Durante la mañana, Osash elaboró una presentación, pero después de esto, regresó a su laboratorio con muchas tareas.</p><br><br><p class='parra'>Próximamente más capítulos..</p>";
  }
}
