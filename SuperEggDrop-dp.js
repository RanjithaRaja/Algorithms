// You are given K eggs, and you have access to a building with N floors from 1 to N. 

// Each egg is identical in function, and if an egg breaks, you cannot drop it again.

// You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

// Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

// Your goal is to know with certainty what the value of F is.

// What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

var result = superEggDrop(2, 6);

console.log(result);

function superEggDrop(K, N){
  var dpMat=[];

  for(var row=0; row<=K; row++){
    dpMat[row]=[]
    for(var col=0; col<=N; col++){
      if(row==0 || col==0){
        dpMat[row][col]=0
      }
      if(row==1){
        dpMat[row][col] = col
      }else if(col==1){
        dpMat[row][col] = 1
      }else{
        dpMat[row][col] = 0
      }
    } 
  }

  for(var row=2; row<=K; row++){
    for(var col=2; col<=N; col++){
      var F = Math.round(col/2)
      dpMat[row][col] = 1 + Math.max(dpMat[row-1][F-1], dpMat[row][col-F])
    }
  }

  return dpMat[K][N]
}
