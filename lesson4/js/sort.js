var arr = [3, 7, -2, -5, 6, 0 ,10]; 


function convert(val) {
	return +val;
}


for (i = 0; i < arr.length ; i++) {
	if (convert(arr[i]) > convert(arr[i + 1])) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}

for (i = 0; i < arr.length ; i++) {
	if (convert(arr[i]) > convert(arr[i + 1])) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
}

for (i = 0; i < arr.length ; i++) {
	if (convert(arr[i]) > convert(arr[i + 1])) {
		var temp = arr[i];
		arr[i] = arr[i + 1];
		arr[i + 1] = temp;
	}
	console.log(arr[i]);
}


	console.log(arr);