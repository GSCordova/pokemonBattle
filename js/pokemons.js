
//Clase Pokemon

class Pokemon{
    constructor(nombre, vida, img, tipo){
        this.nombre = nombre;
        this.vida = vida;
        this.tipo = tipo;
        this.img = img;
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

// Pikachu

let pikachu = new Pokemon(
    'Pikachu', //nombre
    100, //vida
    'img/pikachu.png', //img
    'electrico' //tipo
);

// Bulbasaur

let bulbasaur = new Pokemon(
    'Bulbasaur', //nombre
    100, //vida
    'img/bulbasaur.png', //img
    'planta' //tipo
);

// Charmander

let charmander = new Pokemon(
    'Charmander', //nombre
    100, //vida
    'img/charmander.png', //img
    'fuego' //tipo
);

// Squirtle

let squirtle = new Pokemon(
    'Squirtle', //nombre
    100, //vida
    'img/squirtle.png', //img
    'agua' //tipo
);