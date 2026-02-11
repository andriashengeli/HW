let fruits = ['apple', 'banana', 'cherry'];

fruits.push("strawberry");

console.log(fruits);


let numbers = [1, 2, 3, 4, 5];

numbers.pop();

console.log(numbers);


let words = ["hello", "world", "JavaScript","goa","list"];


words.join(" - ");

console.log(words);


let list = ["item1", "item2", "item3", "item4", "item5", "item6"];

let slicedList = list.slice(2, 5);

console.log(slicedList);


let city = ["zugdidi", "tbilisi", "batumi", "kutaisi", "gori"];

city.shift();

console.log(city);

let num = [10, 20, 30];

num.unshift(5);

console.log(num);

console.log(num.length);


let animals = ["dog", "cat", "elephant", "tiger"];

let birds = ["parrot", "sparrow", "eagle"];

let combined = animals.concat(birds);

console.log(combined);



let num2 = [3, 1, 4, 1, 5, 9, 2, 6, 5];

num2.splice(3,5);

console.log(num2);