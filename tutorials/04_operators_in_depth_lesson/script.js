// ===== OPerators in depth =====

/* === Adn operator && ===
- true & true will output  true 
- false & true will output false 
- true & false will output false 
- false & false will output false
*/

var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17); // True
console.log(currentTime < 9 && currentTime < 17) // False
console.log(currentTime > 9 && currentTime > 17) // False 
console.log(currentTime < 9 && currentTime > 17) // False

console.log("=============================================")
/* === Or operator || ===
- true || true will output  true 
- false || true will output true 
- true || false will output true 
- false & false will output false
*/

var currentValue = 7;
console.log(currentValue < 9 || currentValue < 17); // True 
console.log(currentValue > 9 || currentValue < 17); // true
console.log(currentValue < 9 || currentValue > 17); // true
console.log(currentValue > 9 || currentValue > 17); // false

console.log("===========================================")
/* === The logical not operator ! ===
- false to true 
- true to false 
*/
var petHungrey = true;
console.log("Pet is hungrey: ", petHungrey);
console.log("Pet is hungrey: ", !petHungrey);
console.log(petHungrey);

// To reasign the value of petHungrey
petHungrey = !petHungrey;
console.log("Pet is hungrey: ", petHungrey);
console.log("Pet is hungrey: ", !petHungrey);
console.log(petHungrey);


console.log("===========================================")

/* === The Modulus operator % ===
- It returns the remainder of division
*/
console.log(Math.ceil(22 / 5));
console.log(22 % 5); // 2
// The output is 2, meaning, when I divide 22 and 5, I get a 4, and the remainder is 2



console.log("===========================================")

/* *** The equality operator [==] ***
- The equality operator checks if two values are equal
- [==] comparing value only not data type
*/
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 == 6); // false 5 not equal 6

console.log("===========================================")

/* *** The stric equality operator [===] ***
- The equality operator checks if two values are equal
- [==] comparing value and data type
*/
console.log(5 === 5); // true
console.log(5 === "5"); // false
console.log(5 === 6); // false 5 not equal 6 in value and data type too

console.log("===========================================")

/* === The inequality operator [!=] ===
- The inequality operator checks if two values are not the same
*/
console.log(5 != "5"); // false

/* === The strict inequality operator [!==] ===
- The inequality operator checks if two values are not the same
*/
console.log(5 !== "5"); // true

/* === Using the + operators on strings and numbers ===
- Combining two strings using the + operator
*/
console.log("Note" + "book");
console.log("Inter" + "net");
console.log(365 + " days");
console.log(12 + " month");

/* === The addition assignment operator, += 
- The addition assignment operator is used when one wants to accumulate the values stored in a variable
*/
var mon = 1;
var tue = 2;
var wed = 1;
var thu = 2;
var fri = 3;
console.log(mon + tue + wed + thu + fri); // 9


var overtime = 1;
overtime += 2;
overtime += 1;
overtime += 2;
overtime += 3;
console.log(overtime); // 9

var longString = "";
longString += "Once";
longString += " upon";
longString += " a";
longString += " time";
longString += "...";
console.log(longString); // "Once upon a time..."


// === Operator precedence and associativity ===
console.log(1 * 2 + 3);
/* 
There are two kinds: 
- left-to-right associativity
- right-to-left associativity
*/
var num = 10; // right to left