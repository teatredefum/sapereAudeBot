
/**
 * 
 * @param {js/Alice/Room} room 
 * @param {js/Box/Being} author 
 */
function Ui(params){
    
	this.mRoom = params["room"];
	this.mAuthor = params["author"];

	var self = this;

	console.log("Create room for Lucy---------------");
	console.log(this);
	
	var Engine = require("../Alice/Engine.js");
	this.engine = new Engine();

	this.engine.run(this.mRoom.mTitle, {name:'Lucy', age:'42'}, function(){
		self.send("Hola");
	});	
	  
}

/**
 * 
 */
Ui.prototype.send = function(text, extra){

	console.log("Sending");

	var self = this;

	this.engine.out(
		self.mAuthor,
		text, 
		function(err, responce){
			console.log("Back from out");
			console.log(responce);
			if (extra) extra();
		}
	);

};

module.exports = Ui;

