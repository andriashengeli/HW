const myForm = document.querySelector("form");

const users = JSON.parse(localStorage.getItem("users")) || [];

console.log(users);

myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const firstname = myForm.firstname.value;
    const lastname = myForm.lastname.value;
    const age = myForm.age.value;
    const gender = myForm.gender.value;

    users.push({ firstname, lastname, age, gender });

    console.log(users);
    localStorage.setItem("users", JSON.stringify(users));

    myForm.reset();
})