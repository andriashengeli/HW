// // შექმენით Promise-ის ობიექტი, რომელიც დარეზოლვდება 2 წამში.
// დარეზოლვების შემდეგ დაბეჭდეთ ეს Promise ობიექტი.

// 2) შექმენით Promise-ის ობიექტი, მის callback ფუნქციაში მომხმარებელს შემოატანინეთ რიცხვი. 3 წამის შემდეგ შეამოწმეთ, თუ ეს რიცხვი ინება ლუწი დაარეზოლვეთ Promise-ი, ხოლო თუ კენტი მაშინ დაარეჯექთეთ.

// საბოლოოდ დაბეჭდეთ Promise ობიექტი


const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
        console.log(promise);
    }, 2000);
});

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const userInput = Number(prompt("enter any number "));

    if (userInput %2==0){
        resolve("the number is even")
    }else{
        reject("the number is odd")
    }
    },);


},3000)

console.log(promise1)