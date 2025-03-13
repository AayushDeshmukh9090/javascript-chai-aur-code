const arr = [1, 2, 3, 4, 5]

const myNum = arr.reduce( function(acc, num){
    console.log(`Accumulator is ${acc} and num is ${num}`)
    return acc + num
},0)

const myTotal = arr.reduce( (acc, num) => acc + num, 0)
console.log(myTotal)