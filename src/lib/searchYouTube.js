import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  console.log(options);
  var base = 'https://www.googleapis.com/youtube/v3/search';
  var url = `${base}?part=snippet&videoEmbeddable=true&q=${options.query}&maxResults=${options.max}&key=${options.key}&type=video`;

  $.ajax({
    url: url,
    type: 'GET',
    success: function(data) {
      callback(data);
    },
    error: function(data) {
      console.log('error: ', data);
    }
  });
};


export default searchYouTube;
