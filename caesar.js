var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = "";

var cryptABC_Basic = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var cryptABC = [];
var distanceKey = 3;
var keyWord = ("Fábi Horka Ákos").toUpperCase();
keyWord = Array.from(keyWord);

var clearText = function (text, characterBasis) {
    if (typeof text !== 'string') {
        return text.filter(function (i) { return characterBasis.includes(i) });
    }
    else
        return (Array.from(text)).filter(function (i) { return characterBasis.includes(i) }).join('');
}

var uniqText = function (text) {
    if (typeof text === 'string') {
        return (Array.from(text)).reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item), []).join('');
    }
    else return text.reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item), []);
}

var rollCryptABC = function (basic, distance) {
    return basic.map(function (i) { return basic[(distance + basic.indexOf(i)) % basic.length]; })
}

var enCryptCaesar = function (text, basicABC, keyABC) {
    return (Array.from(text).map(function (i) { return keyABC[basicABC.indexOf(i)]; })).join('');
}

var deCryptCaesar = function (text, basicABC, keyABC) {
    return (Array.from(text).map(function (i) { return basicABC[keyABC.indexOf(i)]; })).join('');
}

var keyABC = function (key, basic) {
    return uniqText(key.concat(rollCryptABC(basic, (basic.indexOf(key[key.length - 1]) + 1))));
}

console.log(cryptABC_Basic);
cryptABC = rollCryptABC(cryptABC_Basic, distanceKey);
console.log(distanceKey);
console.log(cryptABC);

console.log(messageOriginal);
messageCrypted = enCryptCaesar(messageOriginal, cryptABC_Basic, cryptABC);
console.log(messageCrypted);
console.log(deCryptCaesar(messageCrypted, cryptABC_Basic, cryptABC));

console.log(keyWord);
keyWord = uniqText(clearText(keyWord, cryptABC_Basic));
console.log(keyWord);

cryptABC = keyABC (keyWord, cryptABC_Basic);
console.log(cryptABC);
messageCrypted = enCryptCaesar(messageOriginal, cryptABC_Basic, cryptABC);
console.log(messageCrypted);
console.log(deCryptCaesar(messageCrypted, cryptABC_Basic, cryptABC));