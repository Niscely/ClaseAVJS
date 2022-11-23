let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]


//1
pokemons.sort((a,b) => {a.base_damage - b.base_damage})

console.log(pokemons)


//2
function sortPokemons(argument){
    let validInput = ["type", "base_damage", "base_hp", "speed"]
     
    if (validInput.includes(argument)){
        console.log(pokemons.sort((a,b) => a[argument] - b[argument]))

    } else {
        console.log("ingresar ARGUMENTO VALIDO valido")

    }
}

//3
function filterPokemons(argument){ 
    let filteredPokemons = pokemons.filter(pokemon => pokemon.type === argument)
    let result = filteredPokemons.length === 0 ? "Pokemon no encontrado" : filteredPokemons


    console.log(result)

}


//4 - 5
let pokemonmaster = [
    {id:11, name: "pok", created_date: "02/09/2004", pokemons: []}
]

function addRandomPokemon(){
    const aleatorio = Math.floor(Math.random()*pokemons.length)

    console.log(aleatorio)
}


//6
function addAtributes(){

    for (let i = 0; i<pokemons.length; i++){

      pokemons[i] ['min_damage'] = Math.floor(Math.random() * (2-1+1)+1)
      pokemons[i] ['max_damage'] = Math.floor(Math.random() * (5-3+1)+3)
    }
    console.log(pokemons)
}


//7
function setDamage(index){
    if(index < pokemons,leng){
        addAtributes()
        let selectedPokemon = pokemons[index]
        let total_damage = selectedPokemon.base_damage + Math.floor(Math.random * (selectedPokemon.max_damage-1+selectedPokemon.min_damage))

        console.log(total_damage)

    }else{
        console.log(`please enter a number not greater than ${pokemons.length - 1}`) 
    }
}

//8
function sumadameges(){
   

}

pokemons.pokemonmaster.sort((a,b) => {a.base_damage - b.base_damage})

console.log(pokemons)

pokemons.pokemonmaster.sort((a,b) => {a.max_damege - b.max_damage})

console.log(pokemons)

//pruebas





//1. Ordernar los pokemons por base_damage de menor a mayor.
 
//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
 
//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
 
//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
 
//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
 
//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 
 
//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
 
//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. El quiere que sus pokemons se ordenen de manera
// que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.*/
