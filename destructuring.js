var [a, b] = [1, 2];

console.log(a);
console.log(b);


var customerToReturn = {
	firstName: 'Pat', 
	lastName: 'Cummins', 
	age:40, 
	isPop: true,
	customerKey: '12348WEB'
};

let getCustomer  = () =>  customerToReturn;

var {customerKey, isPop } = getCustomer();

console.log(customerKey);
console.log(isPop);




console.log(a);
console.log(b);

var [a, b] = [1, 2];
var [first, ...rest] = [1,2,3,4,5];
console.log(first);

function curry(fn, ...first){
    return function(...second){
        return fn(...first, ...second);
    };
}

// comment other one
/*
let {a, b, c} = { a: 1, b:2};


var customerToReturn = {
	firstName: 'Pat', 
	lastName: 'Cummins', 
	age:40, 
	isPop: true,
	customerKey: '12348WEB',
	address: {
		city: 'Austin',
		state: 'TX'
	}
};

let getCustomer  = () =>  customerToReturn;

var {customerKey: key, isPop: popStar,  address : {state: s} } = getCustomer();

console.log(key);
console.log(popStar);
console.log(s);



*/





