//Nav
jQuery(document).ready(function ($){
    jQuery('.navbar .nav > li > a, .footer-nav > li > a').click(function(){
        jQuery.scrollTo( $(this).attr("href"), {
			duration: 1000,
			easing:'easeInOutExpo'			
		});
		return false;
    });
});

var tpj=jQuery;
tpj.noConflict();

tpj(document).ready(function() {

if (tpj.fn.cssOriginal!=undefined)
tpj.fn.css = tpj.fn.cssOriginal;

tpj('.banner').revolution(
	{
		delay:5000,
		startheight:520,
		startwidth:1170,


		hideThumbs:200,

		thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
		thumbHeight:50,
		thumbAmount:5,

		navigationType:"bullet",				// bullet, thumb, none
		navigationArrows:"nexttobullets",				// nexttobullets, solo (old name verticalcentered), none

		navigationStyle:"round-old",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


		navigationHAlign:"center",				// Vertical Align top,center,bottom
		navigationVAlign:"bottom",					// Horizontal Align left,center,right
		navigationHOffset:0,
		navigationVOffset:-30,

		soloArrowLeftHalign:"left",
		soloArrowLeftValign:"top",
		soloArrowLeftHOffset:20,
		soloArrowLeftVOffset:0,

		soloArrowRightHalign:"right",
		soloArrowRightValign:"top",
		soloArrowRightHOffset:20,
		soloArrowRightVOffset:0,

		touchenabled:"on",						// Enable Swipe Function : on/off
		onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off

		stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
		stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

		hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
		hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
		hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value

		shadow:1,								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows  (No Shadow in Fullwidth Version !)
		fullWidth:"off"							// Turns On or Off the Fullwidth Image Centering in FullWidth Modus
	});
});