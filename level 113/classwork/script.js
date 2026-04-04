// შექმენით საიტი, სადაც გექნებათ ორი number ტიპის input-ი და ერთი ღილაკი "Sum"

// მომხმარებელს ორივე input-ში შემოატანინეთ რიცხვი და "Sum" ღილაკზე დაჭერისას დაბეჭდეთ მათი ჯამი. ორივე input-ში მონაცემების შეყვანა აუცილებელი უნდა იყოს

const input5 = document.getElementById("input1")
const input6 = document.getElementById("input2")
const btn = document.querySelector("button")

btn.addEventListener("click", sum)
function sum() {
    const num1 = input5.value
    const num2 = input6.value


    if(num1 === "" || num2 === ""){
        console.log("please enter both numbers")
    } else {
        const result = Number(num1) + Number(num2)
        console.log(result)
    }
}