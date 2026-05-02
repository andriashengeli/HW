fetch("https://fakestoreapi.com/products")
    .then((respone) => respone.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
    .finally(() => console.log("მოთხოვნა წარმატებით შესრულდა"));
    

    
