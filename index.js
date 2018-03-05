
//Clase Pokemon

class Pokemon{
    constructor(nombre, vida, tipo){
        this.nombre = nombre;
        this.vida = vida;
        this.tipo = tipo
    }

    ataqueBasico(){return basico()}

    ataqueEspecial(){return especial()}

    usarPocion(){
        let recarga = random(5, 30)
        this.vida += recarga
        return `${this.nombre} se ha curado ${recarga} puntos de vida. Ahora tienes ${this.vida} puntos de vida`
    }

    rendirse(){
        this.vida = 0
        return this.vida
    }
}

let pikachu = new Pokemon('Pikachu', 100, 'electrico')

//Creacion de variable

const primerElegido = document.getElementById('seleccionado1')
const segundoElegido = document.getElementById('seleccionado2')
const innerElegir = '{Sin Elegir}'

//Funciones Globales

let basico = () => random(0, 10)
let especial = () => random(5, 20)
let random = (min, max) => Math.floor( Math.random() * (max - min  + 1) ) + min
let resetearPrimero = () => primerElegido.innerHTML = innerElegir
let resetearSegundo = () => segundoElegido.innerHTML = innerElegir
let seleccion = (event) => {
    console.log(event.target.innerHTML)
    if(primerElegido.innerHTML == innerElegir){
        primerElegido.innerHTML = event.target.innerHTML
    } else if (segundoElegido.innerHTML == innerElegir){
        segundoElegido.innerHTML = event.target.innerHTML
    } else {
        console.log('Ya has elegido a los 2 pokemon. No puedes cambiar')
    }

}