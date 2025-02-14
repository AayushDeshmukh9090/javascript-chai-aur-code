//Arrow functions: consise way to write functions in JavaScript.

const add = (num1, num2) => num1 + num2
console.log(add(4, 5))

const add1 = (num1, num2) => {
    return num1 +num2
}
console.log(add1(4, 5))

const temp1 = {
   userName: "Sanjay",

   myName: function (){
    console.log(this.userName)
   }
}

temp1.myName()

const temp2 = {
    userName: "Sanjay",
 
    myName: () => {
     console.log(this.userName)
    }
 }
 
 temp2.myName()