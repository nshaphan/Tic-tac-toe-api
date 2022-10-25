import { Player } from "./TicTacToe";
import { isWinning } from "./utils";

interface Move {
    index?: number;
    score: number;
}

function minimax(board: Array<number | string>, player: string): Move {

    const humanPlayer = Player.X;
    const aiPlayer = Player.O;
    
    let array: Array<number> = getAvailableMoves(board);
    
    if(isWinning(board, humanPlayer)){
        return {
            score: -10
        }
    } else if (isWinning(board, aiPlayer)) {
        return {
            score: 10
        }
    } else if (array.length === 0) {
        return {
            score: 0
        }
    }

    let moves: Move[] = [];
    for (let i: number = 0; i < array.length; i++) {
        let move: Move | any = {};  
        move.index = board[array[i]]
        board[array[i]] = player

        if (player === aiPlayer) {
            let g = minimax(board, humanPlayer)
            move.score = g.score
        } else {
            let g = minimax(board, aiPlayer)
            move.score = g.score
        }
        board[array[i]] = move.index
        moves.push(move)
    }

    let bestMove: number = 0;
  
    if (player === aiPlayer) {
        let bestScore = -10000
        for (let i: number = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000
        for (let i: number = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score
                bestMove = i;
            }
        }
    }

    return moves[bestMove]
}

function getAvailableMoves(board: Array<number | string>): Array<number> {
    return board.filter(s => s !== Player.O && s !== Player.X) as Array<number>;
}

export { minimax };