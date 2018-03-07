
//Creacion de variable

const primerElegido = document.getElementById('seleccionado1')
const segundoElegido = document.getElementById('seleccionado2')
const imagenIzquierda = document.getElementById('imgIzq')
const imagenDerecha = document.getElementById('imgDer')
const imagenDerechaF = document.getElementById('imgIzqFinal')
const imagenIzquierdaF = document.getElementById('imgDerFinal')
const innerElegir = '{Sin Elegir}'
const empezar = document.getElementById('empezarBoton')
const campoBatalla = document.getElementById('campoBatalla')

const go = document.getElementById('letsGo')
const listaPokemon = document.getElementById('listaPokemon')
const general = document.getElementById('general')

//Funciones Globales

let basico = () => random(0, 10)
let especial = () => random(5, 20)
let random = (min, max) => Math.floor( Math.random() * (max - min  + 1) ) + min
let resetearPrimero = () => {
    primerElegido.innerHTML = innerElegir
    imagenDerecha.src = ''
}
let resetearSegundo = () => {
    segundoElegido.innerHTML = innerElegir
    imagenIzquierda.src = ''
    
}
let seleccion = (event) => {
    if(primerElegido.innerHTML == innerElegir){
        primerElegido.innerHTML = event.target.innerHTML
        if (event.target.innerHTML == 'Pikachu'){
            imagenDerecha.src = pikachu.img
            imagenDerechaF.src = pikachu.img
        } else if (event.target.innerHTML == 'Bulbasaur'){
            imagenDerecha.src = bulbasaur.img
            imagenDerechaF.src = bulbasaur.img
        } else if (event.target.innerHTML == 'Charmander'){
            imagenDerecha.src = charmander.img
            imagenDerechaF.src = charmander.img
        } else if (event.target.innerHTML == 'Squirtle'){
            imagenDerecha.src = squirtle.img
            imagenDerechaF.src = squirtle.img
        }
    } else if (segundoElegido.innerHTML == innerElegir){
        segundoElegido.innerHTML = event.target.innerHTML
        if (event.target.innerHTML == 'Pikachu'){
            imagenIzquierda.src = pikachu.img
            imagenIzquierdaF.src = pikachu.img
        } else if (event.target.innerHTML == 'Bulbasaur'){
            imagenIzquierda.src = bulbasaur.img
            imagenIzquierdaF.src = bulbasaur.img
        } else if (event.target.innerHTML == 'Charmander'){
            imagenIzquierda.src = charmander.img
            imagenIzquierdaF.src = charmander.img
        } else if (event.target.innerHTML == 'Squirtle'){
            imagenIzquierda.src = squirtle.img
            imagenIzquierdaF.src = squirtle.img
        }
    }
}

let acum = '0'
let sumador = 0;
let miIntervalo;

go.addEventListener('click', ()=>{
    listaPokemon.style.display = 'none';
    general.style.display = 'none';
    go.style.display = 'none';
    miIntervalo = setInterval(subir, 10);
    campoBatalla.style.display = 'block'
    img
})


//poner giro a la izquierda

function subir() {
    sumador = sumador + 1;
    if(sumador == 300) {
        pararIntervalo();
        imgDer.style.opacity = 0;
        imgIzq.style.opacity = 0;
        imagenIzquierdaF.style.display = 'block';
        imagenDerechaF.style.display = 'block';

    } else {
        acum = parseInt(acum) +  1;
        let superresult = acum.toString();
        acum = acum.toString();
        imagenIzquierda.style.bottom = superresult + 'px';
        imagenDerecha.style.bottom = superresult + 'px';
        console.log(imagenIzquierda.style.bottom)
    }
}

function pararIntervalo() {
    clearInterval(miIntervalo);
}



/*
empezarBoton.addEventListener('click', ()=>{
    console.log(imagenIzquierda.src)
    console.log(imagenDerecha.src)
    imagenDerecha.src = imagenIzquierda.src
});
*/