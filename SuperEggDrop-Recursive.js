// You are given K eggs, and you have access to a building with N floors from 1 to N. 

// Each egg is identical in function, and if an egg breaks, you cannot drop it again.

// You know that there exists a floor F with 0 <= F <= N such that any egg dropped at a floor higher than F will break, and any egg dropped at or below floor F will not break.

// Each move, you may take an egg (if you have an unbroken one) and drop it from any floor X (with 1 <= X <= N). 

// Your goal is to know with certainty what the value of F is.

// What is the minimum number of moves that you need to know with certainty what F is, regardless of the initial value of F?

var result = eggDrop(2, 9)

console.log(result);

function eggDrop(K, N){
  if(K==1 || N<=1){
    return N
  }

  var F = Math.round(N/2)
  var minAttemps = 1 + Math.max(eggDrop(K-1, F-1), eggDrop(K, N-F))
  
  return minAttemps
}
