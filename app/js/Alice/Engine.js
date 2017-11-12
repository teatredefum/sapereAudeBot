'use strict';


//Captions.js
module.exports = function(params) {

	var aimlHigh = require("aiml-high");
	var self = this;	

	/*
	var roomName, topics, botData;
	var authorData, message, callback;
	*/

	var theLoad = function(aimlFiles, callback){
		
		console.log("The load-----------------");
		// console.log(JSON.stringify(self));		

		self.aiml = new aimlHigh(self.botData, 'Goodbye');
		self.aiml.loadFiles(aimlFiles);
		
	};

	var theRoom = function(room, bot){

		self.room = room;
		self.bot = bot;

		console.log("The load The Room---------------");
		//console.log(JSON.stringify(self));

	};
	
	/**
	 * 
	 * @param {Being} authorData 
	 * @param {String} message 
	 * @param {Function} callback (answer, wildCardArray, input)
	 */
	var out = function(authorData, message, callback){

		console.log(authorData.mAuthor + " wants to know an");
		console.log("... engine find answer for: " + message);
		self.aiml.findAnswer(message, callback);
	};

	var run = function(room, bot, callback){

		theRoom(room, bot);
		
		theLoad([__dirname + "/aiml/v000.aiml"], callback);	  
	};

    return {       
		run: run,
		out: out		
    }
}

