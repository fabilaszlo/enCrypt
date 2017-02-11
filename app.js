var messageOriginal = "Top Secret? Really?";
messageOriginal = messageOriginal.toUpperCase();

var cryptABC_Basic = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var cryptABC=cryptABC_Basic;
var distanceKey = 15;

var cryptABCkeyword ="FÁBI LELLE LUCA";
var cryptABCkeywordArray = Array.from(cryptABCkeyword);
//console.log(cryptABCkeywordArray);

var clear = function(array) {
  for (var i=0; i<array.length; i++) {
    if (array.indexOf(array[i]) <0) {
      array[i]="";
    }
    else {
      for (var j=i+1; j<array.length; j++) {
        if (array[j] === array[i]) {
          array[j] = "";
        }
      }  
    }
  }
  return(array.join(''));
}


clear(cryptABCkeywordArray);
console.log(clear);