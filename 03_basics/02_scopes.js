  if(true){

    const a= 10
    let b = 20
    var c =30

  }

  //console.log(a)
  //console.log(b)
   console.log(c)

  function one(){
    const userName = "Aayush"
     function two(){
       if(userName == "Aayush"){
        console.log("variables of one are accessible!")
       }
       const location = "Jaipur"

     }
     //console.log(location)
     two()
  }
  
  console.log(addOne(5))
  function addOne(num){ 
    return num+1
  }

  //console.log(addTwo(5))        //function ko with a variable declare kiya ho to delaration ke baad hi use kar sakte hai
  const addTwo = function(num){     
    return num + 2
  }
  console.log(addTwo(5))



