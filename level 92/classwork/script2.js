let numbers = [50,15,99,100,20,]

function checkNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 20) {
      return false;
    }
  }
  return true;
}

console.log(checkNumbers(numbers));

let names = ["ანდრია","ნიკა","სანდრო","საბა","გიორგი"]

let filterednames = []

for(let i = 0; i<names.length;i++){
    if (names[i][0] === "ს"){
        filterednames.push(names[i])
    }
}


console.log(filterednames)


let namesList = ["გიორგი", "ალექსანდრე", "დავით"];

let allLongerThan6 = true;

for (let i = 0; i < namesList.length; i++) {
  if (namesList[i].length <= 6) {
    allLongerThan6 = false;
    break;
  }
}

console.log(allLongerThan6);


let myself = {
  name: "andria",
  lastname: "shengelia",
  age: 15
};

console.log(
  `my name is ${myself.name}, my last name is ${myself.lastname} and I'm ${myself.age} years old`
);