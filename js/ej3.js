
class Rectangulo{
    constructor(alto,ancho){
        this.altura = alto;
        this.ancho = ancho;
    }

    mostrarPropiedades(){
        document.write(`<ul>
        <li> altura: ${this.altura} </li>
        <li> ancho: ${this.ancho} </li>
        </ul>`)
    }
    

    perimetro(){
        document.write( "El perimetro del rectangulo es: " + 2 * (this.altura + this.ancho) ) 
    }

    area(){
        document.write(" <br> El area del rectangulo es: " + this.ancho * this.altura)
        
    }

    set modificarAltura(nuevaAltura) {
        this.altura = nuevaAltura;
      }
    set modificarAncho(nuevoAncho){
    this.ancho = nuevoAncho
}
      

}

let  rectangulo1 = new Rectangulo (
    10,20
);

rectangulo1.mostrarPropiedades()

rectangulo1.perimetro()

rectangulo1.area()



rectangulo1.modificarAltura = 5 ;
rectangulo1.modificarAncho = 10 ;

rectangulo1.mostrarPropiedades();
rectangulo1.perimetro();
rectangulo1.area();