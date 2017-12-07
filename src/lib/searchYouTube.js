var searchYouTube = (options, callback) => {
  options.videoEmbeddable = 'true';
  options.type = 'video';
  options.part = 'snippet';
  options.maxResults = options.maxResults || 5;
  options.key = window.YOUTUBE_API_KEY;
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
