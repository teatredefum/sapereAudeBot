'use strict';

//SmartAlice.js
module.exports = function(params) {

	var MessagesChanel = require(__dirname + '/MessagesChanel.js');
	var MediasChanel = require(__dirname + '/MediasChanel.js');	
	var BeingsChanel = require(__dirname + '/BeingsChanel.js');    
	var Captions = require(__dirname + '/Talk/Captions.js');    

    return {
       	messagesChanel: new MessagesChanel(),	
		MediasChanel: new MediasChanel(),	
		BeingsChanel: new BeingsChanel(),
		Captions: new Captions()
    }
}

