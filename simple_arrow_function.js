/*
Simplest example 
*/
 var fn1 = function() { return 2;}
 var fn2 = () => 2;


/*
 * One Parameters
*/
var old_even = function(x) { return x %2 === 0;}
var even = (x) => x %2 === 0;


var even1 = x => x %2 === 0;


/*
 * Multiple params
*/
var old_add = function(x, y) { return a + b;}
var add = (x, y) =>  x + y;

// does not work for multiple params with paranthesis
// var add1 = x, y =>  x + y;

var add_many_lines = (x, y) => { 	
	console.log(x + "+" + y); 
	return x + y;
}



