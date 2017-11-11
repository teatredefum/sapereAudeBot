'use strict';

function MediasChanel(data){

	this.messages = data;	

	if ( !this.messages ) this.messages = [];

	if ( !Array.isArray(this.messages) ) {
		let list = [];
		list.push(this.messages);
		this.messages = list;
	}

}

MediasChanel.prototype.getList = function(){
	
		return this.messages;

}

var releaseA =		
" - Repositorio Lucy<br>" +
" - Repositorio s-Alice<br>" +
" - Sala de chat: screen.teatredefum.net/lucy --&gt; ejs | HTML5 | w3.css<br>" +
" - Conocer a https://github.com/teatredefum/<strong>J.A.R.V.I.S</strong><br>";

var release0 = 		
" - Unidad de procesamiento AIML --&gt; npm aiml | <strong>unit test</strong> :" +
" sing a song<br>" +
" - Demo <strong>s-Alice v 0.0.0</strong> An alice bot that sings a song named" +
" <em>Knocking on heavens doors</em>.<br>" +
" - Conocer a https://github.com/teatredefum/<strong>rosie</strong><br>" +
" <br> ";

var release1 =		
" - Unidad de procesamiento SPARQL --&gt; js client | <strong>unit test</strong>:" +
" list some coders<br>" +
" - Demo <strong>s-Alice v 0.0.1</strong> An alice bot that speaks sparql.<br>" +
" - Conocer a https://github.com/teatredefum/<strong>iris</strong><br>";

var release2 =
" - Unidad e procesamiento MPTT --&gt; mongoose-tree | <strong>unit" +
" test</strong>: crud songs, crud coders<br>" +
" - Demo <strong>s-Alice v 0.0.2</strong> An alice bot that speaks sparql and" +
" remebers what's going on.<br>" +
" - Conocer a https://github.com/teatredefum/<strong>sapereAudeBot</strong><br>";

var release3 =
" - Conexión unidades de procesamiento --&gt; <strong>unit test</strong>: some" +
" people chats on a room and Lucy skips turing test.<br>" +
" - Demo <strong>Lucy v 0.0.0</strong> A chat room where you can talk to an alice" +
" bot that speaks with Live.DBPedia on remote and with some local customizable" +
" memory on local.<br>" +
" - Conocer a https://github.com/teatredefum/<strong>rivescript</strong>-js<br>";

var release4 = 		
" - Unidad de exportación de conversaciones HTML | PDF --&gt; <strong>unit" +
" test</strong>: A menu option to export current chat room history. A timeline" +
" browser to open old conversations.<br>" +
" - Demo Lucy <strong>v 0.0.1</strong> Lucy's memory is exportable to HMTL | PDF" +
" format.<br>" +
" - <em>Spare time</em>" +
" https://github.com/teatredefum/<strong>awesome-selfhosted</strong><br>";

var mediaStream = [releaseA, release1, release2, release3, release4];

MediasChanel.prototype.load = function(){
	
	var Media = require(__dirname + '/Media.js');	

	for( var release in mediaStream){

		var message = new Media(
							"Loop " + release, 
							mediaStream[release], 
							new Date(), 
							"release.png",
							"home.html"
						);	
		this.messages.push(message);
	}
		
	return this.messages;

}

module.exports = MediasChanel;


