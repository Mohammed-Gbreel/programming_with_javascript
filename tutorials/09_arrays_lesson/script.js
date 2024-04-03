//======== Arrays ========

// Declare arrays 
var name1 = "Mohamed";
var name2 = "Gbreel";
var name3 = "Mogadam";

// Instead of that i can declare all of them in one using arrays
var names = ["Mohamed", "Gbreel", "Mogadam"]
console.log(names);

// to select one of them using index array is zero best indexes
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]); // give me undefined case no value in index 3

// Sperate line ===
console.log("========================================");

// Loop through the elements using for loop
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

console.log("========================================");

// Loop through elements using while loop
var numbers = [10, 20, 30, 40, 50, 60];
var i = 0;
while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}

console.log("========================================");

// Multiplication form array
const numbersTow = [1, 2, 3, 4, 5];
const length = numbersTow.length;
for (let i = 0; i < length; i++) {
    console.log(numbersTow[i] *= 2);
}

console.log("========================================");

// create function array 
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + 1, arr[i]);
    }
}

var colors = ["red", "orange", "yellow", "blue", "green", "black"];
listArrayItems(colors);

// To start the count from one instead of zero, i +1 

