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
