"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBoard = exports.isWinning = void 0;
// winning combinations
function isWinning(board, player) {
    if ((board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)) {
        return true;
    }
    else {
        return false;
    }
}
exports.isWinning = isWinning;
function validateBoardString(boardString) {
    // replace all spaces with + sign
    boardString = boardString.replace(/ /g, "+");
    if (boardString.length !== 9) {
        throw new Error("Board string must be 9 characters long");
    }
    if (boardString.match(/[^xo+]/)) {
        throw new Error("Board string must only contain x, o, or +");
    }
}
function validateBoard(boardString) {
    var _a, _b;
    // validate board string
    validateBoardString(boardString);
    // Check if it is server's turn
    const xCount = ((_a = boardString.match(/x/g)) === null || _a === void 0 ? void 0 : _a.length) || 0;
    const oCount = ((_b = boardString.match(/o/g)) === null || _b === void 0 ? void 0 : _b.length) || 0;
    if (xCount !== oCount) {
        throw new Error("It is not the server's turn");
    }
}
exports.validateBoard = validateBoard;
