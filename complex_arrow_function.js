

// lexical binding of this
var Widget = {
	init: function() {
		document.addEventListener("click", (event) => {
			this.doSomething(event.type);
		});
	},
	doSomething: function(type){
		console.log("Handling event of type:" + type);
	}
};

Widget.init();
