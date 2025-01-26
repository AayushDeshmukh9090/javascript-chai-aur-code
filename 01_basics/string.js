let Name = "Aayush"
let Id = "1"

console.log(`My name is ${Name} and my Id is ${Id}`)

let accountHolder = new String("Prajwal")  //string is an object
console.log(accountHolder[3])        //Each char can be accessed individually using index

//Important functions:
console.log(Name.length)
console.log(Name.toUpperCase())
console.log(Name.charAt(3))
console.log(Name.indexOf('a'))

//substring function
let str = Name.substring(0,4)
console.log(str)

//slice function
const str1 = "The morning is upon us.";
const str2 = str1.slice(1, 8); //he morn
const str3 = str1.slice(4, -2); // morning is upon u
const str4 = str1.slice(12); //is upon us.  (considers 0 as start index by default)
console.log(str2); 
console.log(str3); 
console.log(str4); 

const str5 = str1.slice(-3, -1); // 'us'
const str6 = str1.slice(0, -1); // 'The morning is upon us'
console.log(str5); 
console.log(str6); 

//trim fucntion
let str7 = "   Cat  "
console.log(str3.trim())  //removes all the leading and trailing white spaces

