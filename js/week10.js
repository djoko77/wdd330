var regButton = document.querySelectorAll('#reg-button')[0];

regButton.addEventListener('click', (event) => {
    console.log("get here 123");
    document.getElementById('registration').innerHTML = "Registration Complete";
    console.log("get here");
})

const email = document.getElementById('user-email');
const username = document.getElementById('user-name');
const message = document.getElementById('subsciption');

function subscribeNow() {

    // if (email.validity.valid && username.validity.valid) {
    //     message.textContent = ''; 
    //     message.className = 'error'; 
    //   }
    // else {
    //     showError();
    // }
   // document.getElementById('subscription').innerHTML = "Subscription Complete";

   if(email.validity.valueMissing) {
    message.textContent = 'Please enter an e-mail address.';
   }
    else if(email.validity.typeMismatch) {
    message.textContent = 'Entered value is not an e-mail address.';  
    }  
    document.getElementById('subscription').innerHTML = "Subscription Complete"; 

}
// function showError() {
    
// }
