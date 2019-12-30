var finalResult = rodCutting([1, 5, 8, 9, 10, 17, 17, 20]);

console.log(finalResult);

function rodCutting(arr){
  var maxProfit = 0;
  return findMaxProfit(0, 0, 0)
  function findMaxProfit(i, length, profit){
    //console.log(i, length, profit)
    if(length == arr.length){
      return maxProfit = Math.max(maxProfit, profit)
    }
    
    if(i > arr.length-1 || length > arr.length){
      return profit
    }

    findMaxProfit(i, length+i+1, profit+arr[i] );
    findMaxProfit( i+1, length, profit);

    return maxProfit
  }
}
