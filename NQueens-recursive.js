//The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

Example:

Input: 4
Output: [
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]
Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above.

var finalResult = solveNQueen(4);
console.log(finalResult, "Result");
function solveNQueen(n){
  var board=[];
  for(let row=0; row<n; row++){
    board[row]=[];
    for(let col=0; col<n; col++){
      board[row][col]= ".";
    }
  }
  nQueens(board, n, 0);
  return board;
}

function nQueens(board, n, row){
  if(row>=n){
    return true
  }
  for(let i=0; i<n; i++){
    if(isSafe(board, row, i, n)){
      board[row][i]= "Q";
      if(nQueens(board, n, row+1)){
        return true
      }
      board[row][i]= ".";
    }
  }
  return false
}

function isSafe(board, row, i, n){
  //colums
  for(let x=0; x<row; x++){
    if(board[x][i]=="Q"){
      return false
    }
  }

  //for upperleft diagonal
  for(let x=row, y=i; x>=0 && y>=0; x--, y--){
    if(board[x][y]=="Q"){
      return false
    }
  }

  //for upperright diagonal
  for(let x=row, y=i; x>=0 && y<n; x--, y++){
    if(board[x][y]=="Q"){
      return false
    }
  }

  return true
}
