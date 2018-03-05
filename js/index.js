
//Creacion de variable

const primerElegido = document.getElementById('seleccionado1')
const segundoElegido = document.getElementById('seleccionado2')
const imagenIzquierda = document.getElementById('imgIzq')
const imagenDerecha = document.getElementById('imgDer')
const innerElegir = '{Sin Elegir}'
const empezar = document.getElementById('empezarBoton')

//Funciones Globales

let basico = () => random(0, 10)
let especial = () => random(5, 20)
let random = (min, max) => Math.floor( Math.random() * (max - min  + 1) ) + min
let resetearPrimero = () => primerElegido.innerHTML = innerElegir
let resetearSegundo = () => segundoElegido.innerHTML = innerElegir
let seleccion = (event) => {
    if(primerElegido.innerHTML == innerElegir){
        primerElegido.innerHTML = event.target.innerHTML
        if (event.target.innerHTML == 'Pikachu'){
            imagenDerecha.src = pikachu.img
        } else if (event.target.innerHTML == 'Bulbasaur'){
            imagenDerecha.src = bulbasaur.img
        } else if (event.target.innerHTML == 'Charmander'){
            imagenDerecha.src = charmander.img
        } else if (event.target.innerHTML == 'Squirtle'){
            imagenDerecha.src = squirtle.img
        }
    } else if (segundoElegido.innerHTML == innerElegir){
        segundoElegido.innerHTML = event.target.innerHTML
        if (event.target.innerHTML == 'Pikachu'){
            imagenIzquierda.src = pikachu.img
        } else if (event.target.innerHTML == 'Bulbasaur'){
            imagenIzquierda.src = bulbasaur.img
        } else if (event.target.innerHTML == 'Charmander'){
            imagenIzquierda.src = charmander.img
        } else if (event.target.innerHTML == 'Squirtle'){
            imagenIzquierda.src = squirtle.img
        }
    }

}

/*
empezarBoton.addEventListener('click', ()=>{
    console.log(imagenIzquierda.src)
    console.log(imagenDerecha.src)
    imagenDerecha.src = imagenIzquierda.src
});
*/