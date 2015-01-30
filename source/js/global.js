// Scrol effect.
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  
  // solutiona takan form http://jsfiddle.net/qvbgb/3/
  var $people = $('.people'),
  speed = 500,
  easing = 'swing',
  queue = false,
  slideOption = {duration:speed, easing:easing};
  
  $people
    .find('.text')
      .hide()
      .end()
    .hover(
      function () {
        $(this)
          .find('.image').stop(true, true)
            .slideUp(slideOption)
            .end()
          .find('.text').stop(true, true)
            .slideDown(slideOption);
      },function () {
       $(this)
        .find('.text').stop(true, true)
          .slideUp(slideOption)
          .end()
        .find('.image').stop(true, true)
          .slideDown(slideOption);
      }
    );
});
