
// const numbers =[3,4,5,6];
// const double = [];

// for(const number of numbers){
//     const multiply = number * 2;
//     double.push(multiply); 
// }
// console.log(double);
//
//array function
// const numbers =[47,33,55,61,49];
// const multiply = numbers.map(num=>num+7);
// console.log(multiply);

// const friends = ['sahariar','alam','nishad'];
// const length = friends.map(friend => friend[0]);
// console.log(length);

// const find = friends.forEach(friend=>console.log(friend[0]));

// const found = numbers.find(n=>n < 50);
// console.log(found);
//Using Map

const numbers = [3,7,8,9,13,32,12,55,39,76,4,25];

const multiply = numbers.map(num => num*2);
console.log(multiply);

//foreach

const mul = numbers.map(num =>console.log(num*2));

//filter
const multiplyUsingFilter = numbers.filter(num => num > 30)
console.log(multiplyUsingFilter);

//find 

 const mulFind = numbers.find(p => p> 30);
 console.log(mulFind);

 //reduce

 const mulReduce = numbers.reduce((x,y) => x+y,0);
 console.log(mulReduce)