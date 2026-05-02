// შექმენით set-ი, რომელიც თავიდან იქნება ცარიელი.

// შემდეგ შექმენით 10 ელემენტიანი სია, სადაც გექნებათ დუბლიკატი ელემენტებიც. გადაუარეთ ამ სიას for loop-ით და ჩაამატეთ შექმნილ set-ში თითოეული რიცხვი.

// while ციკლის მეშვეობით მინდა, რომ მომხმარებელს შემოატანინოთ რიცხვი იქამდე, სანამ ის არ შემოიყვანს ისეთ რიცხვს, რომელიც არის set-ში.

// იმის შემდეგ, რაც მომხმარებელი შემოიტანს set-ში არსებულ რიცხვს, თქვენ ის უნდა წაშალოთ იქიდან.

// საბოლოოდ დაბეჭდეთ ეს სეტი და მისი ზომა(მასში ელემენტთა რაოდენობა)

// ამ დავალებაში დაგჭირდებათ set-ის შემდეგი მეთოდები: add, has, delete


const myset = new Set();

const mylist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2];

for (let i = 0; i < mylist.length; i++) {
    myset.add(mylist[i]);
}


let userInput;

while(true) {
    userInput = Number(prompt("შეიყვანეთ რიცხვი:"));

    if (myset.has(userInput)){
        console.log("რიცხვი არის set - ში და წაიშალა");
        myset.delete(userInput);
        break;
    }else{
        console.log("რიცხვი არ არის set - ში, გთხოვთ შეიყვანოთ სხვა რიცხვი");
    }
}

console.log(myset);
console.log(myset.size);


const map = new Map();

map.set("name", "andria");
map.set("age", 15);


console.log(map.delete("name"));

console.log(map.get("age"));