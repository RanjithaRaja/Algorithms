
// You are given coins of different denominations and a total amount of money. 
// Write a function to compute the number of combinations that make up that amount. 
// You may assume that you have infinite number of each kind of coin.

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

function coinChange(amount, coins) {
    var finalResult = getNoOfComb(coins, 0, 0, amount, [], 0)

    function getNoOfComb(arr, i, currentSum, sum, eachSet, result){
      if(currentSum > sum){
        return result
      }

      if(currentSum == sum && i==arr.length){
        result++;
      }

      if(i < arr.length){
        result = getNoOfComb(arr, i, currentSum+arr[i], sum, eachSet, result);
        result = getNoOfComb(arr, i+1, currentSum, sum, eachSet, result);
      }
      return result
    }
    
    return finalResult
};

var result = coinChange(5, [1,2,5])

console.log(result)
