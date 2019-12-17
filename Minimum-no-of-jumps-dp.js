  
// Given an array of integers where each element represents the max number of steps that can be made forward from that element. 
// Write a function to return the minimum number of jumps to reach the end of the array (starting from the first element). 
// If an element is 0, then cannot move through that element.

// Example:

// Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// Output: 3 (1-> 3 -> 8 ->9)
// First element is 1, so can only go to 3. Second element is 3, so can make at most 3 steps eg to 5 or 8 or 9.

var finalResult = getMinJump([2,1,3,2,3,4,5,1,2,8])

console.log(finalResult);

function getMinJump(arr){
  var min_jump_arr = []
  min_jump_arr[0] = 0
  for(let i=1; i<arr.length; i++){
    min_jump_arr.push(Infinity)
  }

  for(let i=1; i<arr.length; i++){
    for(let j=0; j<i; j++){
      if(arr[j]+j>=i){
        min_jump_arr[i] = Math.min(min_jump_arr[i], min_jump_arr[j]+1)
      }
    }
  }
  console.log(min_jump_arr)
  if(min_jump_arr[arr.length-1] == Infinity){
    return 0;
  }else{
    return min_jump_arr[arr.length-1]
  } 
}
