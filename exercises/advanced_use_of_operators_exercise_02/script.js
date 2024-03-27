// Advanced use of operators Exercises

// === Task 1 ===
/* Create a variable named  score and set it to  8
    Use console.log() that includes the string "Mid-level skills:"
    and compares the score variable to above 0 and below 10 using the && operator
*/

// solution
var score = 8;
console.log("Mid-level skills: ", score > 0 && score < 10);

// === Task 2 ===
/*
Complete the task using the following steps:
Declare the variable timeRemaining, and assign the value of 0 to it.
Declare the variable energy, and assign the value of 10 to it.
Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0
*/

// solution
var timeRemaining = 0;
var energy = 10;
console.log("Game over: ", timeRemaining == 0 || energy == 0);

// === Task 3 ===
/*
To achieve this task, you need to declare six variables, as follows:
The first variable, named num1,  should be assigned a number value of 2.
The second variable, named num2, should be assigned a number value of 5.
The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.
The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.
The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.
The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.
Run console log two times after you've set the variables:
The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1
The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2
*/

// solution
var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is", num1, "an even number?", result1);
console.log("Is", num2, "an even number?", result2);

// === Task 4 ===
/*
Console log the result of adding two numbers, 5 and 10, using the + operator.
Note: This task should be completed on a single line of code. The output in the console should be 15.
*/
console.log(5 + 10);


// === Task 5 ===
/*
Code three variables:
The first variable should be a string with the following value: "Now in ". Name the variable now.
The second variable should be a number with the value: 3. Name the variable three.
The third variable should a string with the following value: "D!". Name the variable d.
Console log the following code: now + three + d.
Note: The expected output should be: "Now in 3D!".
*/
var now = "Now in ";
var three = 3;
var d = "D!";
console.log(now + three + d);

// === Task 6 ===
/*
Code a new variable and name it counter, assigning it to the value of 0.
On the next line, use the += operator to increase the value of counter by 5.
On the next line, use the += operator to increase the value of counter by 3.
On the fourth line, console log the value of the counter variable.
Note: The output value should be 8.
*/

var counter = 0;
counter += 5;
counter += 3;
console.log(counter);
