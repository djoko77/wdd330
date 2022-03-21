export function getJSON(url) {
    return fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw Error(response.statusText);
            } else {
                return response.json();
            }
        })
        .catch(function(error) {
            console.log(error);
        });
}

export function getPokemonData(url) {
    return getJSON(url);
}

export function qs(selector) { 
    var element = document.querySelectorAll(selector);
    if (element != null) 
    return element;
    else {
      element = null
    }
  }

  export function clickSound() {
    const clickSound = document.getElementById("click-sound");
    clickSound.currentTime = 0;
    clickSound.play();
  }
  
  export function errorSound() {
    const errorSound = document.getElementById("error-sound");
    errorSound.currentTime = 0;
    errorSound.play();
  }

  export function searchSound() {
    const searchSound = document.getElementById("search-sound");
    searchSound.currentTime = 0;
    searchSound.play();
  }

  export function lightUp() {
    const blink = document.getElementById('light-click');
    blink.classList.add('light-circle1');
  }
  
  
  