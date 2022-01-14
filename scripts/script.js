function sum (accum = 0){
  
  function secondSum(num){
    return accum += num
  }
  return secondSum
}

let result = sum()
console.log(result(5))
console.log(result(5))
console.log(result(5))