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

//Ways of declaring a function inn javascript:
//1. A standard way to define a function using the function keyword.(function declaration)
function greet1(name) {
    return `Hello, ${name}!`;
}
console.log(greet1("Aayush")); // Output: Hello, Aayush!
//✅ Hoisted: Can be called before its definition in the code.

//2.Assigning a function to a variable.(function expression)
const greet2 = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet2("Aayush"));
//❌ Not hoisted: Cannot be used before its declaration.

//3. Arrow function: A shorter syntax using the => operator.
const greet3 = (name) => `Hello, ${name}!`;
console.log(greet3("Aayush"));
//More concise, best for simple functions.
//🔹 Does not have its own this

//4.IIFE: A function that runs immediately after definition.
(function(name) {
    console.log(`Hello, ${name}!`);
})("Aayush");
//Used to avoid polluting the global scope.
//🔹 Wrapped in parentheses to execute immediately.


//learnings:
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
