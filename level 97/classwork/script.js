// DOM (Document Object Model) არის HTML დოკუმენტის ობიექტური მოდელი რომელსაც ბრაუზერი ქმნის და რომლის მეშვეობითაც JavaScript-ს შეუძლია ვებსაიტთან ურთიერთობა.


// ჯერ პირველ რიგში ჩვენი html დოკუმენტი გარდაიქმნება ჯავასრიპტის ობიექტად რომელსაც ეწოდება parsing.

// შემდეგ მოდის manipulation რა დროსაც იკითხება ჩვენ მიერ გაწერილი ჯავასკრიპტის კოდი ბრაუზერი ძრავის მიერ 

// და ბოლოს render საბოლოოდ ყველაფერი დარენდერდება და გამოიტანს ელემენტებს dom - ის გამოყენებით 



// დავალება 1: ფერის შეცვლა (Color Changer)
// დავალება 1: ფერის შეცვლა (Color Changer)
// პირობა: შექმენი button და div (ზომით 100x100px). დაწერე სკრიპტი, რომელიც ღილაკზე ყოველი დაჭერისას div-ს ფონს შეუცვლის (მაგალითად, გადართავს წითელსა და ლურჯს შორის).




const btn = document.getElementById("btn")
const div = document.getElementById("div1")

 btn.addEventListener("click", function () {
      if (div.style.backgroundColor === "red") {
        div.style.backgroundColor = "blue";
      } else {
        div.style.backgroundColor = "red";
      }
 });



