import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!

  let handleSearch = function() {
    let action = {
      'type': 'SEARCH_VIDEO',
      'query': q,
    };
    return action;
  };

  return handleSearch;
};

export default handleVideoSearch;
