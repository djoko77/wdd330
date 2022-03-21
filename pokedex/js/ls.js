// Write the array object to the local storage
export function writeToLS(pokemon) {
    const pokemonList = readFromLS();
    pokemonList.push(pokemon);
    localStorage.setItem('pokemonList', JSON.stringify(pokemonList));
}

// Remove the pokemon from the local storage by using filter and then update it
export function removeFromLS(target) {
    const pokemonList = readFromLS();
    const updatedList = pokemonList.filter(pokemonList => pokemonList.name != target)
    localStorage.setItem('pokemonList', JSON.stringify(updatedList));
}

// Read from the local storage and count the tasks
export function readFromLS() {
    const pokemonListText = localStorage.getItem('pokemonList');
    let pokemonList = [];

    if(pokemonListText) {
    pokemonList = JSON.parse(pokemonListText);
    }
    else if (pokemonList == undefined || pokemonList == null){
        localStorage.clear();
        pokemonList = JSON.parse(pokemonListText);
    }
    return pokemonList;
}

