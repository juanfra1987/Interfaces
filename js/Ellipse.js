class Ellipse extends Figura {
    constructor(posX, posY, width, height, fill, context, estilo) {
        super(posX, posY, width, height, fill, context, estilo);
    }

    draw() {
        this.ctx.fillStyle = this.fill;
        this.ctx.beginPath();
        this.ctx.ellipse(this.posX, this.posY, this.width / 2, this.height / 2, 0, 0, 2 * Math.PI);
        this.ctx.fill();
        if (this.estilo)
            this.ctx.stroke();
    }

    estaElPunto(x, y) {
        let xx = this.posX-x ;
        let yy = this.posY-y ;
        return ((Math.sqrt(xx * xx + yy * yy) < this.radius));
    }

}