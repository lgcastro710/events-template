
var controller = new ScrollMagic.Controller();

// build scenes
var revealElements = document.getElementsByClassName("effect");
for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
  new ScrollMagic.Scene({
    triggerElement: revealElements[i],
    offset: 150,
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "showing") // add class toggle
    .addTo(controller);
}

$(document).ready(function () {
  $('.zoom').hover(function () {
    $(this).addClass('transition');
  }, function () {
    $(this).removeClass('transition');
  });
  $('#banner').height($(window).height() - 200);
  $(window).resize(function () {
    $('#banner').height($(window).height() - 200);
  });
  $(window).trigger('resize');
});

$(document).ready(function () {
  $('.btn-scroll').click(function () {
    $('html, body').animate({
      scrollTop: $(".scroll-section").offset().top
    }, 1000)
  })
});
