let arrAnagram = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

// Grouping Anagram Function
let groupingAnagram = function (arrStr) {
    let objResult = {};

    arrStr.forEach(element => {
        let str = element.split('').sort();

        if (objResult[str]) { // if key on objResult doesn't exist, push the key and element to objResult
            objResult[str].push(element)
        } else {
            objResult[str] = [element]
        }

    });

    let stringAnagram = [];

    Object.entries(objResult).forEach(element => {
        stringAnagram.push(element[1])
    });

    return stringAnagram;

}

groupingAnagram(arrAnagram);