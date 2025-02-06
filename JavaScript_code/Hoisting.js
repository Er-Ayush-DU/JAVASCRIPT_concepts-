//1. Function Hoisting(function declaration)


Name("Omji")
function Name(Fullname){
  console.log(Fullname) 
}



// note: but with function expression we cant not use hoisting.

expr("Not Hoisted")
let expr= function(){
      console.log(expr)          //output: Reference error
}


console.log(expre)
var expre= function(){
  console.log("Not Hoisted")    // Output Undefined
}



//2. Variable Hoisting


console.log(age)
let age = 19     // output: Reference error 


console.log(age)
var year = 2024        // Undefined
