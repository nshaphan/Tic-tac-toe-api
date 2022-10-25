/**
 * A Module for playing Tic Tac Toe in the console
 */
import { minimax } from "./AiPlayer";
import { Player, TicTacToe } from "./TicTacToe";
import prompt from "prompt-sync";

let ticTacToe = new TicTacToe();


function play() {
    console.log("\n");
    
    ticTacToe.displayGameStatus();
    if (ticTacToe.isGameOver) {
        console.log("Game over");
        return;
    }

    if (ticTacToe.currentPlayer === Player.X) {
        console.log("Enter a number between 0 and 8");
        let index = prompt()(">_ ");

        if (index === null) {
            return;
        }

        ticTacToe.move(parseInt(index), Player.X);
    } else {
        let index = minimax(ticTacToe.board, Player.O).index;

        if (index === undefined) {
            return;
        }
        ticTacToe.move(index, Player.O);
    }
}

function startGame() {
    while (true) {
        play();
        if (ticTacToe.isGameOver) {
            ticTacToe.printWinner();
            break;
        }
    }
}

startGame();

