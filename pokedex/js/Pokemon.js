import { getPokemonData, qs, clickSound, errorSound, searchSound, lightUp } from './utilities.js';
import { writeToLS, removeFromLS, readFromLS } from './ls.js';

var pokemonInfo = [];

var addBtn = document.getElementById('addTeam');
addBtn.addEventListener('click', () => {
    addPokemon();
})

listPokemon();

//qs('#addTeam')[0].onclick = addPokemon;

// var fullInfo = pokemonInfo.concat(pokemonDesc);

// Add listener to the search button
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', () => {
    document.querySelector('#pokemonData').innerHTML = "";
    let search = document.getElementById('search').value.toLowerCase();

    if (search == "" || search == "") {
        errorSound();
        searchError();
    }
    else {
    console.log(search);
    let finalURLDetails = queryDetails(search)
    let finalURLDesc = queryDesc(search)
    console.log(finalURLDetails);
    console.log(finalURLDesc );
    getData(finalURLDetails, finalURLDesc);
    }
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
        if (data == undefined) {
            lightUp();
            errorSound();
            searchError();
            // resultSearch = "error"
        }
        else {
            lightUp();
            searchSound();
            saveDetailsPokemon(data);
        }
    })
    
    //Retrieve the pokemon description
    getPokemonData(finalURLDesc).then( function (result) {
        console.log(result);
        if (result == undefined) {
            searchError();
            // resultSearch = "error"
        }
        else {
        saveDescPokemon(result);
        }
    })
}

function saveDetailsPokemon(data) {
    var pName = data.species.name;
    // var img = data.sprites.front_default;
    var id = parseInt(data.id);
    var height = data.height;
    var weight = data.weight;
    var hp = data.stats[0].base_stat;
    var attack = data.stats[1].base_stat;
    var defense = data.stats[2].base_stat;
    var speed = data.stats[5].base_stat;

    if (data.moves.length === 1) {
    var move1 = data.moves[0].move.name
    var move2 = " "
    var move3 = " "
    var move4 = " "
    }
    else {
        var move1 = data.moves[0].move.name
        var move2 = data.moves[1].move.name
        var move3 = data.moves[2].move.name
        var move4 = data.moves[3].move.name
    }
    if (data.types.length === 1) {
        var type1 = data.types[0].type.name;
        var type2 = " ";
    }
    else {
        var type1 = data.types[0].type.name;
        var type2 = data.types[1].type.name;
    }

    if (id < 650) {
        var img = "https://img.pokemondb.net/sprites/black-white/anim/normal/"+pName+".gif";
    }
    else {
        var img = "https://img.pokemondb.net/sprites/home/normal/"+pName+".png";
    }

    // pokemonInfo = [pName, img, id, height, weight, hp, attack, defense, speed, move1, move2, move3, type1, type2];

    pokemonInfo = new Pokemon(pName, id, img, type1, type2, hp, attack, defense, speed, move1, move2, move3, move4, height, weight);

    //pokemonInfo.push(pokemon);

    //console.log(pokemon);

    const details = document.createElement('div');
    details.innerHTML = `<img class="pokemon-img" src="${img}">
                        <h2 class=pokemon-name><span>#${id} </span>${pName}</h2>`
    
    const output = document.getElementById('pokemonData');
    output.appendChild(details);
}

function saveDescPokemon(result) {
    // var description = result.flavor_text_entries[1].flavor_text + " " + result.flavor_text_entries[2].flavor_text;
    var description = result.flavor_text_entries[1].flavor_text;

    const message = document.createElement('div');
    const output2 = document.getElementById('pokemonMessage');
    output2.innerHTML = " ";
    message.innerHTML = `<p class="short-desc">${description}</p>`
    output2.append(message);

    // button.innerHTML = `<div type="button" class="pokemonBtn" id="addTeam" value="${result.id}">Add <span class="pokemon-name-btn">${result.name}</span> to my Team</div>`
   
}

class Pokemon {
    constructor(name, id, imgLink, type1, type2, hp, attack, defense, speed, move1, move2, move3, move4, height, weight) {
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
        this.move4 = move4;
        this.height = height;
        this.weight = weight;
    }
}

