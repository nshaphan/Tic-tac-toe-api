// winning combinations
function isWinning(board: Array<number|string>, player: string) {
    if (
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function validateBoardString(boardString: string) {

    // replace all spaces with + sign
    boardString = boardString.replace(/ /g, "+");
    
    if (boardString.length !== 9) {
      throw new Error("Board string must be 9 characters long");
    }
    if (boardString.match(/[^xo+]/)) {
      throw new Error("Board string must only contain x, o, or +");
    }
  }

  function validateBoard(boardString: string) {
    // validate board string
    validateBoardString(boardString);

    // Check if it is server's turn
    const xCount = boardString.match(/x/g)?.length || 0;
    const oCount = boardString.match(/o/g)?.length || 0;
    
    if (xCount !== oCount) {
        throw new Error("It is not the server's turn");
    }
  }
  export { isWinning, validateBoard };