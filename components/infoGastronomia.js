//Tarjeta Gastronomia
document.write(
            '<div class="card" id="card1">'+
                '<h2 class="card-title">'+tituloTarjeta1+'</h2>'+
                '<img src="'+linImagen1+'" alt="Portada" class="card-img">'+
            '</div>'
        )
//Modal Gastronomia
document.write(
    '<div id="modal1" class="modal">'+
        '<div class="modal-content">'+
            '<span id = "close1" class="close">&times;</span>'+
            '<h2 class="modal-title">'+tituloInfoTarjeta1+'</h2>'+
            '<img class = "imagenModal" src="'+linImagenModal1+'">'+
            '<p class="modal-info">'+info1+'</p>'+
        '</div>'+
    '</div>'
)

// Obtener los elementos del DOM
const card1 = document.getElementById('card1');
const modal1 = document.getElementById('modal1');
const close1 = document.getElementById('close1');

// Mostrar el modal al hacer clic en la tarjeta
card1.onclick = function() {
    modal1.style.display = 'flex';
}


// Cerrar el modal al hacer clic en el botón de cerrar
close1.onclick = function() {
    modal1.style.display = 'none';
}


// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = 'none';
    }
}