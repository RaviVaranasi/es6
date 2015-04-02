class Foo {
	constructor(name){
		this.name = name;
	}
	show() {
		console.log(this.name);
	}
}

let bar = new Foo('bar');
console.log(bar.show());


class Person {
	constructor(name){
		this.name = name;
	}
	show() {
		console.log(this.name);
	}
}

class Employee {
	constructor(name, id){
		super(name);
		this.id = id;
	}
	show() {
		console.log(this.id);
	}
}

let customer = new Person('Dave');
console.log(customer.show());

let employee = new Employee('Dave', 1234);
console.log(customer.show());