//Barra de navegación superior

document.write('<div id="top-bar">');

//Botón del menú hamburguesa

    if (visible == true) {

        document.write('<div id="menu-btn">');
            
            document.write('<i class="fa-solid fa-bars"></i>');

        document.write('</div>');

    }

    //Titulo de la Barra
    document.write('<center>');

        document.write('<h3>'+titulo+'</h3>');

    document.write('</center>');

document.write('</div>');


    //Contenedor del menú desplegable
    document.write('<div id="menu-container">');
        //Elementos del menú
        document.write('<a href="../views/home.html" class="menu-item">');
        
            document.write('<i class="fa-solid fa-house"></i> Inicio');
            
        document.write('</a><br>');

        document.write('<a href="../views/consejos.html" class="menu-item">');

            document.write('<i class="fa-solid fa-image"></i> Galeria');
            
        document.write('</a><br>');
        
        document.write('<a href="../views/lugares.html" class="menu-item">');

            document.write('<i class="fa-solid fa-map-location-dot"></i> Lugares de la Huasteca');
            
        document.write('</a><br>');

        document.write('<a href="../views/acercaDe.html" class="menu-item">');

            document.write('<i class="fa-solid fa-circle-question"></i>  Acerca de');
           
        document.write('</a><br>');
    document.write('</div>');

//<script src="../scripts/topAppMenu.js"></script>

//const { toggleMenu} = require('../scripts/topAppMenu.js');
// Función para mostrar/ocultar el menú al hacer clic en el botón hamburguesa
function toggleMenu () {
    var menu = document.getElementById('menu-container')
    if (menu.style.display === 'block') {
      menu.style.display = 'none'
    } else {
      menu.style.display = 'block'
    }
}
  
  // Asignar el evento clic al botón hamburguesa
document.getElementById('menu-btn').addEventListener('click', toggleMenu)
  