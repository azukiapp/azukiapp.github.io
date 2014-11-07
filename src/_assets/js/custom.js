//Nav
$(function($) {

  // when nav bar links clicked, highlight them
  var navBarOrFootLinks = $('.navbar .nav > li > a, .footer-nav > li > a');
  navBarOrFootLinks.click(function(event) {
    var href = $.attr(this, 'href');
    $(href).scrollToBySpeed({
      speed: 5000,
      easing:'easeInOutExpo'
      // ,
      // onAfter: function() {
      // }
    });
    history.pushState(null, null, href);
    //inactive all and put activeclass on the right place
    $('li.active').removeClass('active');
    $(event.target).parent().addClass('active');

    $('.navbar-collapse').collapse('hide');

    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  if (document.location.hash !== '') {
    $('li.active').removeClass('active');
    var selectedAnchor = $('a[href=' + document.location.hash + ']:eq(0)');
    selectedAnchor.parent().addClass('active');
  }

});

var tpj = $;
tpj.noConflict();

tpj(document).ready(function() {

  if (tpj.fn.cssOriginal !== undefined){
    tpj.fn.css = tpj.fn.cssOriginal;
  }

  tpj('.banner').revolution({
    delay                  : 5000,
    startheight            : 520,
    startwidth             : 1170,

    hideThumbs             : 200,

    // Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
    thumbWidth             : 100,
    thumbHeight            : 50,
    thumbAmount            : 5,

    // bullet, thumb, none
    navigationType         : 'bullet',
    // nexttobullets, solo (old name verticalcentered), none
    navigationArrows       : 'nexttobullets',

    // round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom
    navigationStyle        : 'round-old',

    // Vertical Align top,center,bottom
    navigationHAlign       : 'center',
    // Horizontal Align left,center,right
    navigationVAlign       : 'bottom',
    navigationHOffset      : 0,
    navigationVOffset      : -30,

    soloArrowLeftHalign    : 'left',
    soloArrowLeftValign    : 'top',
    soloArrowLeftHOffset   : 20,
    soloArrowLeftVOffset   : 0,

    soloArrowRightHalign   : 'right',
    soloArrowRightValign   : 'top',
    soloArrowRightHOffset  : 20,
    soloArrowRightVOffset  : 0,

    // Enable Swipe Function : ' on'/off
    touchenabled           : 'on',
    // Stop Banner Timet at Hover on Slide on/off
    onHoverStop            : 'off',

    // Stop Timer if Slide x has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
    stopAtSlide            : -1,
    // Stop Timer if All slides has been played x times. IT will stop at THe slide which is defined via stopAtSlide: x, if set to -1 slide never stop automatic
    stopAfterLoops         : -1,

    // It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
    hideCaptionAtLimit     : 0,
    // Hide all The Captions if Width of Browser is less then this value
    hideAllCaptionAtLilmit : 0,
    // Hide the whole slider, and stop also functions if Width of Browser is less than this value
    hideSliderAtLimit      : 0,

    //0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
    shadow                 : 1,
    // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
    fullWidth              : 'off'
  });

});
