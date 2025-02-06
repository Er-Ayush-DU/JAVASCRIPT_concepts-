// // function square(a){
// //   return a*a;
// // }

// // console.log(square(56)); 




// function selection(array){
// let l=array.length;
// for(let i=0;i<l-1;i++){
//   let mini=i;
//   for(let j=i+1; j<l;j++){
//     if (array[j]<array[mini]){
//       mini=j;
//     }
//   }
//   [array[i],array[mini]]=[array[mini],array[i]];
// }
// }

// let array=[44,52,12,63,2];
// selection(array)
// console.log("Maximum no is: ",array[array.length-1])




// fibonacci series:-


function fibonacciSeries(n){
  let fib=[0,1]
  for(i=2;i<n;i++){
    fib.push(fib[i-2]+fib[i-1])
  }
  //  for(let num of fib){
  //   console.log("fibonacci series:",num)
  //  }
  return fib.slice(0,n)
   
  }

// fibonacciSeries(10)
console.log(fibonacciSeries(10))

