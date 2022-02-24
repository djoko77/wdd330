// Star Wars API

// Section to display the output
const output = document.getElementById('sw-people');

// Blank UL for next and prev url
var nextPage = ""
var prevPage = ""

// Array to store the 10 characters per page
var peopleArray = [];

// Default url (page 1)
var peopleAPI = "https://swapi.dev/api/people/"

// Add listeners to buttons 1-9
const buttons = document.querySelectorAll('.load-button');
buttons.forEach(button => button.addEventListener('click', event  => { 
    if (event.target.getAttribute("value") == 1) {
        location.reload()
    }
    else {
        peopleAPI = 'https://swapi.dev/api/people/?page='+event.target.getAttribute("value");
        document.querySelector('#sw-people').innerHTML = "";
        pageLoad(peopleAPI);
    }
}))

// Add listeners to prev/next buttons
var nextButton = document.getElementById('nextPage');
var prevButton = document.getElementById('previousPage');

nextButton.addEventListener('click', () => {
    document.querySelector('#sw-people').innerHTML = "";
    pageLoad(nextPage)
})

prevButton.addEventListener('click', () => {
    document.querySelector('#sw-people').innerHTML = "";
    console.log(prevPage);
    pageLoad(prevPage)
})

// Constructor for the people object
class People {
    constructor(name, height, mass, hairColor, skinColor, eyeColor, birthyear, gender) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hairColor = hairColor;
        this.skinColor = skinColor;
        this.eyeColor = eyeColor;
        this.birthyear = birthyear;
        this.gender = gender;
    }
}

// Function to populate the data in the page
function pageLoad(peopleAPI) {
    fetch(peopleAPI)
    .then( response => { 
        if(response.ok) {
            return response;
        }
    throw Error(response.statusText);
})
    .then( response => response.json() ) 
    .then( character => {
        
        var list = document.createElement('div');

        for (var i = 0; i < character.results.length; i++) {

        let oneCharacter = new People(character.results[i].name, 
            character.results[i].height, character.results[i].mass, character.results[i].hair_color, 
            character.results[i].skin_color, 
            character.results[i].eye_color, 
            character.results[i].birth_year, 
            character.results[i].gender)
            
            peopleArray.push(oneCharacter);

            //console.log(oneCharacter);

        var item = document.createElement('div');
        item.classList.add('character');
         // Set its contents:
         item.setAttribute('data-name', character.results[i].name);
         item.innerHTML = `<h2>${character.results[i].name}</h2>
                         <div>Height: <span>${character.results[i].height} cm.</span></div>
                         <div>Mass: <span>${character.results[i].mass} kg.</span></div>
                         <div>Birth Year: <span>${character.results[i].birth_year}</span></div>
                         <div>Gender: <span>${character.results[i].gender}</span></div>`

                         // Set the prev and next page URLs
                         nextPage = character.next;
                         prevPage = character.previous;

                        // Add a conditional to hide and display the prev and next buttons
                        if (nextPage == null) {
                            nextButton.classList.add("hide");
                        }
                        else {
                            nextButton.classList.remove("hide");
                        }
                
                        if (prevPage == null) {
                            prevButton.classList.add("hide");
                        }
                        else {
                            prevButton.classList.remove("hide");
                        }

                         // Add event listeners to each list of character
                        item.addEventListener('click', event => {
                        var clickedCharacter = peopleArray.filter(peopleArray => peopleArray.name == event.currentTarget.dataset.name)
            
                        clickedCharacter.forEach(content => {
                                const navButttons = document.getElementById('navButtons');
                                navButttons.classList.add('hide');
                                const fullCharacterData = showFullInfo(content);           
                                output.innerHTML = "";
                                output.appendChild(fullCharacterData); 
            })
        })  
        
        list.appendChild(item);
}

output.appendChild(list);

})
.catch( error => console.log('There was an error:', error))
}

// Function to create the full detail section of the clicked character 
function showFullInfo(clickedCharacter) {
    var fullInfo = document.createElement('div');
    fullInfo.classList.add('full-details');
    fullInfo.innerHTML = `<h2>${clickedCharacter.name}</h2>
    <div>Height: <span>${clickedCharacter.height} cm.</span></div>
    <div>Mass: <span>${clickedCharacter.mass} kg.</span></div>
    <div>Hair Color: <span>${clickedCharacter.hairColor}</span></div>
    <div>Skin Color: <span>${clickedCharacter.skinColor}</span></div>
    <div>Eye Color: <span>${clickedCharacter.eyeColor}</span></div>
    <div>Birth Year: <span>${clickedCharacter.birthyear}</span></div>
    <div>Gender: <span>${clickedCharacter.gender}</span></div>
    <button class="backHome" onclick="window.location.reload()">Go Back</button>`
    return fullInfo;
}

// Run the page load function with the default URL
pageLoad(peopleAPI)
