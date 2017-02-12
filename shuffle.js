var messageOriginal = "Titkod rab; ha elengeded, rabja lesz";
messageOriginal = messageOriginal.toUpperCase();
var messageCrypted = messageOriginal;

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=cryptABC_Basic;
/*
var deleteSpaceOldschool = function (string) {
    var array = Array.from(string);
    for (var i=0; i<string.length;i++) {
        if (array[i] === " ") {
            delete(array[i]);
        }
    }
    return array.join('');
}
*/
// this removes whitespaces from a string
var deleteSpaces = function (string) {
    return Array.from(string).filter(function(str){return /\S/.test(str)}).join('');
}
var clearString = function(string, array) {
    return Array.from(string).filter(function(i) {return array.includes(i)}).join('');
}

var shuffle = function (string) {
    var line1 = [];
    var line2 = [];
    for (var i = 0; i<string.length; i++) {
        if (i%2 === 0) {
            line1.push(Array.from(string)[i])
        }   
        else {
            line2.push(Array.from(string)[i])
        }
    }
    return(line1.concat(line2)).join('');
}

console.log(messageOriginal);
//messageOriginal = deleteSpaces(messageOriginal);
//console.log(messageOriginal);
messageOriginal = clearString(messageOriginal,cryptABC);
console.log(messageOriginal);
messageCrypted = shuffle(messageOriginal);
console.log(messageCrypted);