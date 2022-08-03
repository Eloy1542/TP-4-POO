class Libro {
    constructor(ISBN,
        titulo,
        autor,
        numeroPaginas
        ){
            this.isbn = ISBN;
            this.titulo = titulo;
            this.autor = autor;
            this. numeroPaginas = numeroPaginas
        }

        set cambioTitulo(nuevoTitulo){
            this.titulo = nuevoTitulo

        } 
        set cambioAutor(nuevoAutor){
            this.autor = nuevoAutor
        }
        set cambioPaginas(cantPaginas){
            this.numeroPaginas = cantPaginas
        }

        mostrarLibro(){
            document.write(` <br> El libro  ${this.titulo } con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numeroPaginas} páginas `)
        }


}

let libro1 = new Libro("aleatorio","Ojos del perro siberiano","Eloy Pintos",650)
let libro2 = new Libro("aleatorio","El diario de Anna Frank","Anna Frank",962)

libro1.mostrarLibro();
libro2.mostrarLibro();