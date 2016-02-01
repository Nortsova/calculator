function add(num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);
	return num1 + num2;
}
function rob(num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);
	return num1 - num2;

}
function multiply(num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);
	return num1 * num2;
}
function split(num1, num2) {
	num1 = Number(num1);
	num2 = Number(num2);
	return num1 / num2;
}

function calc(value) {
	if(value.indexOf('+') !== -1) {
		var string = value.split("+");
		var a = string[0];
		var b = string[1];
		num1 = Number(a);
		num2 = Number(b);
		var sum = num1 + num2;
		var msg = a + "+" + b + "=" + sum;
		if (isNaN(sum)) {
			alert("Ошибка, вы ввели не число!");
		}
		else {
			alert(msg);
		}
	}
	else if(value.indexOf('-') !== -1) {
		var string = value.split("-");
		var a = string[0];
		var b = string[1];
		num1 = Number(a);
		num2 = Number(b);
		var sum = num1 - num2;
		var msg = a + "-" + b + "=" + sum;
		if (isNaN(sum)) {
			alert("Ошибка, вы ввели не число!");
		}
		else {
			alert(msg);
		}
	}
	else if(value.indexOf('*') !== -1) {
		var string = value.split("*");
		var a = string[0];
		var b = string[1];
		num1 = Number(a);
		num2 = Number(b);
		var sum = num1 * num2;
		var msg = a + "*" + b + "=" + sum;
		if (isNaN(sum)) {
			alert("Ошибка, вы ввели не число!");
		}
		else {
			alert(msg);
		}
	}
	else if(value.indexOf('/') !== -1) {
		var string = value.split("/");
		var a = string[0];
		var b = string[1];
		num1 = Number(a);
		num2 = Number(b);
		var sum = num1 / num2;
		var msg = a + "/" + b + "=" + sum;
		if (isNaN(sum)) {
			alert("Ошибка, вы ввели не число!");
		}
		else {
			alert(msg);
		}
	}
} 


var enter = prompt("Посчитай! Можешь использовать два числа и действия +, -, *, /.");



if (enter !== null) {
	calc(enter);
}
else  {
		alert("Упс, ты сделал что-то не так =(. Попробовать еще раз?");
		var enter = prompt("Посчитай! Можешь использовать два числа и действия +, -, *, /.");
}