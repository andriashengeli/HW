const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});


const names = ["John", "Sarah", "Mike"];

names.forEach(function(name) {
    console.log("Hello, " + name);
});



let num1 = [10, 20, 30];

let sum = 0;
num1.forEach(function(number) {
    sum += number;
});


console.log(sum);


const words = ["javascript", "is", "awesome"];

words.forEach(function(word) {
    console.log(word.length);
});



let students = ["nika", "andria", "luka"];

students.forEach(function(student, index) {
    console.log(index + " - " + student);
});


const num2 = [2,4,6,8,10]

num2.map(function(num2){
    console.log(num2 * 2)
})



const names2 = ["andria", "saba","giorgi"]

const upperCaseNames = names2.map(function(names2){
    return names2.toUpperCase();
})
console.log(upperCaseNames);


const users = [
     { name: "John", age: 20 },
     { name: "Sarah", age: 25 }
   ];
   

const userNames = users.map(function(user) {
    return user.name;
});

console.log(userNames);