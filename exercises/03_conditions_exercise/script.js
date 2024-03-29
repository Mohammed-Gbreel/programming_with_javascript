// Conditions Exercises



// === Are You Old Enough? ===
/*
Declare a variable age using the var keyword and set it to the number 10.
Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".
Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".
Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".
Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".
*/
var age = 10;
if (age >= 65) {
    console.log("You get your income from your pension");
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary");
} else if (age < 18) {
    console.log("You get an allowance");
} else {
    console.log("The value of the age variable is not numerical");
}


// === days of the week program as a switch statement ===

/*
On the next line, define a new variable, name it day, and set its value to "Sunday".
Start coding a switch statement, passing the day variable as the expression to evaluate.
Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.
At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').
Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.
*/
var day = "Sunday";
switch (day) {
    case 'Monday':
        console.log("Go the gym");
        break;
    case 'Tuesday':
        console.log("Read books");
        break;
    case 'Wednesday':
        console.log("Problem solving day");
        break;
    case 'Thursday':
        console.log("Watching movie");
        break;
    case 'Friday':
        console.log("Visiting my relative");
        break;
    case 'Saturday':
        console.log("Rest day");
        break;
    case 'Sunday':
        console.log("Rest api hhhh");
        break;
    default:
        console.log('There is no such day');
        break;
}


for (var i = 0; i <= 3; i++) {
    console.log("This is line ", i)
}