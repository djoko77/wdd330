/************************************/
/**** Dynamic Table of Contents ****/
/**********************************/

function createList() {

    // Weekly list of links
    const links = [
        {
            label: "Week 1 Notes",
            url: "week1/index.html"
        },
        {
            label: "Week 2 Notes",
            url: "week2/index.html"
        }
    ];

        //  For each of the items in the array of links
        links.forEach(weekly => {
        
        // Create an li element
        let li = document.createElement("li");

        // Create an anchor element
        let a = document.createElement("a");

        // Create the text node 
        let textNode = document.createTextNode(weekly.label);
        
        // Append the text node to anchor element
        a.appendChild(textNode);

        // Set the href attribute
        a.setAttribute("href", weekly.url);
    
        // Append the anchor element to li element
        li.appendChild(a);
        
        // Select the ol element from index.html
        let list = document.getElementById("activity");
        
        // Append the li element to the list
        list.appendChild(li);
        }
        )}

// Run the function
createList();

// Week 1 localStorage

function loadStory() {
    var storyName = document.getElementById("name_input").value
    var storyHTML = localStorage.getItem(storyName)
    document.getElementById("story_editor").value = storyHTML
}

function saveStory(){
    var storyName = document.getElementById("name_input").value
    var storyHTML = document.getElementById("story_editor").value
    localStorage.setItem(storyName, storyHTML)
}

function displayStory(){
    var storyHTML = document.getElementById("story_editor").value
    document.getElementById("story_display").innerHTML = storyHTML
}

// Week 2 functions

/*
Calling a function
*/

function greet() {
    return "Good Morning, My Young Padawan!";
}

function clickGreetings() {
    let salutation = greet();
    document.getElementById("jedi-greeting").innerHTML = salutation;
}

/*
Write a function equals that checks two values for strict equality. If the two values are equal, 
the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
*/

function equals () {
    var firstNumber = document.getElementById("number1").value;
    var secondNumber = document.getElementById("number2").value;

    if (firstNumber === secondNumber) {
        document.getElementById("show-result").innerHTML = "EQUAL"
    }
    else {
        document.getElementById("show-result").innerHTML = "UNEQUAL"
    }
}

/*
TEAM ACTIVITY Week 2 - 1
1 Add a text input and a button. Put an empty div with an ID below those.
2 Add a script tag, write a function that will read the contents of the input, and write them to the div.
3 Call the function when the button is pressed.
*/

function displayMessage() {
    var messageNow = document.getElementById("message").value;
    document.getElementById("empty-box").innerHTML = messageNow;
}

/*
TEAM ACTIVITY Week 2 - 2

1. Write a new function that expects a number as an argument. 
It should take that number and sum all the numbers up to the number provided. 
(ie n=5…so it would do 1+2+3+4+5 = 15) It should return that value.

2. When the button is pressed it should read the number from the input. 
Make sure it is a valid number, call the summing function you just wrote, 
and output the result to the div.

*/

function conAddition(number) {

    if (isInteger(document.getElementById("number").value)) {
        let sum = parseInt(number)
        
        for (let i = 0; i <= number; i++) {
            sum += i;
        }
    document.getElementById("addition-box").innerHTML = sum;
    }

    else {
        document.getElementById("addition-box").innerHTML = "Wrong input! Please enter a number"
    }
}

/*
TEAM ACTIVITY Week 2 - 3

1. Add an additional input to your HTML file.
2. Add a + button.
3. Write a function that will take the numbers from each input, 
add them together, and output the result to a div

*/

function addNumbers() {

    let firstNumber = document.getElementById("add1").value;
    let secondNumber = document.getElementById("add2").value;

    let sum = parseInt(firstNumber) + parseInt(secondNumber);

    document.getElementById("addition-result").innerHTML = sum;

}

