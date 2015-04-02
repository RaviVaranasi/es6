var operand1 = 4;
if(true){
	var operand2 = 6;
}
console.log("Sum:" + (operand1 + operand2));


var x = 1;
function foo(){
	var x = 2;
	console.log("inside " + x);
}
foo();
console.log("outside " + x);


for(var i = 0; i < 10; i++){
	console.log(i);
}
console.log("Final:" + i);