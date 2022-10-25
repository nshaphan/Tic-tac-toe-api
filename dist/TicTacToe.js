"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.TicTacToe = void 0;
const utils_1 = require("./utils");
const Player = {
    BLANK: " ",
    X: "x",
    O: "o",
};
exports.Player = Player;
class TicTacToe {
    constructor() {
        this.board = [];
        this.BOARD_WIDTH = 3;
        this.aiPlayer = Player.O;
        this.humanPlayer = Player.X;
        this.moveCount = 0;
        this.currentPlayer = this.humanPlayer;
        this.winner = Player.BLANK;
        this.isGameOver = false;
        // initialize board with numbers from 0 to 8
        this.board = Array.from(Array(this.BOARD_WIDTH * this.BOARD_WIDTH).keys());
        this.currentPlayer = this.humanPlayer;
    }
    /**
     * encode board as a query string
     * @example
     * encodeBoard([0, 1, "x", 3, 4, "o", 5, 7, 8]) // "++x++o++"
     */
    encodeBoard() {
        let query = "";
        for (let i = 0; i < this.board.length; i++) {
            if (![Player.O, Player.X].includes(this.board[i].toString())) {
                query += "+";
            }
            else {
                query += this.board[i];
            }
        }
        return query;
    }
    /**
     * decode board from a query string
     * @example
     * decodeBoard("++x++o++") // [0, 1, "x", 3, 4, "o", 5, 7, 8]
     */
    decodeBoard(boardStr) {
        const board = [];
        (0, utils_1.validateBoard)(boardStr); // throws error if boardStr is invalid
        for (let i = 0; i < boardStr.length; i++) {
            if (boardStr[i] === " ") {
                board.push(i);
            }
            else {
                board.push(boardStr[i]);
                this.moveCount += 1;
            }
        }
        this.board = board;
    }
    /**
     * reset board to initial state
     * @example
     * reset() // [0, 1, 2, 3, 4, 5, 6, 7, 8]
     */
    reset() {
        this.board = Array.from(Array(9).keys());
        this.moveCount = 0;
    }
    move(index, player) {
        if (this.board[index] !== Player.X || this.board[index] !== Player.O) {
            this.moveCount++;
            this.board[index] = player;
            if (player === this.humanPlayer) {
                this.currentPlayer = this.aiPlayer;
            }
            else {
                this.currentPlayer = this.humanPlayer;
            }
            if ((0, utils_1.isWinning)(this.board, player)) {
                this.winner = player;
                this.isGameOver = true;
            }
            else if (this.moveCount > this.BOARD_WIDTH * this.BOARD_WIDTH - 1) {
                this.winner = Player.BLANK;
                this.isGameOver = true;
            }
        }
        else {
            console.log("Invalid move");
        }
    }
    display() {
        let str = "";
        for (let i = 0; i < this.BOARD_WIDTH; i++) {
            for (let j = 0; j < this.BOARD_WIDTH; j++) {
                if (![Player.X, Player.O].includes(this.board[i * this.BOARD_WIDTH + j].toString())) {
                    str += "-";
                }
                else {
                    str += this.board[i * this.BOARD_WIDTH + j];
                }
                str += " ";
            }
            if (i !== this.BOARD_WIDTH - 1) {
                str += "\n";
            }
        }
        console.log(str);
    }
    displayGameStatus() {
        this.display();
        console.log(this.currentPlayer.toUpperCase() + "'s turn");
    }
    printWinner() {
        console.log("\n");
        console.log("GAME OVER!");
        console.log("\n");
        this.display();
        if (this.winner === Player.BLANK) {
            console.log("\nGame is a draw".toUpperCase());
        }
        else {
            console.log("\nPlayer " + this.winner + " won!".toUpperCase());
        }
    }
}
exports.TicTacToe = TicTacToe;
