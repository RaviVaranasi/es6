let [x, y] = [1, 2];

console.log(x);
console.log(y);


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


function curry(fn, ...first){
    return function(...second){
        return fn(...first, ...second);
    };
}

// comment other one

let {a, b, c} = { a: 1, b:2};


var customerToReturn1 = {
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

let getCustomer1  = () =>  customerToReturn1;

var {customerKey: key, isPop: popStar,  address : {state: s} } = getCustomer1();

console.log(key);
console.log(popStar);
console.log(s);









