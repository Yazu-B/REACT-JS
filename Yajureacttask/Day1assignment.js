//create a function that calculates the sum of numbers in an array using react and spread operators//
//Rest operator

const addUsingReact=(...nums)=>nums.reduce((a,b)=>a+b);
const result=addUsingReact(1,2,3,4,5);
console.log(result);

// //Spread operator
const numbers=[10,20]

function add(a,b){
  return a+b;
}
 let sum=add(...numbers);
console.log(sum);

//write a function to merge and destructure objects//

// Destructuring object
const student={
  name: "Yazu",
  semester: "3rd",
  roll_no: 34,
  age: 20,
}
console.log(`Student name : ${student.name}`)
console.log(`Student semester : ${student.semester}`)
console.log(`Student Roll No : ${student.roll_no}`)
console.log(`Student Age : ${student.age}`)


// Destructuring array

const fruits=["apple","Banana","Cherry","papaya","orange"]
const[a,b,c,d,e]=fruits;
console.log(a,b)

