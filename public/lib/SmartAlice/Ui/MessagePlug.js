/** 
 * See server side on /vies/Room/Message.ejs
 **/
function MessagePlug(message){

	this.template = `
		<li class="right clearfix">
		<span class="chat-img pull-left">
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
	`
}

MessagePlug.prototype.render = function(){

	return this.template;
}