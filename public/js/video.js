var catVideos = [
  "http://media.giphy.com/media/l41YAo5H47wxazw2s/giphy.mp4",
  "http://media.giphy.com/media/3o7qDLUNLWz6V2Xra0/giphy.mp4",
  "http://media.giphy.com/media/l41YxT3DxTQh2exig/giphy.mp4",
  "http://i.imgur.com/e5ZXjtI.mp4",
  "http://i.imgur.com/F0SZiay.mp4",
  "http://i.imgur.com/aQJziZ0.mp4",
  "http://i.imgur.com/PuzYo2A.mp4",
  "http://i.imgur.com/wpzC4pv.mp4",
  "http://i.imgur.com/xyY3ipO.mp4",
  "http://i.imgur.com/NvbhUqY.mp4",
  "http://i.imgur.com/nxPHkYB.mp4",
  "http://i.imgur.com/GyGcYCt.mp4",
  "http://i.imgur.com/4AJUGBf.mp4",
  "http://i.imgur.com/PVtCuso.mp4",
  "http://i.imgur.com/f7Q2aJZ.mp4",
  "http://i.imgur.com/ObolcBf.mp4",
  "http://i.imgur.com/Tb43HCT.mp4",
  "http://i.imgur.com/CuOCtDs.mp4",
  "http://i.imgur.com/W5zGaQa.mp4",
  "http://i.imgur.com/AxrMDXg.mp4",
  "http://i.imgur.com/GEqLvh4.mp4"
];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * catVideos.length));
  $("#cat-video").attr("src", catVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});
