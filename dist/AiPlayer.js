"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minimax = void 0;
const TicTacToe_1 = require("./TicTacToe");
const utils_1 = require("./utils");
function minimax(board, player) {
    const humanPlayer = TicTacToe_1.Player.X;
    const aiPlayer = TicTacToe_1.Player.O;
    let array = getAvailableMoves(board);
    if ((0, utils_1.isWinning)(board, humanPlayer)) {
        return {
            score: -10
        };
    }
    else if ((0, utils_1.isWinning)(board, aiPlayer)) {
        return {
            score: 10
        };
    }
    else if (array.length === 0) {
        return {
            score: 0
        };
    }
    let moves = [];
    for (let i = 0; i < array.length; i++) {
        let move = {};
        move.index = board[array[i]];
        board[array[i]] = player;
        if (player === aiPlayer) {
            let g = minimax(board, humanPlayer);
            move.score = g.score;
        }
        else {
            let g = minimax(board, aiPlayer);
            move.score = g.score;
        }
        board[array[i]] = move.index;
        moves.push(move);
    }
    let bestMove = 0;
    if (player === aiPlayer) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    return moves[bestMove];
}
exports.minimax = minimax;
function getAvailableMoves(board) {
    return board.filter(s => s !== TicTacToe_1.Player.O && s !== TicTacToe_1.Player.X);
}
