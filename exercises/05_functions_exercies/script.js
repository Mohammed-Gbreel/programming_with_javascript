// Create funcion to find match character in word depends on array

// Solve
function letterFinder(word, match) {
    for (var i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log('Found letter ', match, 'at', i);
        } else {
            console.log('---No found match at ', i);
        }
    }
}

letterFinder("mohammed", "m");