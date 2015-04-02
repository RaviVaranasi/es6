
var operand1 = 4;
if(true){
	let operand2 = 6;
}
console.log("Sum:" + (operand1 + operand2));



function doSomething() {
	console.log("1:" + a);
	let a = 1;
	console.log("2:" + a);
};

doSomething();



for(var i = 0; i < 10; i++){
	console.log(i);
}
console.log("Final:" + i);
