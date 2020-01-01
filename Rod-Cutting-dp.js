// Cutting a Rod | DP-13
// Given a rod of length n inches and an array of prices that contains prices of all pieces of size smaller than n. 
// Determine the maximum value obtainable by cutting up the rod and selling the pieces. 
// For example, if length of the rod is 8 and the values of different pieces are given as following, 
// then the maximum obtainable value is 22 (by cutting in two pieces of lengths 2 and 6)

// length   | 1   2   3   4   5   6   7   8  
// --------------------------------------------
// price    | 1   5   8   9  10  17  17  20
// And if the prices are as following, then the maximum obtainable value is 24 (by cutting in eight pieces of length 1)

// length   | 1   2   3   4   5   6   7   8  
// --------------------------------------------
// price    | 3   5   8   9  10  17  17  20

var finalResult = Rodcutting([1, 5, 8, 9, 10, 17, 17, 20]);

console.log(finalResult)

function Rodcutting(arr){
    var dpMat = [];
    
    for(let row=0; row<=arr.length; row++){
        dpMat[row] = []
        for(let col=0; col<=arr.length; col++){
            if(row == 0 || col==0){
                dpMat[row][col] = 0
            }else if(col-row>=0){
                dpMat[row][col] = Math.max(dpMat[row-1][col], dpMat[row][col-row]+arr[row-1])
            } else{
                dpMat[row][col] = dpMat[row-1][col]
            }
        }
    }

    return dpMat[arr.length][arr.length]
}
