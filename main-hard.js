// Our I/O area
var textBox = document.getElementById("textBar");

var buttonC = document.getElementById("C-button");
var button0 = document.getElementById("0-button");
var button1 = document.getElementById("1-button");
var button2 = document.getElementById("2-button");
var button3 = document.getElementById("3-button");
var button4 = document.getElementById("4-button");
var button5 = document.getElementById("5-button");
var button6 = document.getElementById("6-button");
var button7 = document.getElementById("7-button");
var button8 = document.getElementById("8-button");
var button9 = document.getElementById("9-button");
var buttonMult = document.getElementById("x-button");
var buttonDiv = document.getElementById("/-button");
var buttonSub= document.getElementById("--button");
var buttonDec = document.getElementById(".-button");
var buttonEqu = document.getElementById("=-button");
var buttonAdd = document.getElementById("+-button");

button0.addEventListener("click", function () {addNum("0")});
button1.addEventListener("click", function () {addNum("1")});
button2.addEventListener("click", function () {addNum("2")});
button3.addEventListener("click", function () {addNum("3")});
button4.addEventListener("click", function () {addNum("4")});
button5.addEventListener("click", function () {addNum("5")});
button6.addEventListener("click", function () {addNum("6")});
button7.addEventListener("click", function () {addNum("7")});
button8.addEventListener("click", function () {addNum("8")});
button9.addEventListener("click", function () {addNum("9")});
buttonDec.addEventListener("click", function () {addNum(".")});
buttonAdd.addEventListener("click", function () {computeOP("+")});
buttonSub.addEventListener("click", function () {computeOP("-")});
buttonMult.addEventListener("click", function () {computeOP("*")});
buttonDiv.addEventListener("click", function () {computeOP("/")});
buttonC.addEventListener("click", function() {clearTx()});
buttonEqu.addEventListener("click", function() {computeOP("=")});

var addNum = function (character) {
	textBox.value += character;
}

var computeOP = function (character){
	var tempString = textBox.value;
	var stringArray;
	if (tempString.includes('+') || tempString.includes('*') || (tempString.includes('-') && tempString[0] != "-" )|| tempString.includes('/') ){
		clearTx();
		if(tempString.includes('+')){
			stringArray = tempString.split('+');
			textBox.value = Number(stringArray[0]) + Number(stringArray[1]);
		} else if(tempString.includes('/')){
			stringArray = tempString.split('/');
			textBox.value = Number(stringArray[0]) / Number(stringArray[1]);
		} else if(tempString.includes('*')){
			stringArray = tempString.split('*');
			textBox.value = Number(stringArray[0]) * Number(stringArray[1]);
		} else if(tempString.includes('-')){
			if (tempString[0]==="-"){
				tempString=tempString.slice(1, tempString.length);
				stringArray = tempString.split('-');
				textBox.value = (-1 * Number(stringArray[0])) - Number(stringArray[1]);
			} else {
				stringArray = tempString.split('-');
				textBox.value = Number(stringArray[0]) - Number(stringArray[1]);
			}
		}
	}

	if (character !== "="){
		textBox.value += character;
	}
}

var clearTx = function(){
	textBox.value = "";
}
