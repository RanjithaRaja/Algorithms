// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. 
// The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Note: m and n will be at most 100.

// Example 1:

// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right
// Example 2:

// Input: m = 7, n = 3
// Output: 28
7,3
var finalResult = UniquePath(7,3)

console.log(finalResult)

function UniquePath(m, n) {
    var result = 0;
    return findAllPath(1,1,m,n,result)
    function findAllPath(row, col, m, n, result){
        if(row>m || col>n){
          return result
        }

        if(row==m && col==n){
          return result + 1
        }

        result = findAllPath(row+1, col, m, n, result );
        result = findAllPath(row, col+1, m, n, result );

        return result
    }
};
