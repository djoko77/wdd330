// Using setInterval()
const squareElement = document.getElementById('square');
let angle = 0;
setInterval( () => {    
    angle = (angle + 2) % 360;    
    squareElement.style.transform = `rotate(${angle}deg)`
}, 1000/60);

// Using requestAnimationFrame()
const squareElement2 = document.getElementById('square-two');
let angle2 = 0;
function rotate() {    
    angle2 = (angle2 + 2)%360;    
    squareElement2.style.transform = `rotate(${angle2}deg)`    
    window.requestAnimationFrame(rotate);
}
const id = requestAnimationFrame(rotate);

function alertMethod() {
    window.alert("The window.alert() method will pause the execution of the program and display a message in a dialog box");
}

function confirmMethod() {
    window.confirm("Are you sure you want to delete this file?");
}

function promptMethod() {
    window.prompt("Please enter your favorite Star Wars character:");
}

