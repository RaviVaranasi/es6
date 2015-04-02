var customer = {
	firstName:'',
	lastName:'',
	name() {
		return `${this.firstName} ${this.lastName}`;
	}
};

var customer1 = Object.create(customer);
customer1.firstName = 'Bill';
customer1.lastName = 'Smith';

console.log(customer1.name());



var address = {
	address1: '500 Freeport Parkway',
	city: 'Coppell',
	state: 'TX',
	address() {
		return `${this.address1} ${this.city},${this.state}`;
	}
};


var address1 = Object.create(address);

var mailableCustomer = Object.assign(customer, address);
console.log(mailableCustomer.address());
console.log(mailableCustomer.name());



