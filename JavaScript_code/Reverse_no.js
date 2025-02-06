
// Reverse The Number

class Reverse_no{
  constructor(user,reverse=0){
    this.user=user;
    // this.remainder=remainder;
    this.reverse=reverse;
  }

Reverse(){
  var remainder;
  while(this.user>0){
    remainder=this.user%10;
    this.reverse= this.reverse*10 + remainder;
    this.user= Math.floor(this.user/10);                // Update the  user number
  }
  console.log(this.reverse)
}

}

let obj= new Reverse_no(12543)
obj.Reverse()