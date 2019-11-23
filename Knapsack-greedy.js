//Fractional Knapsack Problem

var finalResult = knapsack([60,100,120], [10,20,30], 50)

console.log(finalResult, "finalResult");

function knapsack(values, weights, capacity){
  var matrix=[];

  for(let row=0; row<3; row++){
    matrix[row]=[]
    for(let col=0; col<values.length; col++){
      if(row==0){
        matrix[row][col] = values[col]
      }else if(row==1){
        matrix[row][col] = weights[col]
      }else{
        matrix[row][col] = values[col]/weights[col]
      }
    }
  }
  var weight=0;
  var profit=0;
  for(let i=0; weight<capacity || i<3; i++){
    if(weight+weights[i] < capacity){
      weight = weight+weights[i];
      profit = profit+values[i]
    }else{
      let remaining = capacity - weight;
      weight= weight+remaining;
      profit= profit+(values[i]*remaining/weights[i])
    }
  }

  return profit
  console.log(matrix)
  
}
