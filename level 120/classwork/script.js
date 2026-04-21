// შექმენით თარიღის ობიექტი Date კონსტრუქტორის გამოყენებით.

// დაბეჭდეთ ეს თარიღის ობიექტი სხვადასხვა ფორმატში.

// შემდეგ შეუცვალეთ მას საათის, წუთის და წამის მონაცემები.

// შეცვლის შემდეგ სათითითაოდ წამოიღეთ get მეთოდების მეშვეობით, წელი, თვე, თარიღი, კვირის დღე და საათი.

// 2) შექმენით ამჟამინდელი თარიღის ობიექტი და დაბეჭდეთ ის.

// ასევე შექმენით ამჟამინდელი თარიღის ობიექტი მილიწამებში, დაბეჭდეთ ესეც.


const date1 = new Date(2025, 3, 18, 7, 30, 45);

console.log(date1.toString());

console.log(date1.toDateString());

console.log(date1.toISOString());

date1.setHours(7);
date1.setMinutes(30);
date1.setSeconds(45);

console.log(date1.getHours());
console.log(date1.getMinutes());
console.log(date1.getSeconds());
console.log(date1.getDay());
console.log(date1.getFullYear());

const currentDate = new Date();
console.log(currentDate);

const currentmilliseconds = Date.now();
console.log(currentmilliseconds);




