const myform =document.querySelector("form");
let productList = [];
myform.addEventListener("submit",(e) =>{
    e.preventDefault();
    
    const product = e.target[0].value;
    const quantity = Number(e.target[1].value)
    const price = Number(e.target[2].value)
    
    if(product === "" || quantity === 0 || price === 0){
        resultdiv.textcontent = "შეავსე ყველა ველი";
        return;
    }

    productList.push({
        name: name,
        quantity: quantity,
        price: price
    })
    console.log(productList)
    render()
});
function render(){
    productList.forEach(product => {
        
     result.innerHTML = `
     <div>
     <p>product: ${product}</p>
     <p>quantity: ${quantity}</p>
    <p>Total price:${price}</p>
    <button>+</button>
    <button>-</button>
    </div>`
    });
}



