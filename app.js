var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = messageOriginal;

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=cryptABC_Basic;
var distanceKey = 15;

var cryptABCkeyword ="FÁBI LELLE LUCA";
var cryptABCkeywordArray = Array.from(cryptABCkeyword);
//console.log(cryptABCkeywordArray);

var clearKeyword = function() {
  for (var i=0; i<cryptABCkeywordArray.length; i++) {
    if (cryptABC.indexOf(cryptABCkeywordArray[i]) <0) {
      cryptABCkeywordArray[i]="";
    }
    else {
      for (var j=i+1; j<cryptABCkeywordArray.length; j++) {
        if (cryptABCkeywordArray[j] === cryptABCkeywordArray[i]) {
          cryptABCkeywordArray[j] = "";
        }
      }  
    }
  }
  cryptABCkeyword = cryptABCkeywordArray.join('');
}

var modifyCryptABC = function() {
    cryptABCkeywordArray = Array.from(cryptABCkeyword);
    cryptABC = cryptABCkeywordArray.concat(cryptABC_Basic);
    for (var i=0; i<cryptABCkeywordArray.length; i++) {
        for (var j=cryptABCkeywordArray.length; j<26; j++) {
            if (cryptABC[j] === cryptABCkeywordArray[i]) {
                cryptABC[j] = "";
            }
        }
    }
    var cryptABCString = cryptABC.join('');
    cryptABC = Array.from(cryptABCString);
}



clearKeyword();
modifyCryptABC();
console.log(cryptABCkeyword);
console.log(cryptABC);

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