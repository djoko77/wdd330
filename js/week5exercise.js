// coding exercises
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  } 
}

function reliableMultiply(a, b) {
    for (;;) {
        try {
           return  primitiveMultiply(a, b) 
        } catch (err) {
          if (!(err instanceof MultiplicatorUnitFailure)) {
            throw err;
          }
        }
      }
}

function showMultiply() {
alert((reliableMultiply(8, 6)));
console.log(reliableMultiply(8, 6));
// → 48
}

// Using debugger 

function vote(age) {
    debugger;
    var years = document.getElementById("ageYears").value
    if(years < 18) {
        debugger;
    document.getElementById("prompt").innerHTML = 'Sorry, below 18 cannot vote'
    } 
    else {
        debugger;
    document.getElementById("prompt").innerHTML = 'Yes, you are old enough to vote!'
    }
}