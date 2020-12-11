import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

// var rootReducer = (state = {}, action) => {
//   state.videoList = videoList(undefined, action);
//   state.currentVideo = currentVideo(undefined, action);
//
//   return state;
// };

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

var rootReducer = (state = {}, action) => {

  // var result = combineReducers({currentVideo: currentVideoReducer, videoList: videoListReducer});
  // return result;

  let newState = {};
  newState.videoList = videoList(undefined, action);
  newState.currentVideo = currentVideo(undefined, action);

  if (action.type) {

    if (action.type === 'CHANGE_VIDEO_LIST') {
      newState.videoList = videoList(state.videoList, action);

    } else if (action.type === 'CHANGE_VIDEO') {
      newState.currentVideo = currentVideo(state.currentVideo, action);
    }

    console.log('state.videoList = ', newState.videoList);
    console.log('state.currentVideo = ', newState.currentVideo);
  }
  return newState;
};

export default rootReducer;