import { getPokemonData, qs } from './utilities.js';
import { writeToLS, removeFromLS, readFromLS } from './ls.js';

var pokemonInfo = [];

listPokemon();

//qs('#addTeam')[0].onclick = addPokemon;

// var fullInfo = pokemonInfo.concat(pokemonDesc);

// Add listener to the search button
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    document.querySelector('#pokemonData').innerHTML = "";
    let search = document.getElementById('search').value;
    console.log(search);
    let finalURLDetails = queryDetails(search)
    let finalURLDesc = queryDesc(search)
    console.log(finalURLDetails);
    console.log(finalURLDesc );

    getData(finalURLDetails, finalURLDesc);
 
})

function queryDetails(search) {
    const baseDetails = "https://pokeapi.co/api/v2/pokemon/"
    let pokemonDetails = baseDetails + `${search}`;
    return pokemonDetails;
}

function queryDesc(search) {
    const baseDesc = "https://pokeapi.co/api/v2/pokemon-species/"
    let pokemonDesc = baseDesc + `${search}`;
    return pokemonDesc;
}

function getData(finalURLDetails, finalURLDesc) {

     // Retrive the basci information about the pokemon
    getPokemonData(finalURLDetails).then( function (data) {
        console.log(data);
        saveDetailsPokemon(data);
    })
    
    //Retrieve the pokemon description
    getPokemonData(finalURLDesc).then( function (result) {
        console.log(result);
        saveDescPokemon(result);  
    })

}

function saveDetailsPokemon(data) {
    var pName = data.species.name;
    var img = data.sprites.front_default;
    var id = data.id;
    var height = data.height;
    var weight = data.weight;
    var hp = data.stats[0].base_stat;
    var attack = data.stats[1].base_stat;
    var defense = data.stats[2].base_stat;
    var speed = data.stats[5].base_stat;
    var move1 = data.moves[0].move.name
    var move2 = data.moves[1].move.name
    var move3 = data.moves[2].move.name
    if (data.types.length === 1) {
        var type1 = data.types[0].type.name;
        var type2 = null
    }
    else {
        var type1 = data.types[0].type.name;
        var type2 = data.types[1].type.name;
    }

    // pokemonInfo = [pName, img, id, height, weight, hp, attack, defense, speed, move1, move2, move3, type1, type2];

    pokemonInfo = new Pokemon(pName, id, img, type1, type2, hp, attack, defense, speed, move1, move2, move3, height, weight);

    //pokemonInfo.push(pokemon);

    //console.log(pokemon);

    const details = document.createElement('div');
    details.innerHTML = `<img class="pokemon-img" src="${img}">
                        <h2 class=pokemon-name><span>#${id} </span>${pName}</h2>`
    
    const output = document.getElementById('pokemonData');
    output.appendChild(details);
}

function saveDescPokemon(result) {
    var description = result.flavor_text_entries[1].flavor_text.replace(/(\r\n|\n|\r)/gm, " ") + " " + result.flavor_text_entries[2].flavor_text.replace(/(\r\n|\n|\r)/gm, " ") + result.flavor_text_entries[3].flavor_text.replace(/(\r\n|\n|\r)/gm, " ");

    const message = document.createElement('div');
    const output2 = document.getElementById('pokemonMessage');
    output2.innerHTML = " ";
    message.innerHTML = `<p class="short-desc">${description}</p><div type="button" class="pokemonBtn" id="addTeam" value="${result.id}">Add <span class="pokemon-name-btn">${result.name}</span> to my Team</div>`
    output2.append(message);

    var addBtn = document.getElementById('addTeam');
    addBtn.addEventListener('click', () => {
        addPokemon();
    })
}

class Pokemon {
    constructor(name, id, imgLink, type1, type2, hp, attack, defense, speed, move1, move2, move3, height, weight) {
        this.name = name;
        this.id = id;
        this.imgLink = imgLink;
        this.type1 = type1;
        this.type2 = type2;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
        this.move1 = move1;
        this.move2 = move2;
        this.move3 = move3;
        this.height = height;
        this.weight = weight;
    }
}

function addPokemon() {
    //console.log(pokemonInfo);
    const pokemon = pokemonInfo;
    const pokemonContent = createPokemon(pokemon);
    addToList(pokemonContent);
    writeToLS(pokemonInfo);
}

function createPokemon(pokemon) {

    //const pokemonList = readFromLS();

    const pokemonContent = document.createElement('li');
    pokemonContent.classList.add('single-pokemon');

    const clickPokemon = document.createElement('button');
    clickPokemon.setAttribute('data-name', pokemon.name);
    clickPokemon.innerText = pokemon.name;
    clickPokemon.classList.add('pokemon-clickable');
    //clickPokemon.onclick = displayFullData;
    clickPokemon.addEventListener('click', (event) => {
        //console.log(event.currentTarget.dataset.name);
        displayFullData(event.currentTarget.dataset.name);
    })

    const removeButton = document.createElement('button');
    removeButton.setAttribute('data-name', pokemon.name);
    removeButton.classList.add('remove-button');
    removeButton.innerText = "X";
    removeButton.addEventListener('click', (event) => {
        //console.log(event.currentTarget.dataset.name);
        deletePokemon(event.currentTarget.dataset.name);
    })

    //removeButton.onclick = removePokemon;

    pokemonContent.appendChild(clickPokemon);
    pokemonContent.appendChild(removeButton);

    // const pokemonTeam = document.getElementById('pokemon-party');
    // pokemonTeam.append(pokemonContent);

    return pokemonContent;

    //console.log(pokemonList);
}

function addToList(pokemonContent) {
    qs('#pokemon-party')[0].appendChild(pokemonContent);
    // utilities.qs('#error-message')[0].innerHTML = "";
    // utilities.qs('#add-task')[0].style.border = "1px solid black";
}

// Grab all the todos from the local storage and display it
function listPokemon() {
    const pokemonList = readFromLS();
    pokemonList.forEach(element => {
        const list = createPokemon(element)
        addToList(list);
    })
}

function displayFullData(target) {
    const pokemonList = readFromLS();

    const clickedPokemon = pokemonList.filter(pokemonList => pokemonList.name == target);
    //console.log(clickedPokemon[0].name);
    const pokemonStats = document.createElement('div');
    const fullDetails = document.getElementById('pokemon-full');
    fullDetails.innerHTML = " ";
    pokemonStats.innerHTML = `<div><span>Weight: </span>${clickedPokemon[0].weight}</div>
                            <div><span>Height: </span>${clickedPokemon[0].height}</div>`
    fullDetails.append(pokemonStats);
}

function deletePokemon(target) {
    // const targetPokemon = target.currentTarget;
    removeFromLS(target);
    qs('#pokemon-party')[0].innerHTML = '';
    listPokemon();
}


