class Disco {
    constructor(nombre, artista, album) {
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
    }

    getNombre() {
        return this.nombre;
    }

    getArtista() {
        return this.artista;
    }

    getAlbum() {
        return this.album;
      }

}
export default Disco;