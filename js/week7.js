const textButton = document.getElementById('click-now');
const output = document.getElementById('quote');

const quoteURL = 'https://type.fit/api/quotes';

textButton.addEventListener('click', () => {
    fetch(quoteURL)
    .then( response => {
        output.innerHTML = 'Loading the quote...';
    if(response.ok) {
        return response;
    }
        throw Error(response.statusText);
    })
    //.then( response => response.text() )
    .then( response => response.json() )
    //.then( quote => output.innerText = quote.quotes[0].text)
    .then( quote => output.innerText = quote[Math.floor(Math.random() * 100)].text + " - "+ quote[Math.floor(Math.random() * 100)].author)
    .catch( error => console.log('There was an error:', error))
},false);

