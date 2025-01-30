let num = 33
console.log(num)

let num1 = new Number(33)
console.log(num1)

// console.log(num.toString().length)
// console.log(num.toFixed(3))      //33.000

const otherNumber = 123.897
console.log(otherNumber.toPrecision(4)) //123.9
console.log(otherNumber.toPrecision(3)) //124
console.log(otherNumber.toPrecision(2)) //1.2e+2


// ********Math**********

console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.floor(4.6))
console.log(Math.ceil(4.6))

console.log(Math.max(1,2,3,4))
console.log(Math.min(1,2,3,4))

  //Math.random:
    console.log(Math.random())  //returns values from 0 to 0.99999
  //random value less than 10
    console.log(Math.floor(Math.random()*10))  //without 10
    console.log(Math.ceil(Math.random()*10))  //with 10
  
  //random value between 10 to 20
  let max = 20
  let min = 10
console.log(Math.ceil((Math.random() * (max - min )) + min))
