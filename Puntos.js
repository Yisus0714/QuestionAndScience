// Realizado por Jesus Manuel y ramses norberto

// Función para sumar puntos a la puntuación actual
function sumarPuntos(cantidad) {
  var puntosActuales = obtenerPuntos(); // Obtener la puntuación actual
  var puntosNuevos = puntosActuales + cantidad; // Calcular la nueva puntuación sumando la cantidad proporcionada
  guardarPuntos(puntosNuevos); // Guardar la nueva puntuación en el almacenamiento local
}

// Función para restar puntos a la puntuación actual
function restarPuntos(cantidad) {
  var puntosActuales = obtenerPuntos(); // Obtener la puntuación actual
  var puntosNuevos = puntosActuales - cantidad; // Calcular la nueva puntuación restando la cantidad proporcionada
  guardarPuntos(puntosNuevos); // Guardar la nueva puntuación en el almacenamiento local
}

// Función para obtener la puntuación actual almacenada en el almacenamiento local
function obtenerPuntos() {
  var puntos = localStorage.getItem('puntos'); // Obtener la puntuación del almacenamiento local
  if (puntos === null) {
    return 0; // Si no se encuentra la puntuación, devolver 0
  }
  return parseInt(puntos); // Convertir la puntuación de cadena a número entero y devolverla
}

// Función para guardar la puntuación en el almacenamiento local
function guardarPuntos(puntos) {
  localStorage.setItem('puntos', puntos.toString()); // Convertir la puntuación a cadena y guardarla en el almacenamiento local
}

// Obtener la puntuación actual
var puntos = obtenerPuntos();

// Actualizar el elemento con el id 'Puntos' para mostrar la puntuación actual
if (puntos < 0) {
  document.getElementById('Puntos').style.color = 'red'; // Establecer el color rojo para la puntuación negativa
  document.getElementById('Puntos').innerHTML = 'Puntaje: ' + puntos; // Mostrar la puntuación actual en el elemento
} else {
  document.getElementById('Puntos').style.color = 'green'; // Establecer el color verde para la puntuación positiva o igual a cero
  document.getElementById('Puntos').innerHTML = 'Puntaje: ' + puntos; // Mostrar la puntuación actual en el elemento
}
