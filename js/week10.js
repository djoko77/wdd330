// var regButton = document.querySelectorAll('#reg-button')[0];

// regButton.addEventListener('click', (event) => {
//     window.location = "https://djoko77.github.io/wdd330/week10/thanks-reg.html"
// })

var form2 = document.querySelectorAll('.form2')[0];
var email = document.getElementById('user-email');
const error = document.querySelector('#user-email + div.error');

email.addEventListener("input", (event) => {
    
    if (email.validity.valid) {
        error.textContent = ''; // Reset the content of the message
        error.className = 'error'; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError();
      }
})

form2.addEventListener('submit', (event) => {
    if(!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError();
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
    });

function showError() {
    if(email.validity.valueMissing) {
        // If the field is empty,
        // display the following error message.
        error.textContent = 'Blank field: Please enter your e-mail address!';
      } else if(email.validity.typeMismatch) {
        // If the field doesn't contain an email address,
        // display the following error message.
        error.textContent = 'Please enter a valid e-mail address!';
      }
      error.className = 'error active';
}



