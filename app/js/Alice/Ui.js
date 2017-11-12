var Engine = require("../Alice/Engine.js");
var Being = require("../Box/Being.js");
var Message = require("../Box/Message.js");
/**
 * 
 * @param {js/Alice/Room} room 
 * @param {js/Box/Being} author 
 */
function Ui(room, author){
    
	this.mRoom = room;
	this.mAuthor = author;
	this.mBot = new Being(
		"Lucy",
		"Bot",
		"TeatreDeFum Dev, Ataraxia Archive",
		"lucy.png"
	)

	var self = this;

	console.log("Create room for Lucy---------------");
	//console.log(this);
	
	
	this.engine = new Engine();

	this.engine.run(
		this.mRoom, 
		this.mBot, 
		function(){
			console.log("lucy is ready");
		}
	);	
	  
}

/**
 * 
 */
Ui.prototype.send = function(text, extra){

	console.log("Sending");
	//console.log(text);

	var self = this;

	this.engine.out(
		self.mAuthor,
		text.mText, 
		function(answer, wildCardArray, input){
			console.log("Back from out");
			console.log(answer, wildCardArray, input);
			var TheResponse = new Message(
				self.mRoom, 
				self.mBot, 
				answer, 
				new Date(), 
				self.mBot.mAvatar, 
				false // Don't mark Aiml bot as aimls (no need to proceed in aiml factory!!)
			);
			if (extra) extra(TheResponse);
		}
	);

};

module.exports = Ui;

