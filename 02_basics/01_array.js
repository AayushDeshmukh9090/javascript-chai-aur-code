//array
const myArr = [1, 2, 3, 4, 5, 6]
//can contain a mix of different data types. index starts form 0 to infinite(size is dynamic/resizable)
const myArr2 = [1, 2, 3, 4, "Aayush", 2.4, true]

//JavaScript array-copy operations create shallow copies (point at the same data in heap). 
const temp1 = [11, 12 , 13, 14 , 15]
const temp2 = temp1
// console.log(temp2[3])

//methods:

myArr.push(7)
myArr.push(8)
myArr.pop()
console.log(myArr)

myArr.unshift(0)  //beginning me ele add karta hai
myArr.unshift(9)
myArr.shift()
console.log(myArr)

console.log(myArr.indexOf(4))
console.log(myArr.includes(6))


const temp3 = [1, 2, 3, 4, 5, 6]
const temp4 = temp3.slice(1,3)    
console.log(temp4)

const temp5 = temp3.splice(1,3)    //makes changes in original array
console.log(temp5)    //2, 3, 4   
