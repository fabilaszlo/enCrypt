var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = "";

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=[];
var distanceKey = 5;


var clearString = function(string, array) {
    return Array.from(string).filter(function(i) {return array.includes(i)}).join('');
}

var rollCryptABC = function(array,number) {
    var newarray = [];
    for (var i=0; i<array.length; i++) {
       newarray[i]= array[(i+distanceKey)%array.length];
    }
    return newarray;
}

var enCryptCaesar = function(string, array1, array2) {
    var newarray = [];
    for (var i=0; i<string.length; i++) {
        newarray[i] = array2[array1.indexOf(string[i])];
    }
    return newarray.join('');
}

var deCryptCaesar = function(string, array1, array2) {
    var newarray = [];
    for (var i=0; i<string.length; i++) {
        newarray[i] = array1[array2.indexOf(string[i])];
    }
    return newarray.join('');
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