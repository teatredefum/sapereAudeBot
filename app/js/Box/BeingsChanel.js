'use strict';

function BeingChanel(data){

	this.messages = data;	

	if ( !this.messages ) this.messages = [];

	if ( !Array.isArray(this.messages) ) {
		let list = [];
		list.push(this.messages);
		this.messages = list;
	}

}

BeingChanel.prototype.getList = function(){
	
		return this.messages;

}

BeingChanel.prototype.load = function(){
	
	var Message = require(__dirname + '/Being.js');	
		
	var message = new Message("Gallardo", "Independiente", "Matemático", "gallardo.png");	
	this.messages.push(message);

	message = new Message("Lucy", "TeatreDeFum Dev, Ataraxia Archive", "Bot", "lucy.png");	
	this.messages.push(message);
	
	message = new Message("Alejandra", "Independiente", "Poeta y bióloga", "alejandra.jpg");	
	this.messages.push(message);

	message = new Message("Efestión", "Popular Academia de las Letras españolas", "Gastrónomo", "cortazar.jpg");	
	this.messages.push(message);

	message = new Message("Maríaceta", "Popular Academia de las Letras españolas", "Académica", "maria.jpg");	
	this.messages.push(message);

	message = new Message("Don Juan de Mairena", "Escuela Superior de Sabiduría Popular", "Sabio", "juan.png");	
	this.messages.push(message);

	message = new Message("Emiaj", "Independiente", "Cuántico", "emiaj.png");	
	this.messages.push(message);

	return this.messages;

}

module.exports = BeingChanel;


