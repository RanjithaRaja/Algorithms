// 0-1 Knapsack Problem 
// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value 
// in the knapsack.
// In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with 
// n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] 
// such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, 
// either pick the complete item, or don’t pick it (0-1 property).

//Problem statement - https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/

var finalResult = knapsack([10,20,30], [60,100,120], 50)

console.log(finalResult);

function knapsack(weights, values, capacity){
  var result = getMaxVal(0, 0, 0, 0);

  function getMaxVal(i, curWgt, curVal, maxVal){

    if(i > weights.length){
      return maxVal
    }

    if(i==values.length && curWgt<=capacity){
      maxVal = Math.max(curVal, maxVal)
    }

    maxVal = getMaxVal(i+1, curWgt+weights[i], curVal+values[i], maxVal)

    maxVal = getMaxVal(i+1, curWgt, curVal, maxVal )

    return maxVal
  }

  return result
}
