var reducer = function (state, action) {
  
  switch (action.type) {

    case 'GET_VIDEOS':
      return Object.assign({}, state, {
        videos: 
            [{ text: action.text }, ...state.videos]
      });
    
    default: 
      return state;
  }
};

module.exports = reducer;
