function MessageChanelPlug(being){

	this.being = being;

	console.log("Init for  MCPlug SmartAlice");

}

MessageChanelPlug.prototype.init = function(){

	var self = this;
	
	function onSend(eventData){
		
		eventData.preventDefault();
		var text = $('#MessageText').val();
/*
		text = text.toLowerCase()
		.replace(",", "")
		.replace(".", "")
		.replace(":", "")
		.replace("á", "a")
		.replace("é", "e")
		.replace("í", "i")
		.replace("ó", "o")
		.replace("ú", "ú");*/


		var message = {
			mRoom: JSON.parse(self.room),
		  mAuthor: JSON.parse(self.being),
			mText: text,
			mTime: new Date(),
			mIsAiml: true
		};

		$.post('/send', message, function (data){
		  $('#MessageText').val('').focus();
		},
		'json');
	}

	function longPoll(data){

		console.log("Doing longPoll");
		//console.log(data);

		console.log("Readyyyy on MCP");
		console.log("Got My List?");
		console.log($('#MessageStreamList'));

		console.log("Got My Data?");
		//console.log(data);
		if (data && data.messages) {
		  for (var i = 0; i < data.messages.length; i++) {
				console.log("Got Message!");
				console.log(message);
				var message = data.messages[i];			

				console.log("Build TheMessage!");				
				var TheAnswer = new MessagePlugBot(message.question, message.answer);		
				console.log(TheAnswer);

				console.log("Add message to list UI");
				$('#MessageStreamList').append(TheAnswer.render());
					console.log("Can you see it on screen? I'm going to scroll!");
				$('body').scrollTop($('ul li').last().position().top + $('ul li').last().height())
		  }
		} else {
			messages = [];
		}		

		$.ajax({
		  cache: false,
		  type: "GET",
		  url: "/recv",
		  success: function(data){
			 longPoll(data);
		  }
		});
	}

	$(document).ready(function(){
		console.log("Readyyyy on MCP");
		console.log("Got My button?");
		console.log($('#MessageSendButton'));

		$('#MessageSendButton').click(onSend);

		console.log("Got My Being?");
		//console.log($('#TheBeing').val());

		TheMessageChanel.room = $('#TheRoom').val();
		TheMessageChanel.being = $('#TheBeing').val();

		longPoll();
		
	});
}

var TheMessageChanel = new MessageChanelPlug()
TheMessageChanel.init();


  
  