//Aquí colocaremos las imágenes
document.write('<img id="imagenCarrusel" src="'+primeraImagen+'" alt="Imagen">');

document.write('<center>');
    //Botones para cambiar la imagen
    document.write('<button class="botonCarrusel" onclick="cambiarImagen(-1)"><i class="fa-solid fa-chevron-left"></i></button>');
    document.write('<button class="botonCarrusel" onclick="reproducirAudio()"><i class="fa-solid fa-volume-high"></i></button>');
    document.write('<button class="botonCarrusel" onclick="cambiarImagen(1)"><i class="fa-solid fa-chevron-right"></i></button>');
document.write('</center>');

//Elemento de audio
document.write('<audio id="audio" src="" preload="auto"></audio>');
