var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = "";

var cryptABC_Basic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var poliCryptABC = [];
var keyWord = Array.from("FÁBI LELLE");

var clearArray = function (array1, array2) {
    return array1.filter(function (i) { return array2.includes(i) }).join('');
}

var removeDuplicationsFromArray = function (array) {
    return array.reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item));
}

var rollCryptABC = function (array, number) {
    return array.map(function (i) { return array[(number + array.indexOf(i)) % array.length]; })
}

keyWord = removeDuplicationsFromArray(Array.from(clearArray(keyWord, cryptABC_Basic)));
console.log(keyWord);

var setPoliCryiptABC = function (array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        newArray[i] = rollCryptABC(array2, array2.indexOf(array1[i]));
    }
    return(newArray);
}

poliCryptABC = setPoliCryiptABC(keyWord, cryptABC_Basic);
console.log(poliCryptABC);
