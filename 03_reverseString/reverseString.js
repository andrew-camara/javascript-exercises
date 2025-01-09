const reverseString = function(word) {
    let reversedWord = ""
    for (let i = 1; i < (word.length + 1); i++) {
        reversedWord += word.at(-i)
    }
    return reversedWord
};

// Do not edit below this line
module.exports = reverseString;
