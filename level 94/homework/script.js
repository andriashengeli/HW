// შექმენი ობიექტი სადაც გექნება გექნება ორი გასაღები, მათი მნიშვნელობა კი იყოს კი შენი საყვარელი მანქანის ბრენდი და მოდელი, დაამატე ახალი გასაღები რომელშიც შეინახავ გამოშვების წელს

const myFavoriteCar = {
  brand: "mercedes",
  model: "cls63",
  
};

myFavoriteCar.releaseYear = 2012;

console.log(myFavoriteCar);

// შექმენი ობიექტი calculator, რომელსაც ექნება მეთოდი add(a, b) და დააბრუნებს ჯამს.

const calculator = {
    add: function(a, b) {
        return a + b;

    }

}

console.log(calculator.add(5, 10)); 




//  შექმენი ობიექტი user სადაც გექნება name და age. წაშალე age გასაღები და დაამატე weigth


const user = {
    name: "andria",
    age:15
}

delete user.age

user.weigth = "60kg"
console.log(user)

// 4)შექმენი ობიექტი book და შეცვალე მისი title გასაღები.

const book = {
    title: "Old Title",
    author: "shota rustaveli",
    year: 1712 
}



book.title = "new title"

console.log(book)


// 5)შექმენი ობიექტი და გამოიყენე for...in, რომ დაბეჭდო მხოლოდ keys.


let person1 = {
    name:"andria",
    lastname: "shengelia",
    age: 15
}

for(let key in person1){
    console.log(key)
}

console.log(person1)