let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let figuras = [];

const CANT_FIG = 20;

let mouseUp = false;
let mouseDown = false;


canvas.addEventListener('mousedown', () => {
    mouseDown = true;
    mouseUp = false;
});

canvas.addEventListener('mouseup', () => {
    mouseUp = true;
    mouseDown = false;
});

/* canvas.addEventListener('mousemove', (e) => {
    console.log(e);
}); */

function main() {
    pintarCanvas();
    crearFiguras();
}

function crearFiguras() {
    if (figuras.length < CANT_FIG) {
        addFigura(figuras.length < (CANT_FIG / 2));
        figuras[figuras.length - 1].draw();
        setTimeout(() => {
            crearFiguras();
        }, 100);
    }
}

function dibujar() {

}

function pintarCanvas() {
    let unColor = 'rgba(245, 245, 245, 255)';
    let rect = new Rect(0, 0, canvasWidth - 1, canvasHeight - 1, unColor, ctx, true);
    rect.draw();
}

function addFigura(estilo) {
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    console.log("se creo en" + posX, posY);


    let color = randomRGBA();

    if (estilo == true) {
        let rect = new Rect(posX, posY, Math.round(Math.random() * 100), Math.round(Math.random() * 100), color, ctx, false);
        figuras.push(rect);
    } else {
        let ellipse = new Ellipse(posX, posY, Math.round(Math.random() * 50), color, ctx, false);
        figuras.push(ellipse);

    }

    //rect.draw();

}

function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

canvas.addEventListener('click', (e) => {
    let figuraClickeada = verificarFigura(e.layerX, e.layerY);
    if (figuraClickeada != null) {
        console.log("Clickeo sobre una figura");
    } else {
        console.log("No clickeo sobre una figura")
    }
});

function verificarFigura(x, y) {
    for (i = 0; i < figuras.length; i++) {
        let elemento = figuras[i];
        if (elemento.estaElPunto(x, y)) {
            return elemento;
        }
    }
    return null;
};

/* function seClickeoFigura() {
    canvas.addEventListener('click', verificarFigura);
    let figuraClickeada = verificarFigura(canvas.click.posX, canvas.click.posY)
    if (figuraClickeada != null)
        console.log("El punto esta dentro de una figura");
    else
        console.log("El punto no esta dentro de una figura");
} */