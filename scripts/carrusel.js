// Array con las rutas de las imágenes y los audios asociados


/*var datos = [
  { imagen: '../../img/Numeros/1.png', audio: 'ruta-del-primer-audio.mp3' },
  { imagen: '../../img/Numeros/2.png', audio: 'ruta-del-segundo-audio.mp3' },
  { imagen: '../../img/Numeros/3.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/4.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/5.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/6.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/7.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/8.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/9.png', audio: 'ruta-del-tercer-audio.mp3' },
  { imagen: '../../img/Numeros/10.png', audio: 'ruta-del-tercer-audio.mp3' }
// Agrega aquí las rutas de todas tus imágenes y audios asociados
]*/

// Variable para almacenar el índice de la imagen actual
var indiceImagen = 0

// Función para cambiar la imagen
function cambiarImagen (cambio) {
  indiceImagen += cambio; // Suma o resta al índice según el botón presionado

  // Verifica si el índice está dentro del rango de imágenes
  if (indiceImagen < 0) {
    indiceImagen = datos.length - 1; // Si es menor que cero, vuelve a la última imagen
  } else if (indiceImagen >= datos.length) {
    indiceImagen = 0; // Si es mayor o igual al tamaño del array, vuelve a la primera imagen
  }

  // Obtiene el elemento de la imagen y actualiza su src
  var imgElement = document.getElementById('imagenCarrusel')
  imgElement.src = datos[indiceImagen].imagen

  // Obtiene el elemento de audio y actualiza su src
  var audioElement = document.getElementById('audio')
  audioElement.src = datos[indiceImagen].audio
  audioElement.pause(); // Pausa la reproducción del audio si estaba reproduciéndose
}

// Función para reproducir el audio asociado a la imagen actual
function reproducirAudio () {
  var audioElement = document.getElementById('audio')
  audioElement.play() // Reproduce el audio
}

// Al cargar la página, configura la primera imagen y reproduce el audio asociado
window.onload = function() {
  // Establece la primera imagen y el audio por defecto
  cambiarImagen(0);
  // Reproduce el audio asociado con la primera imagen
  reproducirAudio();
};