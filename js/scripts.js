/* --- HEADER --- */

/* STICKY */
$(window).scroll(function() {
  var headerHeight = $('header').height();

  if ($(this).scrollTop() > headerHeight) {
    $('header').addClass('sticky'); // ADDS  HEADER STICKY
    $('#gotop').fadeIn(300); // GO TOP BUTTON APPEARS
    $('#main-contents').css('margin-top','6rem'); // ADJUSTS MAIN CONTENTS
  }
  else {
    $('header').removeClass('sticky'); // RETURN HEADER TO ORIGIN
    $('#gotop').fadeOut(300); // GO TOP BUTTON DISAPPEARS
    $('#main-contents').css('margin-top','1rem'); // ADJUSTS MAIN CONTENTS
  }

});

/* --- NAV --- */

/* MAIN MENU */
$(function () {
  $('#nav-stacks').click(function () {
    $(this).toggleClass('open');
    $('nav').slideToggle('fast');
  });
});
$(window).on('load , resize', function(){
  if(window.innerWidth > 992) {
    $('nav').removeAttr('style');
  }
});
$(function () {
  $('.dropdown').click(function (e) {
    e.preventDefault();
    $('.submenu', this).slideToggle(300);
  });
});
/* SUB MENU */
$(function(){

  if(window.innerWidth > 992) {
    $('.dropdown a').click(function(e){
      e.preventDefault();
      $(this).parents().siblings().find('.submenu').stop(true, false, true).slideUp(200);
      $(this).parents().siblings().find('a').removeClass('arrow-up');
      $(this).parents().children('.submenu').stop(true, false, true).slideToggle(200);
      $(this).toggleClass('arrow-up');
    });
  }

});
$(window).on('load , resize', function(){
  // if(window.innerWidth < 992) {
    $('.submenu').removeAttr('style');
  // }
});

/* --- FORMS --- */

/* CHECKBOX & RADIO */
$('input[type=radio],input[type=checkbox]').hide(); // HIDES ORIGINAL RADIO & CHECKBOX
$('input[type=radio] + label').prepend('<span></span>'); // SPAN HAS CUSTOM STYLE FOR RADIO
$('input[type=checkbox] + label').prepend('<span></span>'); // SPAN HAS CUSTOM STYLE FOR CHECKBOX

/* --- OTHER --- */

/* RATIO */
$(window).on('load , resize', function(){
  $('.ratio-1by1').each(function(){
    $(this).height(($(this).width()) / 1); // RATIO 1:1 SQUARE
  });
  $('.ratio-4by3').each(function(){
    $(this).height(($(this).width()) / 1.33); // RATIO 4:3 OLD SCREENS
  });
  $('.ratio-16by9').each(function(){
    $(this).height(($(this).width()) / 1.77); // RATIO 16:9 MODERN SCREENS
  });
});

/* IMAGE CONTAINERS */
// $(window).on('load , resize', function() {
//   $('.img-container').find('img').each(function() {
//     var imgClass = (this.width / this.height > 1) ? 'full-width' : 'full-height';
//     $(this).addClass(imgClass);
//   })
// });

/* AJAX CONTENTS */
$('.ajax-trigger a').click(function(e){
  e.preventDefault();
});
$('#ajax-first').click(function(){
  $('.ajax-content').load('external.html #first');
}),
$('#ajax-second').click(function(){
  $('.ajax-content').load('external.html #second');
}),
$('#ajax-third').click(function(){
  $('.ajax-content').load('external.html #third');
});

/* TABS */
$( ".tabs-v" ).tabs({show: 'fade', hide: 'fade'});
$( ".tabs-h" ).tabs({
    activate: function( event, ui ) {
        ui.newPanel.hide().fadeIn(300);
    }
});
 var tabsList = $('.tabs-select ul li');
 var tabsListSelected = $('.tabs-select ul li.selected');
$(tabsList).click(function(){
    $(tabsList).removeClass('selected'),
    $(this).addClass('selected');
});

/* --- FOOTER --- */

/* GO TOP */
$('#gotop').click(function(){
    $('html').animate({
        scrollTop: 0
    }, 600);
});

/* --- PARTIALS --- */

/* PAGINATION */
$('.current a, .disabled a').click(function(e){
  e.preventDefault();
});

/* TAGS */
$('.tags a').append('<span class="tag-hide">&#10006;</span>');
$('.tag-hide').click(function(e){
  e.preventDefault();
  $(this).parent().hide();
});

/* --- WIDGETS --- */

/* PARALLAX */
$(window).scroll(function(){
  var thisScroll = $(this).scrollTop();
  var windowHeight = $(window).height();
  var paraBGOffsetTop = $('.parallax-background').offset().top;
  var paraELEMOffsetTop = $('.parallax-element').offset().top;

  if (thisScroll > $('.parallax-background').offset().top - windowHeight) {
    $('.parallax-background').css('background-position','center '+ (thisScroll - paraBGOffsetTop) / -2 +'px');
  }
  if (thisScroll > $('.parallax-element').offset().top - windowHeight) {
    $('.parallax-element').css('margin-top', (thisScroll - paraELEMOffsetTop) / -2  +'px');
  }

});

/* --- CUSTOMIZE PLUGINS --- */

/* Flexslider SLIDER */
$(window).load(function(){
  $('#main-slider .flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 6000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
    animationSpeed: 1000,            //Integer: Set the speed of animations, in milliseconds
    controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
    directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
    mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel


    start: function(slider) {
      $('body').removeClass('loading');
    }
  });
});

/* FancyBox LIGHTBOX */
$(".fancybox").fancybox({
  helpers: {
    title : {
      type : 'inside' // 'float', 'inside', 'outside' or 'over'
    }
  }
});

/* Slick CAROUSEL */
$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    }
  ]
});
