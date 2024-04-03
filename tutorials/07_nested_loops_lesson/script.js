// ===== Nested loops =====

// 5 Days in 2 week using nested loop
for (var week = 1; week <= 2; week++) {
    for (var day = 1; day <= 5; day++) {
        console.log("Week " + week + " day " + day);
    }
}

console.log("===============================")

// Printing summer months cross 2023 to 2024
for (var year = 2023; year < 2025; year++) {
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log(".......... " + month);
    }
}

console.log("===============================")

// Let's say I want to output a custom multiplication table.
for (var i = 1; i < 2; i++) {
    for (var j = 1; j <= 12; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}

console.log("===============================")

//nested loops - 
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + " times " + secondNum + " equals " + firstNum * secondNum);
    }
}


console.log("===============================")

// This makes for some very interesting combinations.
for (var i = 100; i > 10; i = i - 10) {
    for (var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j);
    }
}


// printing cubes
var cubes = 'ABCDEFG';
//styling console output using CSS with a %c format specifier
for (var i = 0; i < cubes.length; i++) {
    var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
    console.log("%c" + cubes[i], styles)
}