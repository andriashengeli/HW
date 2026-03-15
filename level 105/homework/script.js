// crate element 

let container = document.getElementById("container")



let p1 = document.createElement("p")
p1.textContent = "createElement example 1"

let p2 = document.createElement("p")
p2.textContent = "createElement example 2"

let p3 = document.createElement("p")
p3.textContent = "createElement example 3"

// append element
container.appendChild(p1)
container.appendChild(p2)
container.appendChild(p3)

// remove element
let remove1 = document.createElement("p")
remove1.textContent = "remove example 1"
container.appendChild(remove1)
remove1.remove()

let remove2 = document.createElement("p")
remove2.textContent = "remove example 2"
container.appendChild(remove2)
remove2.remove()

let remove3 = document.createElement("p")
remove3.textContent = "remove example 3"
container.appendChild(remove3)
remove3.remove()

// remove child element
let child1 = document.createElement("p")
child1.textContent = "removeChild example 1"
container.appendChild(child1)
container.removeChild(child1)

let child2 = document.createElement("p")
child2.textContent = "removeChild example 2"
container.appendChild(child2)
container.removeChild(child2)

let child3 = document.createElement("p")
child3.textContent = "removeChild example 3"
container.appendChild(child3)
container.removeChild(child3)