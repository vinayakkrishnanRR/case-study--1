//Write a JavaScript function to get an array and to read the first element of an array. Check whether it is prime or not. 

 const numbers=[3,5,6,7,8,11];
  const num=numbers[0];
function prime(number){
 if(num<=1){
     return('not prime number');
 }
 for(let i=2;i<=Math.sqrt(num);i++){
     if(num%i===0){
         return ('not prime number');
 }
}
     return('yes it is prime');
 }
 function first(numbers){
 const first=numbers[0];
 return prime(first);
 }
 console.log('first item is '+numbers[0]+' '+first(numbers));


//  Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, check if the current number is odd or even, and display the message to the screen as odd or even.

   for(i=0; i<=15; i++){
     if(i%2===0)
        {
            console.log(i+',even number');
        }else
        {
            console.log(i+',odd number');
        }
    }


// Write a JavaScript program to find the sum of squares of the elements of an array.

 let arr=[1,2,3,4,5,6];
 let sum=0;
 for(i=0;i<arr.length;i++){
           sum+=arr[i]**2;
  }
  console.log('Total sum is '+sum);

//   Write a JavaScript program to find the most frequent item of an array


 let array=[2,3,3,5,7,3,7];
 let freq=1;
 let a=0;
 let item;
 for(var i=0;i<array.length;i++){
     for (var j=i;j<array.length;j++){
         if (array[i]==array[j])
         a++;
     if(freq<a){
         freq=a;
         item=array[i];
     }
 }
 a=0;
  }
 console.log(item+' ( '+freq+' times) ');







