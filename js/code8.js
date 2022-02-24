// Canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.beginPath();
context.arc(75, 75, 60, 0, 2 * Math.PI);
context.stroke();
context.fillStyle = "lightgray";
context.fill(); 

// Drag and Drop
var pokemon = document.querySelectorAll(".pokemon-img");
var pokemon = null;
for (var i=0; i < pokemon.length; i++) {    
    pokemon = image[i];    
    pokemon.addEventListener('dragstart', function (event) {
       // handle the dragstart event    
       event.dataTransfer.setData("text/plain", this.id);
});}

var chosenPokemon = document.getElementById("choosen-box");
chosenPokemon.addEventListener("dragover", function(event) {
    event.preventDefault();
}); 

chosenPokemon.addEventListener("drop", function(event) {    
    var pokemonHash = {
        charmander = 'char char!',
        bulbasaur = 'bulba!',
        squirtle = 'squir squir!',
        pikachu = 'pika pika!'
    };

    var message = document.getElementById('output');
    var pokemonId = event.originalEvent.dataTransfer.getData("text/plain");
    message.innerHTML = pokemonHash[pokemonId];
})

