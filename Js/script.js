// console.log('Hello')
// // alert('Hi, welcome') // variables
// var a=9;
// console.log(a); //Block1
// {
//      var a=20;
//      console.log(a);//block2
//  }
//  let b=23;
//  console.log(b);                                                                                              
// {
//      let b=34;
//     console.log(b); 
// }
//  console.log(b);
//  //const
//  const t=30;
// console.log(t);
//  {
//     const t=90;
//     console.log(t);
//  }
// console.log(t);
// //Data types
//  var nam='India is my country.';
//  console.log(typeof(nam));
// //Numbers
//  var count=10;
//  console.log(typeof(count));
 //boolean
// var bb=true;
// console.log(typeof(bb));
// var gtype;
// console.log(typeof(gtype));
// //Arrays
// let arr=['Red','Blue','white',10]
// console.log(arr);
// console.log(arr[1])
// console.log(arr[3])
// console.log(arr.length);
// arr.push('Violet');
// console.log(arr);
// arr.pop();
// console.log(arr);
// //Javascript objects
// let car={
// mileage:100,
// model:'i10',
// color:'red'
// }
// console.log(car);
// console.log(car.model);
// console.log(car.mileage);
// let person=new Object();
// person.gender='Male';
// person.height=180;
// console.log(person);
// var a=10
// b=5

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)
//incrememt
// var a=10;
// var b=a++;
// console.log(b);
// console.log(a);
// //comparison operators(If else)
// c=10
// d='10';
// if (c==d ) {
//     console.log('c is equal to d')
// } else {
//     console.log('c is  not equal to d')
// }
// e=5
// f=10;

// if (e<f && f==20) {
//   console.log('f is greater than e and f is equal to 20')  
// } else {console.log('f is not greater than e and f is not equal to 20')
    
// }
//assignemt operators
// let add=6;
//  add -= 3;
// console.log(add);
let a=10;
let b=34;
let c=70;
let d=12;

var exp=(a+b*(c-d)-7);
console.log(exp);
const arr2=[
    {
        name:"Maya"
    },{
        name:'Krishna'
    }
]
//functions
function display(name) {
    console.log('Hi '+name+' welcome to JS');
}
display('Sayana');//function call
function addition(t,s){
    var result=t+s;
   
    return result;
}
var result=addition(50,60);
console.log('the sum is '+result);
//subtraction
function Subtraction(y,z){
    var result=y-z;
    return result;
    
}
var result=Subtraction(150-60);
console.log('The difference is '+result)
//product
function multiplication(w,n){
    var result=w*n;
    return result;
    
}
var result=multiplication(150,60);
console.log('The product is '+result)

