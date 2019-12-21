  
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach 
// the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// Note: m and n will be at most 100.

// Example 1:

// Input:
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

var finalResult = FindAllPath([[1]]);

console.log(finalResult);

function FindAllPath(obstacleGrid){
  var m=obstacleGrid.length;
  var n=obstacleGrid[0].length;
  var dpMat=[];
  for(let row=0; row<m; row++){
    dpMat[row]=[]
    for(let col=0; col<n; col++){
      if(obstacleGrid[row][col]==0){
        if(row==0 && col==0){
          dpMat[row][col]=1;
        }else if(row-1 < 0){
          dpMat[row][col] = dpMat[row][col-1]
        }else if(col-1 < 0){
          dpMat[row][col] = dpMat[row-1][col]
        }else{
          dpMat[row][col] = dpMat[row][col-1] + dpMat[row-1][col]
        }
      }
      else{
        dpMat[row][col] = 0;
      }
    }
  }
  return dpMat[m-1][n-1]
}
