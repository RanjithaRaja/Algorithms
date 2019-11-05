// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// Example 1:

// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:

// Input: coins = [2], amount = 3
// Output: -1

function coinChange(coins, amount) {
  var finalResult = FindMinCount(coins, 0, 0, amount, 0, amount + 1)
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

console.log(coinChange([1,2,5], 11))
