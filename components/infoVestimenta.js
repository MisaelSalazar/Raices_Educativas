//Tarjeta Vestimenta
document.write(
    '<div class="card" id="card2">'+
        '<h2 class="card-title">'+tituloTarjeta2+'</h2>'+
        '<img src="'+linImagen2+'" alt="Portada" class="card-img">'+
    '</div>'
)
//Modal Vestimenta
document.write(
'<div id="modal2" class="modal">'+
'<div class="modal-content">'+
    '<span id = "close2" class="close">&times;</span>'+
    '<h2 class="modal-title">'+tituloInfoTarjeta2+'</h2>'+
    '<img class = "imagenModal" src="'+linImagenModal2+'">'+
    '<p class="modal-info">'+info2+'</p>'+
'</div>'+
'</div>'
)

// Obtener los elementos del DOM
const card2 = document.getElementById('card2');
const modal2 = document.getElementById('modal2');
const close2 = document.getElementById('close2');

// Mostrar el modal al hacer clic en la tarjeta
card2.onclick = function() {
    modal2.style.display = 'flex';
}


// Cerrar el modal al hacer clic en el botón de cerrar
close2.onclick = function() {
    modal2.style.display = 'none';
}


// Cerrar el modal al hacer clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = 'none';
    }
}