  function Message(room, author, text, time, avatar, isAiml){
    
      this.mRoom = room;
      this.mAuthor = author;
      this.mText = text;
      this.mTime = time;
      this.mAvatar = avatar;      
      this.isAiml = isAiml;
    
      // console.log(this);
    }

    Message.prototype.isForAiml = function(){

      return this.isAiml;

    }

    module.exports = Message;

