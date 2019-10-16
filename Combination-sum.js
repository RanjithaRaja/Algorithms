// Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

// The same repeated number may be chosen from candidates unlimited number of times.

// Note:

// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: candidates = [2,3,6,7], target = 7,
// A solution set is:
// [
//   [7],
//   [2,2,3]
// ]
// Example 2:

// Input: candidates = [2,3,5], target = 8,
// A solution set is:
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

var finalResult = printSubsetSum([8,7,4,3], 0, 0, 11, [], [])

console.log(finalResult)

function printSubsetSum(arr, i, currentSum, sum, eachSet, result){
  // console.log(eachSet, currentSum)
  if(currentSum > sum){
    return result
  }

  if(currentSum == sum && i == arr.length){
    var val = [...eachSet]
    result.push(val);
  }

  if(i < arr.length){
      eachSet.push(arr[i]);
      printSubsetSum(arr, i, currentSum+arr[i], sum, eachSet, result);
      
      eachSet.pop();
      printSubsetSum(arr, i+1, currentSum, sum, eachSet, result);
  }
  return result
}
