const box = document.querySelector("#box");
let left = 0;
let leftOrRight = true;


const myAnimation = setInterval(() => {
    left += leftOrRight ? 1 : -1;

    if(left === 170 || left === 0) {
        leftOrRight = !leftOrRight
    }

    box.style.left = `${left}px`;
    console.log("intarval ფუნქცია გაეშვა");
}, 10)

box.addEventListener("click", () => {
    clearInterval(myAnimation);
})