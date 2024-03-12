class Cubo {
    constructor(nombre, textura, nombreImagen, dimension) {
        this.nombre = nombre
        this.textura = textura
        this.nombreImagen = nombreImagen
        this.dimension = dimension
    }

    get NombreImagen(){
        return this.nombreImagen
    }
}
class Madera extends Cubo {
    constructor(nombre, textura, nombreImagen, dimension) {
        super(nombre, textura, nombreImagen, dimension)
    }
    get NombreImagen(){
        return this.nombreImagen
    }
    mostrarDatos() {
        return `El ${this.nombre} de
     ${this.textura} da uno de madera`
    }
}

class Diamante extends Cubo {
    constructor(nombre, textura, nombreImagen, dimension) {
        super(nombre, textura, nombreImagen, dimension)
    }
    get NombreImagen(){
        return this.nombreImagen
    }
    mostrarDatos() {
        return `El ${this.nombre} de
    ${this.textura} da uno de diamante`
    }
}

class Carbon extends Cubo {
    constructor(nombre, textura, nombreImagen, dimension) {
        super(nombre, textura, nombreImagen, dimension)
    }
    get NombreImagen(){
        return this.nombreImagen
    } 
    mostrarDatos() {
        return `El ${this.nombre} de
        ${this.textura} da uno de carbon`
    }
}

class Tierra extends Cubo {
    constructor(nombre, textura, nombreImagen, dimension) {
        super(nombre, textura, nombreImagen, dimension)
    }
    get NombreImagen(){
        return this.nombreImagen
    }
    mostrarDatos() {
        return `El ${this.nombre} de
        ${this.textura} da uno de tierra`
    }
}
const img= document.getElementById("imgCubo")
const imgTiera = document.getElementById("imgTierra")
const imgCarbon = document.getElementById("imgCarbon")
const imgDiamante = document.getElementById("imgDiamante")
const imgMadera = document.getElementById("imgMadera")

const respuesta = document.getElementById("imgrespuesta")
imgTiera.addEventListener("click", ()=>{
    const bloqueTierra=new Tierra("Bloque", "Tierra","https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/15/Grass_Block_JE4.png", 4)
    img.setAttribute ('src', bloqueTierra.NombreImagen )
    respuesta.innerText=bloqueTierra.mostrarDatos()
})
imgCarbon.addEventListener("click", ()=>{
    const bloqueCarbon=new Carbon("Bloque", "Carbon","https://minecraft.wiki/images/Block_of_Coal_JE3_BE2.png", 4)
    img.setAttribute ('src', bloqueCarbon.NombreImagen )
    respuesta.innerText=bloqueCarbon.mostrarDatos()
})
imgDiamante.addEventListener("click", ()=>{
    const bloqueDiamante=new Diamante("Bloque", "Diamante","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c8/Block_of_Diamond_JE5_BE3.png", 4)
    img.setAttribute ('src', bloqueDiamante.NombreImagen )
    respuesta.innerText=bloqueDiamante.mostrarDatos()
     
})
imgMadera.addEventListener("click", ()=>{
    const bloqueMadera=new Madera("Bloque", "Madera","https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Oak_Planks.png", 4)
    img.setAttribute ('src', bloqueMadera.NombreImagen )
    respuesta.innerText=bloqueMadera.mostrarDatos()
})
