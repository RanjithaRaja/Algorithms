// Given an array of integers where each element represents the max number of steps that can be made forward from that element.
// Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element). 
// If an element is 0, then cannot move through that element.

// Example:

// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 (1-> 3 -> 8 ->9)
// First element is 1, so can only go to 3. Second element is 3, so can make at most 3 steps eg to 5 or 8 or 9.

var finalResult = getMinJump([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9])

console.log(finalResult, "result")

function getMinJump(arr){
  return findMinVal(arr, 0, 0, Infinity);
  function findMinVal(arr, i, n, result){
    if(i>=arr.length){
      result = Math.min(n, result)
      return result
    }

    for(let x=1; x<=arr[i]; x++){
      result = findMinVal(arr, x+i, n+1, result)
    }

    if(result == Infinity){
      return 0;
    }else{
      return result
    } 
  }
}
