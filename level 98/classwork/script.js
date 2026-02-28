const car1 = {
    brand: "mercedes",
    model: "cls63",
    aboutcar: function(){
        console.log("this is " + this.brand + " " + this.model);
    }
}

car1.aboutcar();


car2 = {
    brand: "bmw",
    model: "m5",
    aboutcar: function(){
        console.log("this is " + this.brand + " " + this.model);
    }
}

car2.aboutcar();



const personfactory = (favouriteFilm,favouriteSong,favouriteAnimation) =>{
    return{
        favouriteFilm:favouriteFilm,
        favouriteSong:favouriteSong,
        favouriteAnimation:favouriteAnimation
    }
}

const n1 = personfactory("breaking bad","reflections","tom and jerry")

console.log(n1)