import { Request, Response } from "express";
import { minimax } from "./AiPlayer";
import { Player, TicTacToe } from "./TicTacToe";

const gameController = (req: Request, res: Response) => {
    const ticTacToe = new TicTacToe();
    const { board } = req.query;

    try {
        ticTacToe.decodeBoard(board as string);
    } catch (e) {
        return res.status(400).send((e as Error).message)
    }

    ticTacToe.display()
    let move = minimax(ticTacToe.board, Player.O);
    if (move.index === undefined) {
        if (move.score === 0) {
            return res.send(ticTacToe.encodeBoard());
        } else if (move.score === 10) {
            return res.send(ticTacToe.encodeBoard());
        } 
        return res.send("You won");
    }

    ticTacToe.move(move.index, Player.O);
    const result = ticTacToe.encodeBoard()
    ticTacToe.reset();
    
    return res.send(result);
}

export default gameController;
