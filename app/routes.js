"use strict";

module.exports = function(app) {
  
  // GET LUCY 
  var lucy = function(req, res) {
  
    'use strict';
    
    var SmartAlice = require(__dirname + '/js/Box/SmartAlice.js');
    var sAlice = new SmartAlice();
    res.render('lucy', { 
                          chat: sAlice.messagesChanel.load(),
                          history: sAlice.MediasChanel.load(),
                          people: sAlice.BeingsChanel.load(),
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
 /* app.get('/chat', chat);
  app.get('/', tutorial);
  app.get('/:id', index);
  app.get('/cache/uniprot/ec1.json', cache);
  app.get('/tutorial', tutorial);
  */
}