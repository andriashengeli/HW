// getElementbyId გამოიყენება იმისთვის რომ html ფაილიდან წამოვიღოთ რაღაც ელემენტები და მათზე შემდეგ ჯავასკრიპტით მოვახდინოთ სხვადასხვა ოპერაციები.

// getElementBytagName - ამ მეთოდით შეგვიძლია ვიპოვოთ ელემენტები მისი თეგის სახელით და პირდაპირ წამოვიღოთ ის ელემენტი, რომელიც გვინდა.

// getElementByClassName - ამ მეთოდით შეგვიძლია ვიპოვოთ ელემენტები მაგრამ მისი კლასის სახელით რომელიც ჩვენ html ფაილში გადავეცით.

// querySelector - ამ მეთოდით შეგვიძლია ვიპოვოთ ელემენტები რომელიც შეიძლება იყოს id, class ან tag ანუ სამივე ერთდროულად.

// querySelectorAll- ამათ შორის განსხვავება ის არის რომ queryselectorAll - ით ჩვენ შეგვიძლია ვიპოვოთ ყველა ელემენტი რომელიც გვინდა და ამ ელემენტებს შევინახავთ მასივში ხოლო querySelector - ით ჩვენ შეგვიძლია ვიპოვოთ მხოლოდ პირველი ელემენტი რომელიც გვინდა.


let p1 = document.getElementById("p1");

let h1 = document.getElementsByTagName("h1");

let button = document.getElementsByClassName("btn");

let h2 = document.querySelector("h2");

let h3= document.querySelectorAll("h3");