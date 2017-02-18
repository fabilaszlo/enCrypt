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

var setPoliCryptABC = function (array1, array2) {
    var newArray = [];
    for (var i = 0; i < array1.length; i++) {
        newArray[i] = rollCryptABC(array2, array2.indexOf(array1[i]));
    }
    return(newArray);
}
/*
var enCryptCaesar = function (string, array1, array2) {
    return (Array.from(string).map(function (i) { return array2[i%(poliCryptABC.length)][array1.indexOf(i)]; })).join('');
}
*/
// oldschool encryptCaesar function
var enCryptPoliAlphabetic = function(string, array1, array2) {
    var newarray = [];
    for (var i=0; i<string.length; i++) {
        newarray[i] = array2[i%(poliCryptABC.length)][array1.indexOf(string[i])];
        //console.log(string[i]+ ' ' + array2[i%(poliCryptABC.length)][array1.indexOf(string[i])]);
    }
    return newarray.join('');
}
var deCryptPoliAlphabetic = function(string, array1, array2) {
    var newarray = [];
    for (var i=0; i<string.length; i++) {
        newarray[i] = array1[array2[i%(poliCryptABC.length)].indexOf(string[i])];
    }
    return newarray.join('');
}


poliCryptABC = setPoliCryptABC(keyWord, cryptABC_Basic);
console.log(poliCryptABC);
console.log(poliCryptABC.length);
messageOriginal = clearArray(Array.from(messageOriginal), cryptABC_Basic);
messageCrypted = enCryptPoliAlphabetic(messageOriginal, cryptABC_Basic, poliCryptABC);
console.log(messageCrypted);

console.log(deCryptPoliAlphabetic(messageCrypted, cryptABC_Basic, poliCryptABC));
