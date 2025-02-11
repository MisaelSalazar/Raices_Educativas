//Tarjeta Tradiciones
document.write(
    '<div class="card" id="card3">'+
        '<h2 class="card-title">'+tituloTarjeta3+'</h2>'+
        '<img src="'+linImagen3+'" alt="Portada" class="card-img">'+
    '</div>'
)
//Modal Tradiciones
document.write(
'<div id="modal3" class="modal">'+
'<div class="modal-content">'+
    '<span id="close3" class="close">&times;</span>'+
    '<h2 class="modal-title">'+tituloInfoTarjeta3+'</h2>'+
    '<img class = "imagenModal" src="'+linImagenModal3+'">'+
    '<p class="modal-info">'+info3+'</p>'+
'</div>'+
'</div>'
)

// Obtener los elementos del DOM
const card3 = document.getElementById('card3');
const modal3 = document.getElementById('modal3');
const close3 = document.getElementById('close3');

// Mostrar el modal al hacer clic en la tarjeta
card3.onclick = function() {
    modal3.style.display = 'flex';
}


// Cerrar el modal al hacer clic en el botón de cerrar
close3.onclick = function() {
    modal3.style.display = 'none';
}


// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = 'none';
    }
}