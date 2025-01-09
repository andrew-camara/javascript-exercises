const repeatString = function(string, repeatN) {
    if (repeatN < 0) return "ERROR";
    let stringArray = []
    for (let i = 0; i < repeatN; i++) {
        stringArray.push(string);
    }
   return stringArray.toString().replaceAll(",","");
};

// Do not edit below this line
module.exports = repeatString;
