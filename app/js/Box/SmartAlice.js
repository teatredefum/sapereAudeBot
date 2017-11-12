'use strict';

//SmartAlice.js
module.exports = function(params) {

	var self = this;

	var params = {};

	var MessagesChanel = require(__dirname + '/MessagesChanel.js');
	var MediasChanel = require(__dirname + '/MediasChanel.js');	
	var BeingsChanel = require(__dirname + '/BeingsChanel.js');    
	var Captions = require(__dirname + '/Talk/Captions.js');    
	var Ui = require(__dirname + '/../Alice/Ui.js');    
	var Room = require(__dirname + '/../Alice/Room.js');    

	var loadRoom = function(room, being){
		return new Ui(room, being);
	}

    return {
       	messagesChanel: new MessagesChanel(),	
		MediasChanel: new MediasChanel(),	
		BeingsChanel: new BeingsChanel(),
		Captions: new Captions(),		
		Ui: loadRoom
    }
}

