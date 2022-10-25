"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AiPlayer_1 = require("./AiPlayer");
const TicTacToe_1 = require("./TicTacToe");
const gameController = (req, res) => {
    const ticTacToe = new TicTacToe_1.TicTacToe();
    const { board } = req.query;
    try {
        ticTacToe.decodeBoard(board);
    }
    catch (e) {
        return res.status(400).send(e.message);
    }
    ticTacToe.display();
    let move = (0, AiPlayer_1.minimax)(ticTacToe.board, TicTacToe_1.Player.O);
    if (move.index === undefined) {
        if (move.score === 0) {
            return res.send(ticTacToe.encodeBoard());
        }
        else if (move.score === 10) {
            return res.send(ticTacToe.encodeBoard());
        }
        return res.send("You won");
    }
    ticTacToe.move(move.index, TicTacToe_1.Player.O);
    const result = ticTacToe.encodeBoard();
    ticTacToe.reset();
    return res.send(result);
};
exports.default = gameController;
