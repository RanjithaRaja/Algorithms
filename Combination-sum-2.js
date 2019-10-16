// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// Each number in candidates may only be used once in the combination.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8,
// A solution set is:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5,
// A solution set is:
// [
//   [1,2,2],
//   [5]
// ]

var finalResult = printSubsetSum([3,34,4,12,5,2], 0, 0, 9, [], [])

console.log(finalResult);

function printSubsetSum(arr, i, currentSum, sum, eachSet, result){
  if(currentSum == sum && i==arr.length){
    var val = [...eachSet]
    result.push(val);
    // console.log(result, i)
  }

  if(i < arr.length){
    eachSet.push(arr[i]);
    printSubsetSum(arr, i+1, currentSum+arr[i], sum, eachSet, result);

    eachSet.pop();
    printSubsetSum(arr, i+1, currentSum, sum, eachSet, result);
  }
  return result
}
