// arror function არის ფუნქცია რომელიც არის განსხვავებული ჩვეულებრივი ფუნქციისგან თავისი სინტაქსით და ქცევით ასევე არის ანონიმური ფუნქცია ანუ არ აქვს სახელი
// და უფრო კომპაქტური ფორმა ფუნქციის დაწერისთვის

let getage = (age) => {
    return age * 2;
}
console.log(getage(5)); 


let sayHello = (name) => {
    return `Hi ${name}`;
}

console.log(sayHello("John"));


function multiply(num1){
    return num1 * 3;
}

function multiply2(num2){
    return multiply(num2) ** 2;
}

console.log(multiply2(4));


function plius(num3){
    return num3 + 10;
}

console.log(plius(5));



const minus = function(num4){
    return num4 - 2;
}

console.log(minus(8));


const divide = (num5) => {
    return num5 / 2;
}

console.log(divide(10));