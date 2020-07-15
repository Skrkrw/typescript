console.log("Clase JS")

/* Creating a new Object */

var bicicleta = {
    color: 'Rojo',
    modelo: 'BMX',
    frenos: 'Disco',
    velocidadMaxima: '60km',
    cambiarColor: function(nuevo_color){
        //bicicleta.color = nuevo_color
        this.color = nuevo_color
    }
}
/* End */

bicicleta.cambiarColor("Azul")