"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A Module for playing Tic Tac Toe in the console
 */
const AiPlayer_1 = require("./AiPlayer");
const TicTacToe_1 = require("./TicTacToe");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let ticTacToe = new TicTacToe_1.TicTacToe();
function play() {
    console.log("\n");
    ticTacToe.displayGameStatus();
    if (ticTacToe.isGameOver) {
        console.log("Game over");
        return;
    }
    if (ticTacToe.currentPlayer === TicTacToe_1.Player.X) {
        console.log("Enter a number between 0 and 8");
        let index = (0, prompt_sync_1.default)()(">_ ");
        if (index === null) {
            return;
        }
        ticTacToe.move(parseInt(index), TicTacToe_1.Player.X);
    }
    else {
        let index = (0, AiPlayer_1.minimax)(ticTacToe.board, TicTacToe_1.Player.O).index;
        if (index === undefined) {
            return;
        }
        ticTacToe.move(index, TicTacToe_1.Player.O);
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
