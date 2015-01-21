$(function() {
  $.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) { return 0; }
    return decodeURIComponent(results[1].replace(/\+/g, " ")) || 0;
  }
});
