

function coinExchange(amount, coins) {
  rowCount = amount + 1;
  colCount = coins.length + 1
  var dpMat = [];

  for(var row=0; row<(coins.length + 1); row++){
    dpMat[row]=[]
    for(var col=0; col<(amount + 1); col++){
      if(col == 0){
        dpMat[row][col] = 1
      }
      else{
        dpMat[row][col] = 0
      }
    }
  }
  var i = 0
  for(var row=1; row<(coins.length + 1); row++){
    var coin = coins[i]
    for(var col=1; col<(amount + 1); col++){
      if(col-coin >= 0){
        dpMat[row][col] = dpMat[row-1][col] + dpMat[row][col-coin]
      }
      else{
        dpMat[row][col] = dpMat[row-1][col]
      }
    }
    i+=1
  }

  // console.log(dpMat[coins.length][amount])
  return dpMat[coins.length][amount]
}
var change = coinExchange(10, [10])
console.log(change)
