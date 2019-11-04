
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
  var initialResult = amount + 1 
  var finalResult = FindMinCount(coins, 0, 0, amount, 0, initialResult)
  function FindMinCount(coins, i, currentSum, amount, count, result) {
    // console.log(coins, i, currentSum, amount, count, result)
    if(amount == 0){
      return 0
    }

    if(currentSum > amount){
      return result
    }

    if(currentSum == amount){
      // console.log(result, count)
      result = Math.min(count, result)
      return result
    }

    if(i<=coins.length-1){
      count++
      result = FindMinCount(coins, i, currentSum+coins[i], amount, count, result)

      count--
      result = FindMinCount(coins, i+1, currentSum, amount, count, result)
    }
    return result
  }

  if(finalResult == initialResult){
    return -1
  }else{
    return finalResult
  }
}

console.log(coinChange([1,2,5], 5))
