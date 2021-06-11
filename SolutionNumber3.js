// From this Code (Before)
function findFirstStringInBracket(str) {
    if (str.length > 0) {
        let indexFirstBracketFound = str.indexOf("(");
        if (indexFirstBracketFound >= 0) {
            let wordsAfterFirstBracket = str.substr(indexFirstBracketFound);
            if (wordsAfterFirstBracket) {
                wordsAfterFirstBracket = wordsAfterFirstBracket.substr(1);
                let indexClosingBracketFound = wordsAfterFirstBracket.indexOf(")");
                if (indexClosingBracketFound >= 0) {
                    return wordsAfterFirstBracket.substring(0, indexClosingBracketFound);
                } else {
                    return "";
                }
            } else {
                return "";
            }
        } else {
            return "";
        }
    } else {
        return "";
    }
}

// To this Code (After)
let findStringInBracket = function(str) {
    let word = checkLengthStr(str);
    let indexFirstBracket  = foundIndexAfterFirstBracket(str);
    let indexLastBracket  = foundIndexLastBracket(str);
    return (indexFirstBracket >= 0) ? wordInBracket(word, indexFirstBracket, indexLastBracket) : "";
}

let checkLengthStr = function(str) {
    return (str.length > 0) ? str : "";
}

let foundIndexAfterFirstBracket = function(str) {
    let indexFirstAfterBracket = str.indexOf('(');
    return indexFirstAfterBracket;
}

let foundIndexLastBracket = function(str) {
    let indexLastBracket = str.indexOf(')');
    return indexLastBracket;
}

let wordInBracket = function(str, indexFirst, indexLast) {
    // indexFirst = index first bracket. To get the next index after first bracket, I add indexFirst = indexFirst + 1 to get the index.
    indexFirst += 1;
    return (indexLast >= 0) ?  str.substring(indexFirst, indexLast): "";
}

// Sample Test Cases
let sampleA = "amzesmoro";
let resultA = findStringInBracket(sampleA);
let sampleB = "(amzesmoro)";
let resultB = findStringInBracket(sampleB);
let sampleC = "***(amzesmoro)***";
let resultC = findStringInBracket(sampleC);
let sampleD = "***()***";
let resultD = findStringInBracket(sampleD);
let sampleE = "";
let resultE = findStringInBracket(sampleE);
let sampleF = "(amzesmoro";
let resultF = findStringInBracket(sampleF);
let sampleG = "amzesmoro)";
let resultG = findStringInBracket(sampleG);
let sampleH = "____am(zes)moro___";
let resultH = findStringInBracket(sampleH);
console.log(resultA, '--> resultA');
console.log(resultB, '--> resultB');
console.log(resultC, '--> resultC');
console.log(resultD, '--> resultD');
console.log(resultE, '--> resultE');
console.log(resultF, '--> resultF');
console.log(resultG, '--> resultG');
console.log(resultH, '--> resultH');