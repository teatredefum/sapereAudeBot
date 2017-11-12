"use strict";
var debug = require('debug');

module.exports = function(app) {
  

  var SmartAlice = require(__dirname + '/js/Box/SmartAlice.js');
  var Room = require(__dirname + '/js/Alice/Room.js');
  var sAlice = new SmartAlice();
  
   // GET LUCY 
   var chat = function(req, res) {
    
      'use strict';      

      res.render('chat', { 
                            title: 'messages', 
                            welcome: 'INICIO',
                            reader: 'teatredefum.net',
                            body: 'Lucy hackathon november 1st weekend',
                            footer: 'screen.teatredefum.net',
                            id: req.params.id
                          });
    };

    // GET LUCY 
   var tutorial = function(req, res) {
    
      'use strict';

      res.render('tutorial', { 
                            title: 'messages', 
                            welcome: 'INICIO',
                            reader: 'teatredefum.net',
                            body: 'Lucy hackathon november 1st weekend',
                            footer: 'screen.teatredefum.net',
                            id: req.params.id
                          });
    };

  // GET LUCY 
   var lucy = function(req, res) {
    
      'use strict';
      
      debug("Init SmartAlice");

      res.render('lucy', { 
                            chat: sAlice.messagesChanel.load(),
                            history: sAlice.MediasChanel.load(),
                            people: sAlice.BeingsChanel.load(),
                            translations: sAlice.Captions,
                            being: JSON.stringify(sAlice.BeingsChanel.load()[0]),
                            room: JSON.stringify(new Room(sAlice.BeingsChanel.load()[0], "Lucy", "file", "room.png")),
                            title: 'messages', 
                            welcome: 'INICIO',
                            reader: 'teatredefum.net',
                            body: 'Lucy hackathon november 1st weekend',
                            footer: 'screen.teatredefum.net',
                            id: req.params.id
                          });
    };

   var cache = function(req, res) {
      var foo = require(__dirname + '/public/' + 'cache/uniprot/ec1.json');
      res.send(foo);
  }
  
  app.get('/lucy', lucy);
  app.get('/chat', chat);
  app.get('/', tutorial);
  //app.get('/:id', index);
  app.get('/cache/uniprot/ec1.json', cache);
  app.get('/tutorial', tutorial);


  /**
   * CHAT SECTION
   */
  var callbacks = [];
  
  function broadcastMessage(mAsk, mAnswer, delay){
    var resp = {messages: [{question: mAsk, answer: mAnswer}]};

    console.log("Broadcast stack");
    while (callbacks.length > 0) {

      callbacks.shift()(resp);
      console.log("Firing a suscription with message...");

    }

  }
  
  app.post('/send', function(req, res){
    // console.log("Doing chat SEND method");

    var TheMessage = sAlice
              .messagesChanel
              .OnNewMessage(req.body);
    
    //broadcastMessage(TheMessage, false);          
    
    if (TheMessage.isForAiml()) {
      console.log("For Aiml message...");

      sAlice
        .Ui(TheMessage.mRoom, TheMessage.mAuthor)
        .send(TheMessage, function(TheResponse){
          console.log("Lucy replies");
          console.log(TheResponse.mText);
          broadcastMessage(TheMessage, TheResponse, true);
        });
    }     
    // res.json({status: 'ok'});
  });
  
  app.get('/recv', function(req, res){
     console.log("Doing chat get method");
    callbacks.push(function(message){
      console.log("Doing chat get method CALLABACK");
      //console.log(message);
      res.json(message);
    });
  });
   
  
}