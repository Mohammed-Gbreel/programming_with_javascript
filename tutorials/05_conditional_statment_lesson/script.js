// ===== Conditional statment =====

// if statment example-1
var result = 50;
if (result > 40) {
    console.log("You pass the test");
} else {
    console.log("You fail");
}


// if statment example-2
var place = 'First';
if (place == 'First') {
    console.log('Gold');
} else if (place == 'Second') {
    console.log('Silver');
} else if (place == 'Third') {
    console.log('Bronze');
} else {
    console.log('No medal');
}

// Switch statment
var place = 'First';
switch (place) {
    case 'First':
        console.log("Gold");
        break;
    case 'Second':
        console.log('Silver');
        break;
    case 'Third':
        console.log('Bronze');
        break;
    default:
        console.log("No metal");
}


// if statment more explains
var light = 'Green';
if (light == 'Green') {
    console.log("Drive");
} else if (light == "Orange") {
    console.log("Get ready");
} else if (light == 'Red') {
    console.log("Stop don't drive");
} else {
    //this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}

//converting the previous if-else example with switch-case
var light = "Orange";
switch (light) {
    case 'Green':
        console.log("Drive");
        break;
    case 'Orange':
        console.log("Get ready");
        break;
    case 'Red':
        console.log("Stop don't drive");
        break
    default:
        console.log("The light is not green, orange, or red");
        break;
}



