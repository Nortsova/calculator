var str = "10+3-7+20-13.2+3";

var string = str.split("");

function convert(val) {
	return +val;
}

var	indexArrayPlus = string.indexOf("+");
var	indexArrayMinus = string.indexOf("-");


var ArrayPlus = [];
var plus = '+';
var idx = string.indexOf(plus);
while (idx != -1) {
  ArrayPlus.push(idx);
  idx = string.indexOf(plus, idx + 1);
}



var ArrayMinus = [];
var minus = "-";
var idy = string.indexOf(minus);
while (idy != -1) {
  ArrayMinus.push(idy);
  idy = string.indexOf(minus, idy + 1);
}


for (var i = 0; i < string.length; i++) {
	arr_1 = convert(string[i]);
	arr_2 = convert(string[i+1]);


	if (i !== indexArrayPlus && i !== indexArrayMinus) {
	 	temp = string.slice(i, i+2);
	 	tempString = temp.join("");
	 	removed = string.splice(i, 2, tempString);
	}
	console.log(string[i]);
}

