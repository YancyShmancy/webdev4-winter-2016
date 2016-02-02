$(document).ready(function(){
	
	$(window).on("scroll", function(e) {

		console.log( $(window).scrollTop() );
        
        var stickyTop = $('#navigation').offset().top;
        
        if ( $(window).scrollTop() >= stickyTop ) {
            $('#navigation').addClass('fixed');
            $('#big-header').addClass('scrolled');
        }
        
        if ( $(window).scrollTop() <= 50 ) {
            $('#navigation.fixed').removeClass('fixed');
            $('#big-header').removeClass('scrolled');
        }
	})
});