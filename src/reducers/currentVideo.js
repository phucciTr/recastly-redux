import Redux from 'redux';

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.

  if (action.type === 'CHANGE_VIDEO') {
    let newState = {};
    newState.video = action.video;
    return newState.video;
  }

  return state;
};



export default currentVideoReducer;
