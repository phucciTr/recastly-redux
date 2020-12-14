import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import _ from 'lodash';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous options to handle a video search!

  return _.debounce((dispatch) => {
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
  }, 200);

};

export default handleVideoSearch;