function addPokemon() {
    //console.log(pokemonInfo);

    const message = document.getElementById('pokemon-full');
    message.innerHTML = " ";
    const pokemon = pokemonInfo;
 
    //console.log(pokemon.id);
    const pokemonList = readFromLS();
    //console.log(pokemonList.some(item => item.name == pokemon.name));

    if (pokemonList.length == 3) {
        console.log(pokemonList.length);
        const pokemonError = document.createElement('div');
        const errorMsg = document.getElementById('pokemon-full');
        errorMsg.innerHTML = " ";
        pokemonError.innerHTML = `<div class="message"><p class="message-title">Error</p><p class="prompt-msg">Your Pokemon party is full. Please remove a Pokemon to add more members.</p></div>`;
        errorMsg.append(pokemonError);
        console.log(pokemonList);
        errorSound();
    }
    else if (pokemonList.some(item => item.name == pokemon.name)) {
        const pokemonError = document.createElement('div');
        const errorMsg = document.getElementById('pokemon-full');
        errorMsg.innerHTML = " ";
        pokemonError.innerHTML = `<div class="message"><p class="message-title">Error</p><p class="prompt-msg">The Pokemon you are about to add is already part of your party. Please pick another Pokemon.</p></div>`;
        errorMsg.append(pokemonError);
        console.log(pokemonList);
        errorSound();
    }
    else if (pokemon.id == undefined) {
        message.innerHTML = `<div class="message"><p class="message-title">Error</p><p class="prompt-msg">This Pokemon cannot be added. Please search another Pokemon.</p></div>`;
        errorSound();
    }
    else {
    const pokemonContent = createPokemon(pokemon);
    addToList(pokemonContent);
    writeToLS(pokemonInfo);
    message.innerHTML = `<div class="message"><p class="message-title">Success</p><p class="prompt-msg"><span>${pokemon.name}</span> has been added to your team!</p></div>`;
    clickSound();
    }

    countPokemon()
}

function createPokemon(pokemon) {

    //const pokemonList = readFromLS();

    const pokemonContent = document.createElement('li');
    pokemonContent.setAttribute("id", "party");
    pokemonContent.classList.add('single-pokemon');

    const clickPokemon = document.createElement('button');
    clickPokemon.setAttribute('data-name', pokemon.name);
    // clickPokemon.innerText = pokemon.name;
    clickPokemon.innerText = `#${pokemon.id} ${pokemon.name}`;
    clickPokemon.classList.add('pokemon-clickable');
    //clickPokemon.onclick = displayFullData;
    clickPokemon.addEventListener('click', (event) => {
        //console.log(event.currentTarget.dataset.name);
        displayFullData(event.currentTarget.dataset.name);
        // clickPokemon.classList.add('active');
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
    countPokemon();
}

function displayFullData(target) {
    const pokemonList = readFromLS();

    const clickedPokemon = pokemonList.filter(pokemonList => pokemonList.name == target);
    //console.log(clickedPokemon[0].name);
    const pokemonStats = document.createElement('div');
    const fullDetails = document.getElementById('pokemon-full');
    fullDetails.innerHTML = " ";
    pokemonStats.innerHTML = `<h3 class="pokemon-title">${clickedPokemon[0].name}</h3><div class="column-screen">
        <div>
            <h3 class="screen-label">BASIC INFO</h3>
            <div>Weight: ${clickedPokemon[0].weight/10} kg </div>
            <div>Height: ${clickedPokemon[0].height/10} m </div>
            <h3 class="screen-label">TYPE</h3>
            <div class="subtext">${clickedPokemon[0].type1}</div>
            <div class="subtext">${clickedPokemon[0].type2}</div>
        </div>
        <div>
            <h3 class="screen-label">STATS</h3>
            <div>HP: ${clickedPokemon[0].hp}</div>
            <div>Attack: ${clickedPokemon[0].attack}</div>
            <div>Defense: ${clickedPokemon[0].defense}</div>
            <div>Speed: ${clickedPokemon[0].speed}</div>
        </div>
        <div>
        <h3 class="screen-label">MOVES</h3>
        <div class="subtext">${clickedPokemon[0].move1}</div>
        <div class="subtext">${clickedPokemon[0].move2}</div>
        <div class="subtext">${clickedPokemon[0].move3}</div>
        <div class="subtext">${clickedPokemon[0].move4}</div>
        </div>
    </div>`;
    fullDetails.append(pokemonStats);
    clickSound();
}

function deletePokemon(target) {
    // const targetPokemon = target.currentTarget;
    removeFromLS(target);
    clickSound();
    qs('#pokemon-party')[0].innerHTML = '';
    qs('#pokemon-full')[0].innerHTML = `<div class="message"><p class="message-title">Success</p><p class="prompt-msg"><span>${target}</span> has been removed from your party!</p></div>`;
    listPokemon();
}

function searchError() {
    qs('#pokemonData')[0].innerHTML = '<div class="error-center"><span class="error-text">4<span><img class="pokeball-img" src="./img/pokeball.png" class="error-img"><span class="error-text">4</span></div>';
    qs('#pokemonMessage')[0].innerHTML = '<div><p class="short-desc">The Pokemon you are searching is not available in our database or your input is empty. Please search again!</p></div>';
}

function countPokemon() {
    const pokemonList = readFromLS();
    qs('#team-number')[0].innerText = `${pokemonList.length}/3`
}

