const game = new Map();
document.querySelector('.tictac').addEventListener('click', (event) => {

    if (document.getElementById('player').textContent === "X") {
            document.getElementById(event.target.id).innerHTML = "X"
            document.getElementById("player").innerHTML = "O"
            game.set(event.target.id, "X");
            gameStatus()
        }
    else {
        document.getElementById(event.target.id).innerHTML = "O"
        document.getElementById("player").innerHTML = "X"
        game.set(event.target.id, "O")
        gameStatus();
   }
 // console.log(game);            
});

function gameStatus() {

    if (game.get("up-left") === "X" && game.get("up-mid")  === "X" && game.get("up-right")  === "X" ) {
         document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
    }

    else if (game.get("up-left") === "O" && game.get("up-mid")  === "O" && game.get("up-right")  === "O" ) {
        document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }

    else if (game.get("mid-left") === "X" && game.get("mid-mid")  === "X" && game.get("mid-right")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
   }

   else if (game.get("mid-left") === "O" && game.get("mid-mid")  === "O" && game.get("mid-right")  === "O" ) {
        document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }

    else if (game.get("down-left") === "X" && game.get("down-mid")  === "X" && game.get("down-right")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
   }

   else if (game.get("down-left") === "O" && game.get("down-mid")  === "O" && game.get("down-right")  === "O" ) {
    document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }

    else if (game.get("up-left") === "X" && game.get("mid-left")  === "X" && game.get("down-left")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
   }

   else if (game.get("up-left") === "O" && game.get("mid-left")  === "O" && game.get("down-left")  === "O" ) {
    document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }   

    else if (game.get("up-mid") === "X" && game.get("mid-mid")  === "X" && game.get("down-mid")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
    }

    else if (game.get("up-mid") === "O" && game.get("mid-mid")  === "O" && game.get("down-mid")  === "O" ) {
        document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }  

    else if (game.get("up-right") === "X" && game.get("mid-right")  === "X" && game.get("down-right")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
    }
    
    else if (game.get("up-right") === "O" && game.get("mid-right")  === "O" && game.get("down-right")  === "O" ) {
        document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }

    else if (game.get("up-right") === "X" && game.get("mid-mid")  === "X" && game.get("down-left")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
    }

    else if (game.get("up-right") === "O" && game.get("mid-mid")  === "O" && game.get("down-left")  === "O" ) {
        document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }

    else if (game.get("up-left") === "X" && game.get("mid-mid")  === "X" && game.get("down-right")  === "X" ) {
        document.getElementById("result").innerHTML = "Player X Wins! Congratulation!"
    }

    else if (game.get("up-left") === "O" && game.get("mid-mid")  === "O" && game.get("down-right")  === "O" ) {
        document.getElementById("result").innerHTML = "Player O Wins! Congratulation!"
    }

    else if (game.size === 9) {
        document.getElementById("result").innerHTML = "Tie! It's a draw!"
    }

}

function resetBoard() {
    document.getElementsByClassName("board").innerHTML = "";
}
