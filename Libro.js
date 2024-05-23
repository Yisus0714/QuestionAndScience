// Realizado por Jesus Manuel

// Obtener todos los elementos con la clase 'page' y almacenarlos en la variable 'pages'.
var pages = document.getElementsByClassName('page');

// Recorrer cada elemento 'page' en el arreglo 'pages'.
for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  
  // Verificar si el índice 'i' es par.
  if (i % 2 === 0) {
    // Establecer el valor de zIndex del elemento 'page' para que aparezca encima de las páginas impares.
    // El valor de zIndex se calcula restando el índice 'i' del número total de páginas.
    page.style.zIndex = (pages.length - i);
  }
}

// Agregar un evento 'DOMContentLoaded' para ejecutar una función cuando el contenido del documento se haya cargado.
    document.addEventListener('DOMContentLoaded', function () {
// Recorrer cada elemento 'page' en el arreglo 'pages'.
  for (var i = 0; i < pages.length; i++) {
    // Establecer el atributo 'pageNum' en cada elemento 'page' para almacenar su número de página.
    // El número de página se calcula sumando 1 al índice 'i'.
    pages[i].pageNum = i + 1;

    // Agregar un evento 'onclick' a cada elemento 'page'.
    pages[i].onclick = function () {
      // Verificar si el número de página es par.
      if (this.pageNum % 2 === 0) {
        // Si es par, remover la clase 'flipped' al elemento actual y a su hermano anterior.
        this.classList.remove('flipped');
        this.previousElementSibling.classList.remove('flipped');
      } else {
        // Si es impar, agregar la clase 'flipped' al elemento actual y a su hermano siguiente.
        this.classList.add('flipped');
        this.nextElementSibling.classList.add('flipped');
      }
    };
  }
});
