const lienzo = document.getElementById("lienzo");
const papel = lienzo.getContext("2d");
const lapiz = document.getElementById('lapiz');
const borrador = document.getElementById('borrador');
const cursor = document.getElementById('cursor');

let x, y; 
let colorLinea = "black";
let estado = 0;

const dibujo = () => {
    document.addEventListener("mousedown", presionarMouse);
    document.addEventListener("mouseup", soltarMouse);
    document.addEventListener("mousemove", dibujarMouse);
}

const dibujarMouse = (event) => {
    if (estado === 1) {
        dibujarLinea(colorLinea, x, y, event.layerX, event.layerY, papel);
    }
    x = event.layerX;
    y = event.layerY;
}

const presionarMouse = (event) => {
    x = event.layerX;
    y = event.layerY;
    estado = 1;
}

const soltarMouse = (event) => {
    x = event.layerX;
    y = event.layerY;
    estado = 0;
}

const dibujarLinea = (color, xinicial, yinicial, xfinal, yfinal, lienzo) => {
    lienzo.beginPath();	//Empezar el trazo
    lienzo.strokeStyle = color;	//Estilo del trazo (color linea)
    lienzo.lineWidth = 2;	//Grosor de la linea
    lienzo.moveTo(xinicial, yinicial);	//Donde comienza la linea
    lienzo.lineTo(xfinal, yfinal);	//Trazo de la linea (ubica el punto final)
    lienzo.stroke();	//Dibuja la linea con el estilo de trazo
    lienzo.closePath();	//Cerrar el trazo
}

lapiz.addEventListener('click', () => {
    cursor.style.display = "block";
    document.body.style.cursor = "pointer";
    dibujo(); 
})

borrador.addEventListener('click', () => {
    cursor.style.display = "block";
    document.body.style.cursor = "url('img/cursor.png'), auto";
    dibujo();
})

cursor.addEventListener('click', () => {
    cursor.style.display = "none";
    document.body.style.cursor = "auto";
    javascript:window.location.reload();
})