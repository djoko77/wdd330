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
  