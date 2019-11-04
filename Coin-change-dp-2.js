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

function coinChange(coins, amount) {
  if(amount == 0){
    return 0
  }

  var dpMat = [];
  for(let row=0; row<=coins.length; row++){
    dpMat[row] = []
    for(let col=0; col<=amount; col++){
      if(col==0){
        dpMat[row][col] = 0;
      }else{
        dpMat[row][col] = amount+1
      }
    }
  }
  
  var i=0
  for(let row=1; row<=coins.length; row++){
    var currentCoin = coins[i];
    for(let col=1; col<=amount; col++){
      if(col - currentCoin >= 0){
        dpMat[row][col] = Math.min(dpMat[row-1][col], 1+dpMat[row][col-currentCoin])
      }else{
        dpMat[row][col] = dpMat[row-1][col]
      }
    }
    i++
  }

  if(dpMat[coins.length][amount] == amount+1){
    return -1
  }else{
    return dpMat[coins.length][amount] 
  }

}

console.log(coinChange([1,2,5], 11))
