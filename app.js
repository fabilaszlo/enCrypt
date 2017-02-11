var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = messageOriginal;

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=cryptABC_Basic;
var distanceKey = 3;

var cryptABCkeyword ="FÁBI LELLE LUCA";

var removeDuplicationsFromString = function(string) {
    var array = Array.from(string);
    for (var i=0; i<string.length; i++) {
       for (var j=i+1; j<string.length; j++) {
           if (array[j] === array[i]) {
             array[j]="";
           }
       }
    }
    return(array.join(''));
}

var clearString = function(string,array) {
    var arrayFromString = Array.from(string);
    for (var i=0; i<string.length; i++) {
        if (array.indexOf(arrayFromString[i]) <0) {
            arrayFromString[i] = ""
        }
    }
    return(arrayFromString.join(''));
}

var modifyCryptABCWithKeyword = function (string,array) {
    var arrayFromString = Array.from(string);
    array = arrayFromString.concat(array);
    for (var i=0; i<string.length; i++) {
        for (var j = string.length; j<(array.length); j++) {
            if (array[j] === arrayFromString[i] ) {
                array[j] = "";
            }
        }
    }
    var stringFromArray = array.join('');
    return(Array.from(stringFromArray));
}

var enCryptCaesar = function (string,array) {
    arrayFromString = Array.from(string);
    var result = [];
    for (var i=0; i<string.length; i++) {
        result[i] = array[(array.indexOf(arrayFromString[i])+distanceKey)%26];
    }
    return(result.join(''));
}

var deCryptCaesar = function (string,array) {
    arrayFromString = Array.from(string);
    var result = [];
    for (var i=0; i<string.length; i++) {
        result[i] = array[(array.indexOf(arrayFromString[i])+(26-distanceKey))%26];
    }
    return(result.join(''));
}
console.log(distanceKey);
console.log(cryptABCkeyword);

cryptABCkeyword = cryptABCkeyword.toUpperCase();
cryptABCkeyword = clearString(cryptABCkeyword,cryptABC);
cryptABCkeyword = removeDuplicationsFromString(cryptABCkeyword);
console.log(cryptABCkeyword);
console.log(cryptABC);
cryptABC = modifyCryptABCWithKeyword(cryptABCkeyword,cryptABC);
console.log(cryptABC);
messageOriginal = clearString(messageOriginal,cryptABC);
console.log(messageOriginal);

messageCrypted = enCryptCaesar(messageOriginal,cryptABC);
console.log(messageCrypted);

var secretMessage=messageCrypted;

secretMessage = deCryptCaesar(secretMessage,cryptABC);
console.log(secretMessage);