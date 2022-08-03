


class Producto {
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio
    }


    mostrarDatos(){
        document.write(`<ul>
        <li> Codigo: ${this.codigo} </li>
        <li>Nombre:  ${this.nombre} </li>
        <li>Precio:  ${this.precio} </li>
        </ul>`)
    }
    
}


let productosTotal = [ 
    alfajor = new Producto
    (1542,"Alfajor JORGITO", "$150"),
    chupetin = new Producto (
         1684,"Chupetin Malito", "$80"
     ),
     galleta = new Producto(
        2659,"Galleta Variedad", "$200"
    )
 ]


productosTotal[alfajor.mostrarDatos(),chupetin.mostrarDatos(),galleta.mostrarDatos()]