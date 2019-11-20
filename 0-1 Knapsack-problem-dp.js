// 0-1 Knapsack Problem 
// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value 
// in the knapsack.
// In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated 
// with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value 
// subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, 
// either pick the complete item, or don’t pick it (0-1 property).

//Problem statement - https://www.geeksforgeeks.org/0-1-knapsack-problem-dp-10/

var finalResult = knapsack([10,20,30], [60,100,120], 50)

console.log(finalResult);

function knapsack(weights, values, capacity){
  var dpMat=[];

  for(let row=0; row<=weights.length; row++){
    dpMat[row]=[]
    for(let col=0; col<=capacity; col++){
      dpMat[row][col]=0
    }
  }

  var i=0;

  for(let row=1; row<=weights.length; row++){
    var currentWeight = weights[i];
    for(let col=1; col<=capacity; col++){
      if(col-currentWeight >= 0){
        dpMat[row][col]=Math.max(dpMat[row-1][col], dpMat[row-1][col-currentWeight]+values[i])
      }
      else{
        dpMat[row][col]=dpMat[row-1][col]
      }
    }
    i++
  }

  return dpMat[weights.length][capacity]
}
