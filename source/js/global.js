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
  speed = 400,
  easing = 'swing';
  
  $people
    .find('.text')
      .hide()
      .end()
    .hover(
      function () {
        $(this)
          .find('.image')
            .slideUp(speed, easing)
            .end()
          .find('.text')
            .slideDown(speed, easing);
      },function () {
       $(this)
        .find('.text')
          .slideUp(speed, easing)
          .end()
        .find('.image')
          .slideDown(speed, easing);
      }
    );
});
