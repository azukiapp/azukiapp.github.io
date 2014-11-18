//Nav
$(function() {
  // when nav bar links clicked, highlight them
  var navBarOrFootLinks = $('.navbar .nav > li > a, .footer-nav > li > a');
  navBarOrFootLinks.click(function(ev) {

    ev.preventDefault();
    ev.stopPropagation();

    var href = $.attr(this, 'href');
    $.scrollTo(href, {
      duration: 1000,
      easing:'easeInOutExpo',
      onAfter: function() {
        history.pushState(null, null, href);
      }
    });

    //inactive all and put activeclass on the right place
    $('li.active').removeClass('active');
    $(ev.target).parent().addClass('active').attr("tabindex",-1).focus();

    return false;
  });

  if (document.location.hash !== '') {
    $('li.active').removeClass('active');
    var selectedAnchor = $('a[href=' + document.location.hash + ']:eq(0)');
    selectedAnchor.parent().addClass('active').attr("tabindex",-1).focus();
  }

});
