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
  return min_jump_arr[arr.length-1]
}
