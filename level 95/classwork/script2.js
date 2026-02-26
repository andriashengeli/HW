// for in ის საშუალებით ჩვენ შეგვიძლია გადავუაროთ ობიექტს რომელიც შემდეგ წვდომას გვაძლევს ობიექტში არსებულ ყველა key - ზე 


// ხოლო for of ის საშუალებით წვდომა გვეძლევა value - ზე ანუ მნიშვნელობებზე 

const user = {
    name: "andria",
    lastname: "shengelia",
    age: 15
}

for(let key in user){
    console.log(key)
}

const name = "Andria";

for (let char of name) {
  console.log(char);
}