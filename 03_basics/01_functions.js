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
