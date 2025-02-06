
// let sum= 0;
// for (let i = 0; i < 10; i++) {
//   sum+=i;
  
// }
// console.log(sum)

 


//  function Fact(number){
//    let facto=0;
//    if(number==1||number==0){
//      return 1;
//    }
//    else{
//     facto= number*Fact(number-1);
//     return facto;
//    }
   
   
//    }
 


// console.log(Fact(0))


// let str= "JavaSCRipt is comes under script language";
// let vowel = "AEIOUaeiou"; 

// let count= 0;
// for(char of str){
//   if (vowel.includes(char)){
//     count++;
//   }
// }

// console.log("number of vowel is: ", count)


// let str = "Ayush";
// let reverse="";
// for(char of str){
// reverse= char+ reverse;
// }
// console.log("reverse of string is: ",reverse);


function Reverse(number){
   let Stack= [];
   for(let char of number){
    Stack.push(char);
   }

    while(Stack.length>0){
    console.log(Stack.pop());
    }
     
   }
  
Reverse("12345")