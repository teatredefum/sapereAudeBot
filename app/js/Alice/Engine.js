'use strict';

/**
 * 
 * 
 * Parser

    aiml.parse(xml, callback) - parse string with AIML Xml.
    aiml.parseFiles(files, callback) - parse file or files.
    aiml.parseDir(dir, callback) - parse all files in specified directory.

* Engine

Engine constructor: var engine = new aiml.AiEngine(roomName, topics, botData)
Parameters

    roomName - (required) name of chat room.
    topics - (required) array of topics(parser results).
    botData - (optional) bot metadata (name, version, gender, etc.).

Main awesome function: engine.reply(authorData, message, callback)

* Parameters

    authorData - (required) message author metadata (name, age, etc.).
    message - (required) just message.
	callback - (required) classic js callback, nothing special: )
	
 */


 /**
  * 
  
 	HOW TO USE:

	var Engine = require("Engine.js");
	var engine = new Engine();

	engine.run('Default', {name: 'Lucy'});

	engine.out(
		{name: 'Gallardo'},
		"Lucy, canta una canción", 
		function(err, responce){
			console.log(responce);
		}
	);

*/

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
		console.log(JSON.stringify(self));		

		self.aiml = new aimlHigh(self.botData, 'Goodbye');
		self.aiml.loadFiles(aimlFiles);
		self.aiml.findAnswer("Hello", function(answer, wildCardArray, input){
			console.log("Lucy says to itself...");
			console.log(answer);
			console.log(wildCardArray);
			console.log(input);
		});
	};

	var theRoom = function(roomName, botData){

		self.roomName = roomName;
		self.botData = botData;

		console.log("The load The Room---------------");
		//console.log(JSON.stringify(self));

	};
	
	var out = function(authorData, message, callback){
		self.aiml.findAnswer(message, callback);
	};

	var run = function(roomName, botData, callback){

		theRoom(roomName, botData);
		
		theLoad([__dirname + "/aiml/v000.aiml"], callback);	  
	};

    return {       
		run: run,
		out: out		
    }
}

