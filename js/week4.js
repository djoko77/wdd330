// Coding Exercise

const form = document.forms['search'];
form.addEventListener ('submit', search, false);
const input = form.elements.searchInput;

function search(event) {  
    alert('You search for ' + input.value);
    event.preventDefault();
}

function clickAge() {
class Person {
    constructor(firstName, age) {
        // construct the object using the arguments
        this.firstName = firstName;
        this.age = age;
    }
        // a method which returns the person's name and age
        describe() {
            return this.firstName + ", " + this.age +" years old";
        }
    }
    
    var jill = new Person("Jill", 24);
    alert(jill.describe());

}