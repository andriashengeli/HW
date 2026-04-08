const myform =document.querySelector("form");


myform.addEventListener("submit",(e) =>{
    e.preventDefault();
    const product = myform.product.value;
    const quantity = Number(myform.quantity.value)
    const price = Number(myform.price.value)
    
    if(product === "" || quantity === 0 || price === 0){
        resultdiv.textcontent = "შეავსე ყველა ველი";
        return;
    }
    const total = quantity * price

     resultdiv.innerHTML = `
     <p>product: ${product}</p>
     <p>quantity: ${quantity}</p>
     <p>Total price:${price}`

});

