const btn = document.getElementById("btn")
const div = document.getElementById("div")


btn.addEventListener("click", () => {
    const red = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const transperancy = Math.random() + 0.1
    console.log(transperancy)



    div.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${transperancy})`
})