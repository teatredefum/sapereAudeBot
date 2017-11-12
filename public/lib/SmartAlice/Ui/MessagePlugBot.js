/** 
 * See server side on /vies/Room/Message.ejs
 **/
function MessagePlugBot(messageQuestion, messageAnswer){

	var message = messageAnswer;
	this.template = `
		<li class="right clearfix">
		<blockquote> <ul>`+ new MessagePlug(messageQuestion).render() + `</ul></bockquote>
		<span class="chat-img pull-right">
			<img src="images/` + message.mAvatar + `" alt="User Avatar" class="img-circle">
		</span>
		<div class="chat-body clearfix">
			<div class="header">
				<small class=" text-muted">
					<span class="glyphicon glyphicon-time"></span>
					` + message.mTime + `
				</small>
				<strong class="pull-right primary-font">					
					` + message.mAuthor.mAuthor + `
				</strong>
			</div>
			<p>
				` + message.mText + `
			</p>
		</div>
	</li>
	`;
}

MessagePlugBot.prototype.render = function(){

	return this.template;
}