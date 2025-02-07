// const specialUser = new Object()

const specialUser = {}
specialUser.id = "100"
specialUser.name = "Aayush"
specialUser.isLoggedIn = false

const regularUser = {
    email: "xyz@gmail.com",
    userName: {
        fullName: {
            firstName: "Aayush",        //object ke andar object
            lastName: "Deshmukh"
        }

    },
    isLoggedIn:false
}

console.log(regularUser.userName.fullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {...obj1, ...obj2}        // merge with spread
console.log(obj3)
const obj4 = Object.assign({}, obj1, obj2)  //merge without spread| merge in first parameter passed (here {})
console.log(obj4)
console.log(obj1)

const arrofObjects = [
    {id: "100", name: "Aayush"}, {id: "200", name: "Sudarshan"}, {id: "300", name: "Pratik"}   //array of objects
]

console.log(arrofObjects[0].id)

console.log(Object.keys(specialUser))    //sirf objects ki saari keys show hongi
console.log(Object.entries(specialUser)) //saari key-value pairs show hongi

//Destructuring
//Destructuring is a feature in JavaScript that allows you to extract values from arrays or objects and assign them to variables in a concise way.
// It makes code cleaner and more readable.

const user = {
    id: 1,
    name: "Sumit",
    location: "Aurangabad"
}

const {id, name, location} = user
console.log(id)
console.log(name)
console.log(location)

//renaming while destructuring:
const person = {
    name: "Genda",
    age: 21
}240503
const { name: userName, age: userAge } = person;
console.log(userName); // "Genda"
console.log(userAge);  // 21


//JSON

/*{
    "name": "Aayush",
    "id": "001"
}*/