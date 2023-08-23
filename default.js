


// const name =(first,last)=>first + ' '+ last;
// const fullname = name("sahariar","alam");
// console.log(fullname);


// const add =(num1,num2)=>num1+num2;

// const result = add(5 ,25);
// console.log(result);

// const large = (x,y,z)=>{
//     const sum = x+y+z;
//     const mul =x*y*z;
//     const sub = x-y-z;
//     return mul;
// }
//using sprread operator


// const result = large(7,3,2);
// console.log(result);

// const numbers =[5,14,3,56,34,76,55,32];
// console.log(Math.min(...numbers)); 

// const friends = ['sahariar','alam','nishad'];
// const bondhu = friends;
// console.log(friends);
// bondhu.push('satu');
// console.log(...bondhu);

// const person ={
//     name: 'sahariar',
//     age: 18,
//     money:5000
// }
// const {name,age,money}=person;

// console.log(name,age,money);

// let fruits = ['🍓','🍏'];
// let vegetavle =['🥒'];
// let fruitveg = [...fruits,...vegetavle];
// console.log(fruitveg);

//task-1

// const number = (num1,num2,num3) => num1 * num2 * num3;

// const result = number(3,4,5);
// console.log(result);

//task-2

// const write =`
//             i am a web developer.
//             i love to code.
//             i love to eat chicken Biriyani.
// `

// console.log(write);



// //task-3


// const add = (num1,num2=5)=>num1+num2;

// const result = add(12,3);
// console.log(result);

// //task-4

// const nayikas=['mousumi' , 'popy' ,'shabnur', 'purnima' ];
// const array = [...nayikas];
// console.log(array);


// const mobile = {
//     brand: 'Samsung',
//     model:'S4'
//    };

//    delete mobile.brand;
//    console.log(mobile);

// const bal = "hero"
//    const greetings = `welcome home ${bal}`;
//    console.log(greetings);

//    const obj = { foo: 1 };
//      obj.bar = 2;

//      console.log(obj);

//      let a = 12, b = 3;
// [a, b] = [b, a];
// console.log(a,b);


// const numbers = [45, 12, 36, 84]
// numbers.push(25);
// console.log(numbers);

const nwDost = [];
const dost = ['sahariar','alm','nishad'];

for( const element of dost){
    if(element.length % 2 === 0 ){
        nwDost.push(element);
        return nwDost;
    }
}

