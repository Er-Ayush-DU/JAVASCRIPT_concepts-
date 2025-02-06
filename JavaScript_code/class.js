class Ayush{
  constructor(Fname,Lname,Year,object={address:"UP,Kannauj",PhoneNo:"9260932458"}){
    this.fname=Fname
    this.lname= Lname
    this.year= Year
    this.obj=object
    console.log(`firse name is ${Fname} last name is ${Lname} `)
  }

  age(){
    return this.year ;

  }

 
}

let obj= new Ayush("Ayush","tiwari",18)
console.log(obj.age())
