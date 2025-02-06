// REVERSE THE STING USING STACK


class Reverse_String{
  constructor(string){
    this.string=string
  }
 Reverse(){
  let Stack=[];
  for(let char of this.string){
    Stack.push(char)
  }

  let res=""
  for(let i=0; i<this.string.length; i++){
  res= res + Stack.pop()
  }
  console.log(res)

}


}

obj= new Reverse_String("ayush")
obj.Reverse()
