//Nav
$(function() {
  // when nav bar links clicked, highlight them
  var navBarOrFootLinks = $('.navbar .nav > li > a, .footer-nav > li > a');
  navBarOrFootLinks.click(function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    if(Boolean($('.navbar-collapse').attr('aria-expanded'))) {
      $(".navbar-collapse").collapse('hide');
    }

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


// Sponsors
$(function() {
  var $sponsors = $(".sponsors");
  var $sponsors_gold    = $(".sponsors-gold", $sponsors);
  var $sponsors_silver  = $(".sponsors-silver", $sponsors);

  var sponsors_order_gold   = $.urlParam("sog") ? $.urlParam("sog").split(',') : [];
  var sponsors_order_silver = $.urlParam("sos") ? $.urlParam("sos").split(',') : [];
  var sponsors_els    = $(".sponsor");
  var sponsors_order  = [].concat(sponsors_order_gold, sponsors_order_silver);

  var ordered_els = [];
  var default_els = [];
  var gold_ix     = 0;
  var gold_length = sponsors_order_gold.length || 4;

  sponsors_els.each(function(ix, el) {
    var $el = $(el);
    var id = $el.attr("id");
    sponsors_order.push(id);
  });
  $.unique(sponsors_order);

  $.each(sponsors_order, function(key, value) {
    $el = $("#" + value);

    if (gold_ix < gold_length) {
      $sponsors_gold.append($el);
      gold_ix++;
    } else {
      $sponsors_silver.append($el);
    };
  });
});
