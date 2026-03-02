const telephone1 = {
    brand: "iphobe",
    model: "17 pro max",
    aboutelephone: function(){
        console.log("this is " + this.brand + " " + this.model);
    }
}

telephone1.aboutelephone();


const telephone2 = {
    brand: "samsung",
    model: "s24 ultra",
    aboutelephone: function(){
        console.log("this is " + this.brand + " " + this.model);
    }
}

telephone2.aboutelephone();



const factoryfunction = (hobby1, hobby2, hobby3) => {
    return{
        hobby1: hobby1,
        hobby2: hobby2,
        hobby3: hobby3,
        myhobby(){
            console.log("my hobbies are " + this.hobby1 + ", " + this.hobby2 + ", and " + this.hobby3);
        }
    }
}

const myhobby = factoryfunction("playing football", "playing video games", "cooking");
myhobby.myhobby();


