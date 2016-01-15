$(document).ready(function(){
	$(window).on("scroll", function(e) {
        
        var stickyTop = $('#navbar').offset().top;
        
        if ( $(window).scrollTop() >= stickyTop) {
            $('#navbar').addClass('fixed');
        }
        
        if ( $(window).scrollTop() <= 340 ) {
            $('#navbar.fixed').removeClass('fixed');
        }
	})
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});