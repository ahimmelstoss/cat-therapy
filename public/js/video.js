var catVideos = [
"http://media.giphy.com/media/3o85xz9Rp349GF9LkA/giphy.mp4",
"http://media.giphy.com/media/xTiTndbZr1SuRSXHc4/giphy.mp4",
"http://media.giphy.com/media/3o85xJf1ykGHcrhOQU/giphy.mp4",
"http://media.giphy.com/media/3o85xKnTeJle0D9PcA/giphy.mp4",
"http://media.giphy.com/media/3o85xqjxc52T5H7Oj6/giphy.mp4",
"http://media.giphy.com/media/xTiTnkEGYorcDrEzmg/giphy.mp4",
"http://media.giphy.com/media/xTiTnKjL1bD3y8JXFe/giphy.mp4",
"http://media.giphy.com/media/xTiTnJfiFz9qrXMlsk/giphy.mp4",
"http://media.giphy.com/media/26hpKRuc1AQBfxsSQ/giphy.mp4",
"http://media.giphy.com/media/l0O9zGNz79lWh04yA/giphy.mp4",
"http://media.giphy.com/media/l0O9zhs8WfRHw7gaI/giphy.mp4",
"http://media.giphy.com/media/xTiTne2M7zw0IGkaOY/giphy.mp4",
"http://media.giphy.com/media/xTiTnlLrQ9F1rzyzVC/giphy.mp4",
"http://media.giphy.com/media/xTiTnB8ttCTaz3UY8g/giphy.mp4",
"http://media.giphy.com/media/3o85xppQSHROeJ2LpS/giphy.mp4",
"http://media.giphy.com/media/xTiTnIB2PYBVl3egbS/giphy.mp4",
"http://media.giphy.com/media/xTiTnkSZ3vgkeRQMSY/giphy.mp4",
"http://media.giphy.com/media/l0O9zDt1r71PZEmvS/giphy.mp4",
"http://media.giphy.com/media/xTiTnvSN491A3DUE6s/giphy.mp4",
"http://media.giphy.com/media/3o85xBz5deyNlS0iE8/giphy.mp4",
"http://media.giphy.com/media/xTiTnA696KDVvIpfAQ/giphy.mp4",
"http://media.giphy.com/media/xTiTnCmLYjiR7IIpAA/giphy.mp4",
"http://media.giphy.com/media/26hpKJmJfwVB3498Y/giphy.mp4",
"http://media.giphy.com/media/3o85xz7pjtJZS2Mh4A/giphy.mp4",
"http://media.giphy.com/media/3o85xl6Du6bfhXp3c4/giphy.mp4",
"http://media.giphy.com/media/3o85xHpM3QJpwWLuj/giphy.mp4f"
  ];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * catVideos.length));
  $("#cat-video").attr("src", catVideos[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});