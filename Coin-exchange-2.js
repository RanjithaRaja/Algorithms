// You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

// Example 1:

// Input: amount = 5, coins = [1, 2, 5]
// Output: 4
// Explanation: there are four ways to make up the amount:
// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1
// Example 2:

// Input: amount = 3, coins = [2]
// Output: 0
// Explanation: the amount of 3 cannot be made up just with coins of 2.
// Example 3:

// Input: amount = 10, coins = [10] 
// Output: 1

function coinExchange(amount, coins) {
  rowCount = amount + 1;
  colCount = coins.length + 1
  var dpMat = [];

  for(var row=0; row<(coins.length + 1); row++){
    dpMat[row]=[]
    for(var col=0; col<(amount + 1); col++){
      if(col == 0){
        dpMat[row][col] = 1
      }
      else{
        dpMat[row][col] = 0
      }
    }
  }
  var i = 0
  for(var row=1; row<(coins.length + 1); row++){
    var coin = coins[i]
    for(var col=1; col<(amount + 1); col++){
      if(col-coin >= 0){
        dpMat[row][col] = dpMat[row-1][col] + dpMat[row][col-coin]
      }
      else{
        dpMat[row][col] = dpMat[row-1][col]
      }
    }
    i+=1
  }

  // console.log(dpMat[coins.length][amount])
  return dpMat[coins.length][amount]
}
var change = coinExchange(10, [10])
console.log(change)
