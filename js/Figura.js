// Clase Figura. 
// Versión mamarrachito lindo. 
// Vamos a ir refinándola conforme avancemos con objetos

class Figura {
    constructor(posX, posY, width, height, fill, context, estilo) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.fill = fill;
        this.ctx = context;
        this.estilo = estilo;
    }

    draw() {
        // Nothing to do
    }

    moveTo(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    selected(estilo) {
        this.estilo = estilo;
    }

    estaElPunto(x, y) {
        return null;
    }
}