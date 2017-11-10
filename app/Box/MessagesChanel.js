'use strict';

function MessagesChanel(data){

	this.messages = data;	

	if ( !this.messages ) this.messages = [];

	if ( !Array.isArray(this.messages) ) {
		let list = [];
		list.push(this.messages);
		this.messages = list;
	}

}

MessagesChanel.prototype.getList = function(){
	
		return this.messages;

}

MessagesChanel.prototype.load = function(){
	
	var Message = require(__dirname + '/Message.js');	
		
	var message = new Message("Gallardo", "Lucy, canta una canción", new Date(), "gallardo.png");	
	this.messages.push(message);

	message = new Message("Lucy", "Dime una canción", new Date(), "lucy.png");	
	this.messages.push(message);
	
	message = new Message("Gallardo", "Nothing else matters", new Date(), "gallardo.png");	
	this.messages.push(message);

	return this.messages;

}

module.exports = MessagesChanel;


