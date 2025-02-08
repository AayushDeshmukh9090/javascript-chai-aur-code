//intuition: jo bhi aapne code likha hai 10-12 whatever lines ka usse ek package me band kardiya, jo ab reusable hai.
//ab hum uss 10-12 whatever lines ke code ko multiple times use kar sakte hai to perform the same designated task of that function.


function myName(){

    console.log("A")
    console.log("A")
    console.log("Y")
    console.log("U")
    console.log("S")
    console.log("H")

}

function add(number1, number2){
    console.log(number1 + number2);
}

function add(number1, number2){
    return(number1 + number2);
}
let result = add(3, 5)
console.log("result: ", result)

function name1(userName){
    if(!userName){
        console.log("Please entre the userName")
        return
    }
    return `I am ${userName}`
}
console.log(name1())
console.log(name1("Aayush"))

function name(userName = "Ram"){
    if(!userName){
        console.log("Please entre the userName")
        return
    }
    return `I am ${userName}`
}
console.log(name())
console.log(name("Aayush"))

//passing parameters in functions:

function calculateCartPrices(...num1){
    return num1
}

console.log(calculateCartPrices(100, 200, 300, 400, 500))

function calculateCartPrices1(num2, num3, ...num1){
    return num1
}
console.log(calculateCartPrices1(100, 200, 300, 400, 500))

const person = {
    name: "Sanjay",
    location: "Aurangabad"
}

function passObject(myObject){
    return `My name is ${myObject.name} and I live in ${myObject.location}`
}

console.log(passObject(person))

console.log(passObject({
    name: "Shaam",
    location: "Kannad"
}))

const array = [1, 2, 3, 4, 5, 6]

function passArray(myArray){
    return myArray[1];
}

console.log(passArray(array))
