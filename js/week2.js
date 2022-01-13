// Week 2 functions

/*
Calling a function
*/

function greet() {
    return "Good Morning, My Young Padawan!"
}

function clickGreetings() {
    let salutation = greet()
    document.getElementById("jedi-greeting").innerHTML = salutation
}

/*
Write a function equals that checks two values for strict equality. If the two values are equal, 
the string 'EQUAL' should be returned. If they are unequal, you should get 'UNEQUAL'.
Example: equals(1, 1) should return 'EQUAL' and equals(1, 2) should return 'UNEQUAL'.
*/

function equals () {
    var firstNumber = document.getElementById("number1").value
    var secondNumber = document.getElementById("number2").value

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
    var messageNow = document.getElementById("message").value
    document.getElementById("empty-box").innerHTML = messageNow
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

function sumNumber() {
    let myNumber = parseInt(document.getElementById("numberInput").value);
    let mySum = 0;
    
    for (let previousNumber = myNumber - 1; previousNumber > 0; previousNumber--){
    mySum = mySum + previousNumber;
    }
    document.getElementById("showSum").innerHTML = parseInt(myNumber + mySum);
    }

    function myNumbers(sign) {
        let myNumber = parseInt(document.getElementById("number1Input").value);
        let myNumber2 = parseInt(document.getElementById("number2Input").value);
        let sum;
        
        if (sign == "add") {
        sum = myNumber + myNumber2;
        }
        
        else if (sign == "subtract") {
        sum = myNumber - myNumber2;
        }
        
        else if (sign == "multiply") {
        sum = myNumber * myNumber2;
        }
        
        else {
        sum = myNumber / myNumber2;
        }
        
        document.getElementById("sumAll").innerHTML = parseInt(sum);
        }

/*
function conAddition(numbers) {

    if (Number.isInteger(numbers)) {

        let sum = 0
        
        for (let i = 0; i <= numbers; i++) {
            sum += i;
        }
    document.getElementById("addition-box").innerHTML = sum
    }

    else {
        document.getElementById("addition-box").innerHTML = "Wrong input! Please enter a number"
    }
}
*/

/*
TEAM ACTIVITY Week 2 - 3

1. Add an additional input to your HTML file.
2. Add a + button.
3. Write a function that will take the numbers from each input, 
add them together, and output the result to a div

*/

// function addNumbers() {

//     let firstNumber = document.getElementById("add1").value
//     let secondNumber = document.getElementById("add2").value

//     let sum = parseInt(firstNumber) + parseInt(secondNumber)

//     document.getElementById("addition-result").innerHTML = sum

// }

