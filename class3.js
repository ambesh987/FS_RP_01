// array in js

// []
// let array = [];
// let array =[1,2,3,4,5,6]
// let strings =['pen','eraser','pencil']
// let data  = [1,'strings', true, 23

let user = [];

// function enter_data(name,gender,age){
//     user.push(name);
//     user.push(gender);
//     user.push(age);

//     console.log(user);
//     user.pop();
//     console.log(user);
// }

// enter_data("Aman","Male",25);

// let num =[1,2,3,4,5]
//[0,1,2,3,4]
// console.log(num.join("."));

// console.log(num[1]);

// const arr = new Array(1,2,3,4,5);
// console.log(arr)

// for(let i=0; i< num.length ; i++){
//     console.log(num[i]);
// }


//2D array

// const matrix = [
//     [1,2,3],
//     [4,5,6,11],
//     [7,8,9]
// ];

// //matrix=  [   [1,2,3],   [4,5,6,11],     [7,8,9]     ]
// for(let i=0; i<matrix.length; i++ ){
//     for(j=0;j<matrix[i].length;j++){
//         console.log(matrix[i][j]);
//     }
// }


// Objects

// 1. Object literal

// const person = {
//     name: "John",
//     age:30,
//     isStudent:false,
//     sayHello:function(){
//         console.log("Hello")
//     }
// };
// console.log(person);

// const person  = new Object();


// person.name = "Amit";
// person.age =27;
// person.isStudent =false;
// person.sayHello =function(){
//     return ("Hello!");
    
// }
// console.log(person);

// console.log(person.age);
// console.log(person["age"]);
// console.log(person.sayHello());

// person.age=29;
// console.log(person);


// function Person(name,age){
//     //properties
//     this.name =name;
//     this.age=age;

//     //method
//     this.sayHello= function(){
//         console.log("Hello, My name is "+this.name+" and I am "+this.age+" years old."); 
//     };
// }

// const person1= new Person("John",30);
// person1.sayHello();

//make a constructor, taking student data, name, age, rollno, subjects, make 2-4 function/method