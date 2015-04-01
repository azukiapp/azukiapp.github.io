$(function() {

  $.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) { return 0; }
    return decodeURIComponent(results[1].replace(/\+/g, " ")) || 0;
  }


  /**
   * Analytics tracker based on scroll spy
   */

  var Timer;
  var timeout_ms = 3000;
  var sentEvents = [];
  var first_interaction = false;

  function sendEvent(label){
    console.log('Label: ', label);
    if (!first_interaction && label == '/#home') {
      first_interaction = true;
      return;
    }
    sentEvents = sentEvents.concat(label);
    ga('send', 'pageview', label);
    first_interaction = true;
  }

  function triggerTimeout(label){
    clearTimeout(Timer);
    Timer = setTimeout(function(){sendEvent(label)}, timeout_ms);
  }

  $('body').on('activate.bs.scrollspy', function () {
    var label = $('#navbar-scrollspy').find('li.active a').attr('href');
    triggerTimeout('/' + label);
  });

});
