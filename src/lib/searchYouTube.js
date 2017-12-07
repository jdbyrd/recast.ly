var searchYouTube = (options, callback) => {
  options.q = options.query || options.q;
  options.maxResults = options.max || 5;
  options.videoEmbeddable = 'true';
  options.type = 'video';
  options.part = 'snippet';
  options.key = options.key || window.YOUTUBE_API_KEY;
  let result;
  
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: function(data) {
      console.log('Success');
      callback(data.items);
    },
    error: function(error) {
      console.error('Failed', error);
    }
  });
};

window.searchYouTube = searchYouTube;
