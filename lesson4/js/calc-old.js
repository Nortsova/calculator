function add(num1, num2) {
	num1 = +num1;
	num2 = +num2;
	if (!isNaN(num1) && !isNaN(num2)) {
		return num1 + num2;
	}
	else {
		alert("Error! Is NaN!");
	}
}
function rob(num1, num2) {
	num1 = +num1;
	num2 = +num2;
	if (!isNaN(num1) && !isNaN(num2)) {
		return num1 - num2;
	}
	else {
		alert("Error! Is NaN!");
	}
}
function multiply(num1, num2) {
	num1 = +num1;
	num2 = +num2;
	if (!isNaN(num1) && !isNaN(num2)) {
		return num1 * num2;
	}
	else {
		alert("Error! Is NaN!");
	}
}
function split(num1, num2) {
	num1 = +num1;
	num2 = +num2;
	if (!isNaN(num1) && !isNaN(num2) ) {
		if (num2 !== 0) {
			return num1 / num2;
		}
		else {
			alert("На ноль делить нельзя!");
		}
	}
	else {
		alert("Error! Is NaN!");
	}
}


var calc = (function() {

	function convert(val) {
		return +val;
	}
	function check(val) {
		val = convert(val);
		return !isNaN(val);
	}
	return {
		add: function(num1, num2) {
			if (check(num1) && check(num2)) {
				return convert(num1) + convert(num2);
			}
			else {
				return "error";
			}
		},
		rob: function(num1, num2) {
			if (check(num1) && check(num2)) {
				return convert(num1) - convert(num2);
			}
			else {
				return "error";
			}
		},
		multiply: function(num1, num2) {
			if (check(num1) && check(num2)) {
				return convert(num1) * convert(num2);
			}
			else {
				return "error";
			}
		},
		divide: function(num1, num2) {
			if (check(num1) && check(num2) && num2 !== 0) {
				return convert(num1) / convert(num2);
			}
			else {
				return "error";
			}
		}
	}
})();



