//Primitive => fixed size and data stored directly in stack
// 7 types : String, Number, Boolean, null. undefined, Symbol, BigInt

//Non-Primitive: custom size and hold a reference to a memory location where the actual data is stored (heap)
//Array
const heros = ["Iron man", "Captain America", "Super Man"]
console.log(heros[2])
const IDs = [1, 2, 3]
console.log(IDs[2])

//objects
let myObj = {
   name : "Aayush",
   age : 21,
}

//Functions
const myFunction = function(){
    console.log("hello World")
}

//to master JS => Master objects and Browser events  