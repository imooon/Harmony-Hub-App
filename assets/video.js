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
        var id = data.items[0].snippet.resourceId.videoId;
        mainVid(id);
        resultsLoop();
      })
    }

    function mainVid() {
      $('#video').html(`<iframe width="560" height="315" src="https://www.youtube.com/embed/36m1o-tM05g?si=u6AJdwCeLWQ8qE5R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
    }

    function resultsLoop() {

    }
});
