  /**
   * 
   * @param {js/Box/Being} owner 
   * @param {String} title 
   * @param {String} file 
   * @param {String} avatar 
   */
  function Room(owner, title, file, avatar){
    
      this.mOwner = owner;
      this.mTitle = title;
      this.mFile = file;
      this.mAvatar = avatar;
    
  }

  module.exports = Room;

