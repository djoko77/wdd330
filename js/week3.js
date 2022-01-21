// JS Exercises

// Objects
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

function showBefore() {
    document.getElementById('show-result1').innerHTML =
    "name: "+ student.name + "  sclass: " + student.sclass + "  rollno:" + student.rollno;
}

function deleteProperty() {

    delete student.rollno;

    document.getElementById('show-result2').innerHTML =
    "name: "+ student.name + "  sclass: " + student.sclass + "  rollno:" + student.rollno;

    console.log(student);

}

// DOM

function js_style() {
    text.style.fontSize = "25pt";
    text.style.fontFamily = "Times New Romans";
    text.style.color = "blue";
}

// Event

var events = document.getElementById("eventButton");
events.addEventListener("mouseover", mouseOver);
events.addEventListener("click", clickButton);
events.addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("eventResult").innerHTML += "Moused over!<br>";
  }
  
  function clickButton() {
    document.getElementById("eventResult").innerHTML += "Clicked!<br>";
  }
  
  function mouseOut() {
    document.getElementById("eventResult").innerHTML += "Moused out!<br>";
  }
