var regButton = document.querySelectorAll('#reg-button')[0];

regButton.addEventListener('click', (event) => {
    window.location = "https://djoko77.github.io/wdd330/week10/thanks-reg.html"
})

var subsButton = document.querySelectorAll('#subs-button')[0];
var email = document.getElementById('user-email');
var username = document.getElementById('user-name');

email.addEventListener("input", (event) => {
    
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Please enter a valid e-mail address!");
        email.reportValidity();
    } 

    else if (email.validity.valueMissing) {
        email.setCustomValidity("Email address cannot be blank");
        email.reportValidity();
    } 

    else {
    email.setCustomValidity("");
}
})

username.addEventListener("input", (event) => {
    
    if (username.validity.valueMissing) {
        username.setCustomValidity("Us cannot be blank");
        username.reportValidity();
    } 
    else {
        username.setCustomValidity("");
}
})


subsButton.addEventListener('click', (event) => {
    window.location = "https://djoko77.github.io/wdd330/week10/thanks-subs.html"
});

