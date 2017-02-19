var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = "";

var cryptABC_Basic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var polyCryptABC = [];
var keyWord = ("FÁBI LELLE").toUpperCase();
keyWord = Array.from(keyWord);

var clearText = (text, characterBasis) => typeof text === 'string' ? 
    (Array.from(text)).filter(item => characterBasis.includes(item)).join('') :
    text.filter(item => characterBasis.includes(item) );

var uniqText = text => typeof text === 'string' ? 
    (Array.from(text)).reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item), []).join('') :
    text.reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item), []);

var rollCryptABC = function (basic, distance) {
    return basic.map(item => basic[(distance + basic.indexOf(item)) % basic.length]);
}

var setPolyCryptABC = function (key, basic) {
    var newArray = [];
    for (var i = 0; i < key.length; i++) {
        newArray[i] = rollCryptABC(basic, basic.indexOf(key[i]));
    }
    return(newArray);
}

var enCryptPolyAlphabetic = function(text, basic, key) {
    var newarray = [];
    for (var i=0; i<text.length; i++) {
        newarray[i] = key[i%(key.length)][basic.indexOf(text[i])];
    }
    return newarray.join('');
}
var deCryptPolyAlphabetic = function(text, basic, key) {
    var newarray = [];
    for (var i=0; i<text.length; i++) {
        newarray[i] = basic[key[i%(key.length)].indexOf(text[i])];
    }
    return newarray.join('');
}

keyWord = uniqText(clearText(keyWord, cryptABC_Basic));
console.log(keyWord);

console.log(messageOriginal);
messageOriginal = clearText(messageOriginal, cryptABC_Basic);
console.log(messageOriginal);

polyCryptABC = setPolyCryptABC(keyWord, cryptABC_Basic);
console.log(polyCryptABC);

messageCrypted = enCryptPolyAlphabetic(messageOriginal, cryptABC_Basic, polyCryptABC);
console.log(messageCrypted);
console.log(deCryptPolyAlphabetic(messageCrypted, cryptABC_Basic, polyCryptABC));