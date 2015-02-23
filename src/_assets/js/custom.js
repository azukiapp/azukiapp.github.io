//Nav
$(function() {
  // when nav bar links clicked, highlight them
  var navBarOrFootLinks = $('.navbar .nav > li > a, .footer-nav > li > a');
  navBarOrFootLinks.click(function(ev) {
    ev.preventDefault();
    ev.stopPropagation();

    if (Boolean($('.navbar-collapse').attr('aria-expanded'))) {
      $('.navbar-collapse').collapse('hide');
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
    $(ev.target).parent().addClass('active').attr('tabindex', -1).focus();

    return false;
  });

  if (document.location.hash !== '') {
    $('li.active').removeClass('active');
    var selectedAnchor = $('a[href=' + document.location.hash + ']:eq(0)');
    selectedAnchor.parent().addClass('active').attr('tabindex', -1).focus();
  }

});

// Sponsors
$(function() {
  var $sponsors = $('.sponsors');
  var $sponsorsGold    = $('.sponsors-gold', $sponsors);
  var $sponsorsSilver  = $('.sponsors-silver', $sponsors);

  var sponsorsOrderGold   = $.urlParam('sog') ? $.urlParam('sog').split(',') : [];
  var sponsorsOrderSilver = $.urlParam('sos') ? $.urlParam('sos').split(',') : [];
  var filter = $.urlParam('sfs');
  var sponsorsEls    = $('.sponsor');
  var sponsorsOrder  = [].concat(sponsorsOrderGold, sponsorsOrderSilver);

  var goldIX     = 0;
  var goldLength = sponsorsOrderGold.length || 4;
  var silverIX     = 0;
  var silverLength = sponsorsOrderSilver.length;

  if (filter === 'true') {
    silverLength = sponsorsOrderSilver.length;
  } else if (filter && !isNaN(parseInt(filter))) {
    silverLength = parseInt(filter);
  } else {
    silverLength = sponsorsEls.length;
  }

  sponsorsEls.each(function(ix, el) {
    var $el = $(el);
    var id = $el.attr('id');
    sponsorsOrder.push(id);
  });
  $.unique(sponsorsOrder);

  if (Math.min(goldLength, sponsorsOrder.length) < 4) {
    $sponsorsGold.addClass('text-center');
  } else {
    $sponsorsGold.removeClass('text-center');
  }

  $.each(sponsorsOrder, function(key, value) {
    var $el = $('#' + value);

    if (goldIX < goldLength) {
      $sponsorsGold.append($el);
      goldIX++;
    } else if (silverIX < silverLength) {
      $sponsorsSilver.append($el);
      silverIX++;
    } else {
      $el.remove();
    }
  });
});
