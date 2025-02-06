var globalVariable = "I'm a global variable";

function checkScope() {
  var globalVariable = "I'm a global variable";
  console.log(globalVariable)
}

checkScope()
console.log(globalVariable)



let globalVariable = "I'm a global variable";

function checkScope() {
  let globalVariable = "I'm a global variable";
  console.log(globalVariable)
}

checkScope()
console.log(globalVariable)