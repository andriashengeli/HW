function addTask(){
    let input = prompt("enter text");



    let div = document.createElement("div")

    let p = document.createElement("P")
    p.textContent = input 

    let btn = document.createElement("button")
    btn.textContent = "delete"

    div.appendChild(p)
    div.appendChild(btn)

    let div1 = document.getElementById("tododiv")
    div1.appendChild(div)
    
}














function changeMode(){

}