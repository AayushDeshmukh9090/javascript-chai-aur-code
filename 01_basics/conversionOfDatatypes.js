let score = 33
console.log(typeof score)

let s = String(score)
console.log(typeof s)
//// 33 => '33'

let s1 = "33"
let valueOfNumber = Number(s1)
console.log(typeof valueOfNumber)
console.log(valueOfNumber)
// "33" => 33

let s2 = "33abc"
let valueOfNumber1 = Number(s2)
console.log(typeof valueOfNumber1)
console.log(valueOfNumber1)
// "33abc" => NaN (Not a Number)

let a = 1
let b = 0
let bool2 = Boolean(a)
let bool3 = Boolean(b)
console.log(bool2) // 1 => true
console.log(bool3) // 0 => false

let bool1 = Boolean(score)
let bool4 = Boolean(s)
let bool5 = Boolean("")
console.log(bool1) // 33 =>true
console.log(bool4) // "Aayush" => true
console.log(bool5) // "" => false
