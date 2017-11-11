"use strict";
var debug = require('debug');

module.exports = function(app) {
  
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

      var SmartAlice = require(__dirname + '/js/Box/SmartAlice.js');
      var sAlice = new SmartAlice();
      res.render('lucy', { 
                            chat: sAlice.messagesChanel.load(),
                            history: sAlice.MediasChanel.load(),
                            people: sAlice.BeingsChanel.load(),
                            roomUi: sAlice,
                            translations: sAlice.Captions,
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
  
}