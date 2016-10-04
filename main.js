
var button = document.getElementById("calculate-button");
var answer = document.getElementById("answer");

console.log(button);
console.log(answer);

var testf = function(event){
	event.preventDefault();
	var textBox1 = document.getElementById("value-one");
	var textBox2 = document.getElementById("value-two");

	var value1 = Number(textBox1.value);
	var value2 = Number(textBox2.value);

	answer.innerHTML = value1 + value2;
};

button.addEventListener("click", testf);