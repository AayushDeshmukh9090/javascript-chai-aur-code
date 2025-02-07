  //object using constructor

  //object literals
  const mySym = Symbol("key1")

  const JsUser = {
    name: "Aayush",
    "full name": "Aayush Deshmukh",
    [mySym]: "key1",
    age: 21,
    location: "Jaipur",
    email: "aayushworkspace814@gmail.com",
    ifLoggedIn: false,
    
  }
  console.log(JsUser.email)
  console.log(JsUser["name"])
  console.log(JsUser["full name"])
  console.log(JsUser[mySym])

  JsUser.email = "aayush@chatgpt.com"
  console.log(JsUser["email"])
  //Object.freeze(JsUser)
  JsUser.email = "aayush@deepseek.com"
  console.log(JsUser["email"])
  
  //function declaration of existing ojects:
  JsUser.greetings = function(){
    console.log("Hello JsUser")
  }

  JsUser.greetings1 = function(){
    console.log(`Hello JsUser ${this.name}`)
  }

  JsUser.greetings()
  JsUser.greetings1()