const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//forEach loop return nothing so if we wish to store some values based on some conditions we have to write the logic explicitly,
const newNums1 = [];

arr.forEach( (item) => {
    if(item >= 3){ newNums1.push(item); }
} )

console.log(newNums1);

//filters:
//Filters elements based on a condition and returns a new array.
const newNums2 = arr.filter( (item) => item >= 3 )
console.log(newNums2);

const data = [
    {Name: "Aayush",
     age: 21,
     locality: "Kannad"
    },
    {Name: "Ram",
    age: 22,
    locality: "Jaipur"
    },
    {Name: "Shyam",
    age: 23,
    locality: "Delhi"
    },
    {Name: "Gita",
    age: 24,
    locality: "Bangalore"
    },
    {Name: "Sita",
    age: 25,
    locality: "Ahmedabad"
    },
   {Name: "Rita",
    age: 26,
    locality: "Ahmedabad"
   },
   {Name: "Maya",
    age: 27,
    locality: "Ahmedabad"
   }
]

const newData = data.filter( (item) => item.age >=24 && item.locality ==="Ahmedabad"  )

console.log(newData);

//maps:
//Transforms each element and returns a new array.
const myNums = [1, 2, 3, 4, 5, 6, 7, 8];

const myNewNums1 = myNums.map( (num) => num + 10)
                        .map( (num => num * 10))
                    
console.log(myNewNums1);

const myNewNums2 = myNums.map( (num) => num + 10)
                        .map( (num => num * 10))
                        .filter( (num) => num>120 )
console.log(myNewNums2)