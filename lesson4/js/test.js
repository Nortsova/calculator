
// var arr = [
//   [1,2,3], 
//   [4,5,6], 
//   [7,8,9]
// ];


// answer (а)
// for (var i = 0; i < 3; i++) {
// for(var j = i; j < 3; j++)
//   console.log(arr[i][j])
// }

// answer (б)
// for (var i = 2; i >= 0; i--) {
//  for(var j = i; j >= 0; j--)
//    console.log(arr[i][j])
// }

// answer (и)
// for (var i = 0; i < 3; i++) {
//  for(var j = 2 - i; j >= 0; j--)
//    console.log(arr[i][j])
// }

// answer (к)
// for (var i = 2; i >= 0; i--) {
//  for(var j = 2 - i; j < 3; j++)
//    console.log(arr[i][j])
// }

// answer (в)
// for (var i = 0; i < 3; i++) {
//  q = 3 - 2*i + i;
//  n = 3 - q;
//  for(var j = n; j < q; j++)
//    console.log(arr[i][j])
// }

// answer (г)
//  for (var i = 2; i >= 0; i--) {
//   new_i = 2 - i;
//   q = 3 - 2*new_i + new_i;
//   n = 3 - q;
//   for(var j = n; j < q; j++)
//     console.log(arr[i][j])
// }

// answer (ж) 
//  for (var i = 0; i < 3; i++) {
//  q = 3 - 2*i + i;
//  n = 3 - q;
//  for(var j = n; j < q; j++)
//    console.log(arr[j][i])
// }

// answer (д)
//  for (var i = 2; i >= 0; i--) {
//   new_i = 2 - i;
//   q = 3 - 2*new_i + new_i;
//   n = 3 - q;
//   for(var j = n; j < q; j++)
//     console.log(arr[j][i])
// }

