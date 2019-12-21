A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach 
the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

Note: m and n will be at most 100.

Example 1:

Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]

var finalResult = UniquePath([[0,0], [0,0], [0,0]]);

console.log(finalResult, "final");

function UniquePath(grid){
  var m = grid.length;
  var n = grid[0].length;
  // console.log(m, n, "hjfjhjdhjd")

  return findAllPath(0, 0, m, n, 0, grid);
  function findAllPath(row, col, m, n, result, grid){
    if(row>=m, col>=n ){
      return result
    }

    if(row==m-1 && col==n-1){
      return result+1
    }

    if(row+1<m){
      if(grid[row+1][col] == 0){
        result = findAllPath(row+1, col, m, n, result, grid)
      }
    }

    if(col+1<n){  
      if(grid[row][col+1] == 0){
        result = findAllPath(row, col+1, m, n, result, grid)
      }
    }

    return result
  }
}
