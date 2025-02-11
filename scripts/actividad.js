//Declaracion de arrays
let pronombres = [];
let color = [];
let numeros = [];

//Elegir lengua
if (lengua == "nahuatl") {

    pronombres = ["yejuatl", "yejuantin", "tejuatin", "tejuatl", "amejuantin", "nejuatl"];

    color = ["coztik", "azoltik", "blanco","xocopaltik","chilkostik","negro","chichiltik","rosa","xoxohuik"];

    numeros = ["se", "ome", "yeyi", "naui", "makuili", "chikuasen", "chikome", "chikueyi", "chiknaui", "majtlaktli"];
    
}if (lengua == "tenek") {

    pronombres = ["nixe'", "jajá'chik", "wawa'", "tata'", "tatá'chik", "nana'"];

    color = ["manu", "tok'iki", "blanco", "tsuluw", "itsakni", "negro", "tsakni", "rosa", "yashu'"];

    numeros = ["jun", "tsab", "osh", "tse'", "bo'", "akak", "buk", "washik", "beleu", "lajuj"];
    
}if (lengua == "xioi") {
    
    pronombres = ["U'","Nduyajat","Kiaguan","Jt'iu","Jiikan","Kiau"];

    color = ["dajiuang", "azul","d'nua'a","xinti'ix","nijiang","dampu'u","da'ua'","xi'aax","verde"];

    numeros = ["san'ta", "nuyi", "tres", "gariuy", "gik'jay", "tiria", "ri'nkjiuyat", "ocho", "nueve", "diez"];
}
// Lista de colores y sus nombres correspondientes
const colores = [

    //Pronombres
    { nombre: pronombres[0], src: "../../img/actividades/pronombres/El.webp" },
    { nombre: pronombres[1], src: "../../img/actividades/pronombres/Ellos.webp" },
    { nombre: pronombres[2], src: "../../img/actividades/pronombres/Nosotros.webp" },
    { nombre: pronombres[3], src: "../../img/actividades/pronombres/Tu.webp" },
    { nombre: pronombres[4], src: "../../img/actividades/pronombres/Ustedes.webp" },
    { nombre: pronombres[5], src: "../../img/actividades/pronombres/Yo.webp" },

    //Colores
    { nombre: color[0], src: "../../img/actividades/colores/amarillo.webp" },
    { nombre: color[1], src: "../../img/actividades/colores/azul.webp" },
    { nombre: color[2], src: "../../img/actividades/colores/blanco.webp" },
    { nombre: color[3], src: "../../img/actividades/colores/morado.webp" },
    { nombre: color[4], src: "../../img/actividades/colores/naranja.webp" },
    { nombre: color[5], src: "../../img/actividades/colores/negro.webp" },
    { nombre: color[6], src: "../../img/actividades/colores/rojo.webp" },
    { nombre: color[7], src: "../../img/actividades/colores/rosa.webp" },
    { nombre: color[8], src: "../../img/actividades/colores/verde.webp" },

    //Indicaciones

    //Numeros
    { nombre: numeros[0], src: "../../img/actividades/numeros/1.webp" },
    { nombre: numeros[1], src: "../../img/actividades/numeros/2.webp" },
    { nombre: numeros[2], src: "../../img/actividades/numeros/3.webp" },
    { nombre: numeros[3], src: "../../img/actividades/numeros/4.webp" },
    { nombre: numeros[4], src: "../../img/actividades/numeros/5.webp" },
    { nombre: numeros[5], src: "../../img/actividades/numeros/6.webp" },
    { nombre: numeros[6], src: "../../img/actividades/numeros/7.webp" },
    { nombre: numeros[7], src: "../../img/actividades/numeros/8.webp" },
    { nombre: numeros[8], src: "../../img/actividades/numeros/9.webp" },
    { nombre: numeros[9], src: "../../img/actividades/numeros/10.webp" },
];

// Función para iniciar el juego
function iniciarJuego() {
    // Seleccionar un color al azar
    const colorCorrecto = colores[Math.floor(Math.random() * colores.length)];
    document.getElementById('colorImage').src = colorCorrecto.src;

    // Seleccionar dos colores incorrectos al azar
    let opciones = [colorCorrecto];
    while (opciones.length < 3) {
        const colorIncorrecto = colores[Math.floor(Math.random() * colores.length)];
        if (!opciones.includes(colorIncorrecto)) {
            opciones.push(colorIncorrecto);
        }
    }

    // Mezclar las opciones para que el botón correcto no siempre esté en la misma posición
    opciones = opciones.sort(() => Math.random() - 0.5);

    // Asignar los nombres a los botones
    document.getElementById('btn1').textContent = opciones[0].nombre;
    document.getElementById('btn2').textContent = opciones[1].nombre;
    document.getElementById('btn3').textContent = opciones[2].nombre;

    // Guardar la respuesta correcta
    document.getElementById('btn1').dataset.correcto = opciones[0] === colorCorrecto;
    document.getElementById('btn2').dataset.correcto = opciones[1] === colorCorrecto;
    document.getElementById('btn3').dataset.correcto = opciones[2] === colorCorrecto;
}

// Función para verificar la respuesta
function checkAnswer(button) {
    if (button.dataset.correcto === "true") {
        alert("¡Correcto!");
    } else {
        alert("Incorrecto, intenta de nuevo.");
    }
}

// Iniciar el juego cuando la página se carga
window.onload = iniciarJuego;