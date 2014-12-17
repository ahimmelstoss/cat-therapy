// var catVideos = [
  // "http://media.giphy.com/media/fAT2Db0j0Mblu/giphy.mp4",
  // "http://media.giphy.com/media/IR2WwZdgFxk1G/giphy.mp4",
  // "http://media.giphy.com/media/E2z4Xp9jWyc3C/giphy.mp4",
  // "http://media.giphy.com/media/kIkwipWRoqeUE/giphy.mp4",
  // "http://media.giphy.com/media/CHc9dLQVQOAXm/giphy.mp4",
  // "http://media.giphy.com/media/JwW4oYd3Wjv6E/giphy.mp4",
  // "http://media.giphy.com/media/54rAlImPzj3WM/giphy.mp4",
  // "http://media.giphy.com/media/zZMTVkTeEfeEg/giphy.mp4",
  // "http://media.giphy.com/media/YAxCzfAc7MHPa/giphy.mp4",
  // "http://media.giphy.com/media/uw5U12mcksoKs/giphy.mp4",
  // "http://media.giphy.com/media/S1kXC3fX3X3jy/giphy.mp4",
  // "http://media.giphy.com/media/iwoathoVXUWfC/giphy.mp4",
  // "http://media.giphy.com/media/1RgJ939wcJWsU/giphy.mp4",
  // "http://media.giphy.com/media/nuD6CKrrpkBS8/giphy.mp4",
  // "http://media.giphy.com/media/Yh39HZShKqJqg/giphy.mp4",
  // "http://media.giphy.com/media/q2QWrg8nWES2I/giphy.mp4",
  // "http://media.giphy.com/media/ZuxPPPqY7IaOI/giphy.mp4",
  // "http://media.giphy.com/media/yLgHIG7JJXyqk/giphy.mp4",
  // "http://media.giphy.com/media/evH35Q30UW4XS/giphy.mp4",
  // "http://media.giphy.com/media/lvRqhmHtSqigE/giphy.mp4",
  // "http://media.giphy.com/media/b8OB52IWcwzRu/giphy.mp4",
  // "http://media.giphy.com/media/7odHUWPszD0fC/giphy.mp4",
  // "http://media.giphy.com/media/yoJC2HwGm8buK9t9F6/giphy.mp4",
  // "http://media.giphy.com/media/5xaOcLAT2ZzRM74rDyw/giphy.mp4"
// ];

var holidayCats = [
  "http://media.giphy.com/media/Jylckcy4Sowso/giphy.mp4",
  "http://media.giphy.com/media/PkRjXKSNU5ioM/giphy.mp4",
  "http://media.giphy.com/media/Pa8Ooa200rpAY/giphy.mp4",
  "http://media.giphy.com/media/RdzzVrtvfqnM4/giphy.mp4",
  "http://media.giphy.com/media/IB9GHnquKcdNK/giphy.mp4",
  "http://media.giphy.com/media/VuG7FeHnMjhTy/giphy.mp4",
  "http://media.giphy.com/media/tweNZa2gKE73a/giphy.mp4"
];

function displayRandomVideo() {
  var randomIndex = Math.floor((Math.random() * holidayCats.length));
  $("#cat-video").attr("src", holidayCats[randomIndex]);
  $("#video")[0].load();
}

$(document).ready(function(){
  displayRandomVideo();
});