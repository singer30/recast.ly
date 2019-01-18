import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  console.log(options);
  var base = 'https://www.googleapis.com/youtube/v3/search';
  var url = `${base}?part=snippet&${options.query}=php&${options.key}=${YOUTUBE_API_KEY}type=video`;

  $.ajax({
    url: url,
    type: 'GET',
    query: 'cats',
    // data: data,
    success: function(data) {
      console.log('success: ', data);
    },
    error: function(data) {
      console.log('error: ', data);
    }
  });

};

// searchYouTube();

export default searchYouTube;
