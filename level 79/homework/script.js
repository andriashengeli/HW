// if else
let input = Number(prompt("enter any number you want"))

if(input>50){
    console.log('big')
}else if (input > 25 && input <=50){
    console.log('medium')
}else{
    console.log("small")
}


// ternary operator


input > 50 ? console.log('big') :
input > 25 && input <=50 ? console.log('medium') :
console.log("small")




// switch case
switch (true) {
    case (input > 50):
        console.log('big');
        break;
    case (input > 25 && input <= 50):
        console.log('medium');
        break;
    default:
        console.log('small');
        break;
}