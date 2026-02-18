// 1)შექმენით პროგრამა რომელიც შეამოწმებს არის თუ არა ინტეჯერების სიაში არსებული ყველა ელემენტი დადებითი 
const numbers = [1, 2, 3, 4, 5];
function isallipositive(arr) {
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] <= 0) {
            return false;
        }    }
    return true;
}

console.log(isallipositive(numbers));


// 2)შექმენი ინტეჯერების სია და დააბრუნე ახალი სია სადაც იქნება მათი კვადრატები


const numbers2 = [1, 2, 3, 4, 5];

let squares = numbers2.map(function(num) {
    return num * num;
});


console.log(squares);


// 3)შექმენი სია სადაც იქნება მრავალი მონაცემთა ტიპი და დატოვე მხოლოდ სტრინგები


const mixedList = [1, "hello", true, "world", 3.14, "javascript"];

const stringsonly = mixedList.filter(function(item) {
    return typeof item === "string";
});
console.log(stringsonly);


