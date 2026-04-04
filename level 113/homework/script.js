const form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
});