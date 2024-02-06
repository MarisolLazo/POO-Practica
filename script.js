class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.estado = true;
    }

    disponible() {
        return this.estado
    }

    prestar() {
        return this.estado = false
    }


}

class Socio {
    constructor(nombre, identificacion) {
        this.nombre = nombre;
        this.identificacion = identificacion;
        this.librosPrestados = [];
    }

    prestarLibro(libro) {
        if (libro.disponible()) {
            libro.prestar()
            this.librosPrestados.push(libro);
            console.log(`El libro "${libro.titulo}" ha sido prestado a ${socio.nombre}.`);
        } else {
            console.log(`El libro "${libro.titulo}" no está disponible para préstamo.`);
        }
    }
 
    mostrarLibros() {
        console.log(`Los libros prestados por ${socio1.nombre} son:`);
        socio1.librosPrestados.forEach((libro) => {
            console.log(`${libro.titulo} (${libro.autor})`);
        });
        const libro1 = new Libro("El gran Gatsby", "F. Scott Fitzgerald");
        const libro2 = new Libro("1984", "George Orwell");

        const socio1 = new Socio("Juan", 123456789);
        const socio2 = new Socio("María", 987654321);
    }

}





