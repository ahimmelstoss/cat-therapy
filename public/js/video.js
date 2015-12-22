// var catVideos = [
// "http://media.giphy.com/media/3o85xz9Rp349GF9LkA/giphy.mp4",
// "http://media.giphy.com/media/xTiTndbZr1SuRSXHc4/giphy.mp4",
// "http://media.giphy.com/media/3o85xJf1ykGHcrhOQU/giphy.mp4",
// "http://media.giphy.com/media/3o85xKnTeJle0D9PcA/giphy.mp4",
// "http://media.giphy.com/media/3o85xqjxc52T5H7Oj6/giphy.mp4",
// "http://media.giphy.com/media/xTiTnkEGYorcDrEzmg/giphy.mp4",
// "http://media.giphy.com/media/xTiTnKjL1bD3y8JXFe/giphy.mp4",
// "http://media.giphy.com/media/xTiTnJfiFz9qrXMlsk/giphy.mp4",
// "http://media.giphy.com/media/26hpKRuc1AQBfxsSQ/giphy.mp4",
// "http://media.giphy.com/media/l0O9zGNz79lWh04yA/giphy.mp4",
// "http://media.giphy.com/media/l0O9zhs8WfRHw7gaI/giphy.mp4",
// "http://media.giphy.com/media/xTiTne2M7zw0IGkaOY/giphy.mp4",
// "http://media.giphy.com/media/xTiTnlLrQ9F1rzyzVC/giphy.mp4",
// "http://media.giphy.com/media/xTiTnB8ttCTaz3UY8g/giphy.mp4",
// "http://media.giphy.com/media/3o85xppQSHROeJ2LpS/giphy.mp4",
// "http://media.giphy.com/media/xTiTnIB2PYBVl3egbS/giphy.mp4",
// "http://media.giphy.com/media/xTiTnkSZ3vgkeRQMSY/giphy.mp4",
// "http://media.giphy.com/media/l0O9zDt1r71PZEmvS/giphy.mp4",
// "http://media.giphy.com/media/xTiTnvSN491A3DUE6s/giphy.mp4",
// "http://media.giphy.com/media/3o85xBz5deyNlS0iE8/giphy.mp4",
// "http://media.giphy.com/media/xTiTnA696KDVvIpfAQ/giphy.mp4",
// "http://media.giphy.com/media/xTiTnCmLYjiR7IIpAA/giphy.mp4",
// "http://media.giphy.com/media/26hpKJmJfwVB3498Y/giphy.mp4",
// "http://media.giphy.com/media/3o85xz7pjtJZS2Mh4A/giphy.mp4",
// "http://media.giphy.com/media/3o85xl6Du6bfhXp3c4/giphy.mp4",
// "http://media.giphy.com/media/3o85xHpM3QJpwWLuj/giphy.mp4f"
//   ];

var holidayCats = [
  "http://media.giphy.com/media/Jylckcy4Sowso/giphy.mp4",
  "http://media.giphy.com/media/PkRjXKSNU5ioM/giphy.mp4",
  "http://media.giphy.com/media/Pa8Ooa200rpAY/giphy.mp4",
  "http://media.giphy.com/media/RdzzVrtvfqnM4/giphy.mp4",
  "http://media.giphy.com/media/IB9GHnquKcdNK/giphy.mp4",
  "http://media.giphy.com/media/VuG7FeHnMjhTy/giphy.mp4",
  "http://media.giphy.com/media/tweNZa2gKE73a/giphy.mp4",
  "http://media.giphy.com/media/JUs80AyjPS8OA/giphy.mp4",
  "http://media.giphy.com/media/DTOgxlybiW3NC/giphy.mp4",
  "http://media.giphy.com/media/LpYEzlOg9WOD6/giphy.mp4",
  "http://media.giphy.com/media/YOCqPh7WJNxKg/giphy.mp4",
  "http://media.giphy.com/media/YSkFp7ACgMUww/giphy.mp4",
  "http://media.giphy.com/media/psNbEEYu2wqC4/giphy.mp4",
  "http://media.giphy.com/media/5KuPVqoVRvQcg/giphy.mp4",
  "http://media.giphy.com/media/O2OydWcuzCPgk/giphy.mp4",
  "http://media.giphy.com/media/uPTJkFvfDDdtK/giphy.mp4",
  "http://media.giphy.com/media/xTk9ZVpnoAWBzgOCxq/giphy.mp4",
  "http://media.giphy.com/media/j1QQj6To9Pbxu/giphy.mp4",
  "http://media.giphy.com/media/pC4YGI9bpKffy/giphy.mp4",
  "http://media.giphy.com/media/jb5WFJTgSSonu/giphy.mp4",
  "http://media.giphy.com/media/ABJJ0PMupreuc/giphy.mp4"
];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * holidayCats.length));
  $("#cat-video").attr("src", holidayCats[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});
