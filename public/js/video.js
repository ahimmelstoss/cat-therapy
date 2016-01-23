var catVideos = [
  "http://media.giphy.com/media/3o7Zetm5wATDKEjwNW/giphy.mp4",
  "http://media.giphy.com/media/fXgKfzV4aaHQI/giphy.mp4",
  "http://media.giphy.com/media/3o7ZelktOSI7VbDxCM/giphy.mp4",
  "http://media.giphy.com/media/3o7ZeQPwunkTegDTP2/giphy.mp4",
  "http://media.giphy.com/media/3o7ZeBkCY5KzLOhnOg/giphy.mp4",
  "http://media.giphy.com/media/l0NwExmFF3fcEpFg4/giphy.mp4",
  "http://media.giphy.com/media/3o7ZeG6B7oovgbjGiA/giphy.mp4",
  "http://media.giphy.com/media/l0NwKj9nKmu71HtC0/giphy.mp4",
  "http://media.giphy.com/media/l0NwtJG5HdTu6kceI/giphy.mp4",
  "http://media.giphy.com/media/3o7ZeKaKLj7XRq2jTO/giphy.mp4",
  "http://media.giphy.com/media/3o7ZeRkCs8oYFbdsGY/giphy.mp4",
  "http://media.giphy.com/media/3o7Zexa5gsdW6fgnZK/giphy.mp4",
  "http://media.giphy.com/media/3o7Zev5VmoXb7y886I/giphy.mp4",
  "http://media.giphy.com/media/l0NwQKh3XtnP0Uenm/giphy.mp4",
  "http://media.giphy.com/media/26tn7CCcdrzuQ9tFC/giphy.mp4",
  "http://media.giphy.com/media/l0NwQYfxIlusmr63C/giphy.mp4"
];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * catVideos.length));
  $("#cat-video").attr("src", catVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});
