function printSubsetSum(arr, i, currentSum, sum, eachSet, result){
 
  if(currentSum == sum){
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

var finalResult = printSubsetSum([3,2,6,1], 0, 0, 9, [], [])

console.log(finalResult)
