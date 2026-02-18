const object = {
    name:"andria",
    age:15,
    city: "tbilisi"
};

console.log(`my name is ${object.name} and i live in ${object.city}`)


object.height = 1.70;

object.age = 20;


console.log(object);

const object2 = {
    info: function(){
        console.log("i study in group 77")
    }
}

console.log(object2.info())


for (let i in object) {
  delete object[i];
}

console.log(person); 



let surname = "shengelia";

for (let i in surname) {
  
  console.log(surname[i]);
}