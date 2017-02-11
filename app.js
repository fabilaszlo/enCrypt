var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = messageOriginal;

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=cryptABC_Basic;
var distanceKey = 15;

var cryptABCkeyword ="FÁBI LELLE LUCA";
console.log(cryptABCkeyword);
//var cryptABCkeywordArray = Array.from(cryptABCkeyword);
//console.log(cryptABCkeywordArray);

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

cryptABCkeyword = clearString(cryptABCkeyword,cryptABC);
cryptABCkeyword = removeDuplicationsFromString(cryptABCkeyword);
console.log(cryptABCkeyword);
cryptABC = modifyCryptABCWithKeyword(cryptABCkeyword,cryptABC);
console.log(cryptABC);

/*
var messageInArray = Array.from(messageOriginal);
var messageCryptedInArray = Array.from(messageCrypted);

var enCryptCaesar = function () {
  for (var i=0; i < messageCryptedInArray.length; i++) {
   if (cryptABC.indexOf(messageCryptedInArray[i]) >= 0) {
    messageCryptedInArray[i] = cryptABC[(cryptABC.indexOf(messageCryptedInArray[i])+distanceKey)%26];
    }
   else {
    messageCryptedInArray[i] = "";
   } 
  }
}

console.log(messageOriginal);
enCryptCaesar();

console.log(messageCryptedInArray);

messageCrypted = messageCryptedInArray.join('');
console.log(messageCrypted);

var secretMessageArray =[];

var deCryptCaesar = function () {
  for (var i=0; i < messageCrypted.length; i++) {
   if (cryptABC.indexOf(messageCrypted[i]) >= 0) {
    secretMessageArray[i] = cryptABC[(cryptABC.indexOf(messageCrypted[i])+(26-distanceKey))%26];
    }
   else {
    secretMessageArray[i] = "";
   } 
  }
}

deCryptCaesar();

var secretMessage = secretMessageArray.join('');
console.log(secretMessageArray);
console.log(secretMessage);

*/