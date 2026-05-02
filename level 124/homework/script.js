// კომენტარებით ახსენით fetch ფუნქცია, ასევე .then, .catch, finally მეთოდები

// fetch ფუნქცია არის javascript - ის ფუნქცია რომელიც გამოიყენება რაღაც მოთხოვნების მისაღებად, მაგალითად მონაცემების წამოსაღებად
// და კიდევ აქ უნდა ჩავწეთო ჩვენ ლინკი საიდანაც გვინდა რომ რაღაც კონკრეტული მონაცემები წამოვიღოთ.

// .then მეთოდი რომელიც გამოიყენება მაშინ როდესაც ჩვენი fetch ფუნქცია წარმატებით შესრულდება და ჩვენ გვინდა რომ რაღაც კონკრეტული ქმედება განხორციელდეს.

// .catch მეთოდი  გამოიყენება მაშინ როდესაც ჩვენი fetch ფუნქცია არ შესრულდება ანუ არის then სააწინაღმდეგო მეთოდი

// .finally მეთოდი გამოიყენება მაშინ როდესაც ჩვენი fetch ფუნქცია შესრულდება მაგრამ მნიშვნელობა არ აქვს წარმატებით შესრულდება თუ არა მაინც იმუშავებს ჩვენ მიერ დაწერილი ქმედება ამ მეთოდში.

// მონაცემების მიღების შემდეგ თითოეული მომხმარებლის ინფორმაცია username, email, password ლამაზად(card-ების სახით) გამოიტანეთ საიტზე.
// თითოეულ მომხმარებლის ქარდს დაუმატეთ "Delete" ღილაკი, რომელიც მას წაშლის.
fetch("https://fakestoreapi.com/users")
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {

    const card = document.createElement("div");

card.innerHTML = `
  <h3>${user.username}</h3>
  <p>Email: ${user.email}</p>
  <p>Password: ${user.password}</p>
`;

const btn = document.createElement("button");
btn.textContent = "Delete";

btn.addEventListener("click", () => {
  card.remove();
});

card.appendChild(btn);
document.body.appendChild(card);
    });
  });