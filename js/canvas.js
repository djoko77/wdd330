// Canvas
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.beginPath();
context.arc(75, 75, 60, 0, 2 * Math.PI);
context.stroke();
context.fillStyle = "lightgray";
context.fill(); 