var actions = {
  
  getVideos: function (text) {
    return {
      type: 'GET_VIDEOS',
      text: text
    };
  }

};
module.exports = actions;
