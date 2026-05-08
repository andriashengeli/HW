// შექმენით კლასი სახელად Car. ის უნდა ქმნიდეს ობიექტს შემდეგი კუთვნილებებით model, year, price. დაამატეთ ასევე printCarDetails მეთოდი, რომელიც დაბეჭდავს მანქანის ობიექტის შესახებ ინფორმაციას

class Car {
    constructor(model, year, price){
        this.model = model;
        this.year = year;
        this.price = price;
    }
    printCarDetails(){
        console.log(`Model: ${this.model}, Year: ${this.year}, Price: ${this.price}`);  
    }
}

const acc1 = new Car("bmw","2020","80000$");
acc1.printCarDetails();