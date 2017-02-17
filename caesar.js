var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = "";

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=[];
var distanceKey = 3;
var keyWord = "FÁBI LELLE";

var clearString = function(string, array) {
    return Array.from(string).filter(function(i) {return array.includes(i)}).join('');
}
/*  oldsschool version or rollCryptABC
var rollCryptABC = function(array,number) {
    var newarray = [];
    for (var i=0; i<array.length; i++) {
       newarray[i]= array[(i+distanceKey)%array.length];
    }
    return newarray;
}
// map without parameters
var rollCryptABC = cryptABC_Basic.map(function(i){
    return cryptABC_Basic[(distanceKey+cryptABC_Basic.indexOf(i))%cryptABC_Basic.length];
})
*/

var removeDuplicationsFromString = function (string) {
    return Array.from(string).reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item), []).join('');
}
var removeDuplicationsFromArray = function (array) {
    return array.reduce((acc, item) => acc.includes(item) ? acc : acc.concat(item));
}

var rollCryptABC = function(array, number) {
    return array.map(function(i) {return array[(number+array.indexOf(i))%array.length];})
}
//
/*  oldschool encryptCaesar function
var enCryptCaesar = function(string, array1, array2) {
    var newarray = [];
    for (var i=0; i<string.length; i++) {
        newarray[i] = array2[array1.indexOf(string[i])];
    }
    return newarray.join('');
}
*/
var enCryptCaesar = function(string, array1, array2) {
    return (Array.from(string).map(function(i) {return array2[array1.indexOf(i)];})).join('');
}
//
/*  oldschool decryptCaesar function
var deCryptCaesar = function(string, array1, array2) {
    var newarray = [];
    for (var i=0; i<string.length; i++) {
        newarray[i] = array1[array2.indexOf(string[i])];
    }
    return newarray.join('');
}
*/
var deCryptCaesar = function(string, array1, array2) {
    return (Array.from(string).map(function(i) {return array1[array2.indexOf(i)];})).join('');
}

var cryptABC = rollCryptABC(cryptABC_Basic,distanceKey);
console.log(cryptABC_Basic);
console.log(cryptABC);

console.log(messageOriginal);
messageOriginal = clearString(messageOriginal,cryptABC_Basic);
console.log(messageOriginal);
messageCrypted = enCryptCaesar(messageOriginal, cryptABC_Basic, cryptABC);
console.log(messageCrypted);

console.log(deCryptCaesar(messageCrypted,cryptABC_Basic,cryptABC));

console.log(keyWord);
keyWord = Array.from(removeDuplicationsFromString(clearString(keyWord, cryptABC_Basic)));
console.log(keyWord);

console.log(cryptABC_Basic.indexOf(keyWord[keyWord.length-1])+1);
cryptABC =  Array.from(removeDuplicationsFromArray(keyWord.concat(rollCryptABC(cryptABC_Basic, (cryptABC_Basic.indexOf(keyWord[keyWord.length-1])+1)))));

console.log(cryptABC);
console.log(messageOriginal);
messageCrypted = enCryptCaesar(messageOriginal, cryptABC_Basic, cryptABC);
console.log(messageCrypted);
console.log(deCryptCaesar(messageCrypted,cryptABC_Basic,cryptABC));