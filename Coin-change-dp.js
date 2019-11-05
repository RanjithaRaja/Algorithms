function coinChange(coins, amount) {
  if(amount == 0){
    return 0
  }

  var dpMat = [];
  for(let row=0; row<=coins.length; row++){
    dpMat[row] = []
    for(let col=0; col<=amount; col++){
      if(col==0){
        dpMat[row][col] = 0;
      }else{
        dpMat[row][col] = amount+1
      }
    }
  }
  
  var i=0
  for(let row=1; row<=coins.length; row++){
    var currentCoin = coins[i];
    for(let col=1; col<=amount; col++){
      if(col - currentCoin >= 0){
        dpMat[row][col] = Math.min(dpMat[row-1][col], 1+dpMat[row][col-currentCoin])
      }else{
        dpMat[row][col] = dpMat[row-1][col]
      }
    }
    i++
  }

  if(dpMat[coins.length][amount] == amount+1){
    return -1
  }else{
    return dpMat[coins.length][amount] 
  }

}

console.log(coinChange([1,2,5], 11))
