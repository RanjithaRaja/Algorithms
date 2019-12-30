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

var finalResult = rodCutting([1, 5, 8, 9, 10, 17, 17, 20]);

console.log(finalResult);

function rodCutting(arr){
  var maxProfit = 0;
  return findMaxProfit(0, 0, 0)
  function findMaxProfit(i, length, profit){
    //console.log(i, length, profit)
    if(length == arr.length){
      return maxProfit = Math.max(maxProfit, profit)
    }
    
    if(i > arr.length-1 || length > arr.length){
      return profit
    }

    findMaxProfit(i, length+i+1, profit+arr[i] );
    findMaxProfit( i+1, length, profit);

    return maxProfit
  }
}
