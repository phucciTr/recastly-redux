import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous options to handle a video search!

  let retrieveSearchedVideos = function(dispatch) {
    let options = {
      'type': 'SEARCH_VIDEO',
      'query': q,
      'key': YOUTUBE_API_KEY
    };

    let videos;

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));
    });
  };

  return retrieveSearchedVideos;
};

export default handleVideoSearch;
