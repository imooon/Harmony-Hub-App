$(document).ready(function() {
    var youTubeKey = "AIzaSyDD6KMC2KaoZ9TdnRvR6t5v9062USQ-_kw";
    var channelId = "watch?v=36m1o-tM05g";
    var url = "https://www.googleapis.com/youtube/v3/playlists";

    var options = {
        part: "snippet",
        key: youTubeKey,
        maxResults: 5,
        playlistId: UCAuUUnT6oDeKwE6v1NGQxug
    }

    function loadVideos() {
      $.getJSON(url, options, function(data){
        console.log(data)
      })
    }
});