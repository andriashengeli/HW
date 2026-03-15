//  შექმენით სია, სადაც შეინახავთ 5 რიცხვს. გაუკეთეთ ამ სიას დესტრუქცია და თითოეული რიცხვი შეინახეთ ხვლადში. შემდეგ დაბეჭდეთ ეს ცვლადები.

const numbers = [1, 2, 3, 4, 5];

const [num1, num2, num3, num4, num5] = numbers;

console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);

//  შექმენით ობიექტი, სადაც გექნებათ მინიმუმ სამი კუთვნილება.

// გაუკეთეთ ამ ობიექტს დესტრუქცია და წამოიღეთ პირველი და მესამე კუთვნილებები. ასევე მესამე კუთვნილება შეინახეთ სხვა სახელით.

// დაბეჭდეთ შემდეგ ორივე ცვლადი, რომელიც დესტრუქციისას შექმენით

const person = {
    name: "andria",
    age: 15,
    city: "zugdidi"
};

const { name, city: location } = person;

console.log(name);
console.log(location);

//  იმავე ობიექტზე გამოიყენეთ დღეს ნასწავლი ყველა ობიექტის მეთოდი და დაბეჭდეთ მათი შედეგები(.keys, .values, .entries)

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));