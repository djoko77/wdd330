// Drag and Drop

var chosenPokemon = document.getElementById("pokebox");
chosenPokemon.addEventListener("dragover", (event) => {
    event.preventDefault();
    chosenPokemon.innerHTML = "";
}); 

var pokemon = document.querySelectorAll(".pokemon-img");
var image = null;
for (var i=0; i < pokemon.length; i++) {    
    image = pokemon[i];    
    image.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
});}

chosenPokemon.addEventListener("drop", (event) => {  
    event.preventDefault();
    var pokemonId = event.dataTransfer.getData("text/plain");
    event.target.appendChild(document.getElementById(pokemonId));
    var pokemonHash = {
        charmander: 'Char charmander!',
        bulbasaur: 'Bulbasauuuur!',
        squirtle: 'Squirtle squirtle!',
        pikachu: 'Pika pika!'
    };
    var message = document.getElementById('pokemon-output');
    message.innerHTML = pokemonHash[pokemonId];

})


