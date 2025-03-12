//for-of loop

const arr = [1, 2, 3, 4, 5];

for(const num of arr){
    console.log(num);
}

const map = new Map();
map.set("In", "India")
map.set("USA", "United States")
map.set("Fr", "France")

console.log(map);

for(const key of map){
    console.log(key);
}

for(const [key, value] of map){              //Syntax to extract key value separately: Also
    console.log(`Key is ${key} and Value is ${value}`);
}

//for-in loop:
//Array ke case me for-in sirf indexes return karta hai. Aur Maps to interatable hote hi nahi hai so unpr to work bhi nahi karta
for(const num in arr){
    console.log(num);          
}

//But its good for objects:
const myObject = {
    C: "C programing",
    Cpp: "C++",
    Js: "Javascript",
    
}

for (const key in myObject){
    console.log(`Key is ${key} and Value is ${myObject[key]}`);
}

//forEach loop: takes callback function as i/p
const numArr = [1, 2, 3, 4, 5];
numArr.forEach((key, index, arr) => {
    console.log(key, index, arr);
})
const coding = ["cpp", "ruby", "Java", "Python", "rust"]

coding.forEach(function(item){
    console.log(item +"&");
})

coding.forEach( (item) => {
    console.log(item +"*");
} )

const arrOfObjects = [
    {Name: "Aayush",
     City: "Kannad"
    },
    {Name: "Ram",
     City: "Ayodhya"
    },
    {Name: "Shaam",
    City: "Jaipur"
    }
]

arrOfObjects.forEach( (item) => {
    console.log("Name: " +item.Name);
    console.log("City: " +item.City);
} )

//passing funstion in forEach loop:
function printMe(item){
    console.log(item);
}

numArr.forEach(printMe);