// funciones de primera clase
function addTwoNums(a, b) {
  console.log(a + b);
}

function randomNum() {
  return Math.floor(Math.random() * 100 + 1);
}
function specificNum() {
  return 42;
}

var useRandom = true;
var getNumber;

if (useRandom) {
  getNumber = randomNum;
} else {
  getNumber = specificNum;
}

addTwoNums(getNumber(), getNumber());

// funciones de orden superior

function add2numbers(){
  var num1=randomNum();
  var num2=randomNum()*2;
  console.log("numeros dados: ",num1, " ",num2);
  return num1+num2;
}

console.log("add 2 numbers ", add2numbers());
