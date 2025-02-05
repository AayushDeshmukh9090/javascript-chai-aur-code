 const marvel_heros = ["Ironman", "thor", "hulk", "spiderman"]
 const dc_heros = ["superman", "batman", "flash"]
 
 marvel_heros.push(dc_heros)  //new array ko as a new element insert karega (concatenate nahi hoga)
 console.log(marvel_heros)
 marvel_heros.pop()
 
 const myArr = marvel_heros.concat(dc_heros)  //CONCATENATE
 console.log(myArr)

 const total_heros = [...marvel_heros, ...dc_heros]    //spread the arrays
 console.log(total_heros)

 const temp = [1, 2, [3, 4], 5, [6, 7, 8], 9]

 const real_temp = temp.flat(Infinity)
 console.log(real_temp)


 console.log(Array.isArray("Aayush"))
 console.log(Array.from("Aayush"))
 console.log(Array.from({name: "Aayush"}))

 let score1 = 10
 let score2 = 20
 let score3 = 30
 const temp1 = Array.of(score1, score2, score3)
 console.log(temp1)

 

