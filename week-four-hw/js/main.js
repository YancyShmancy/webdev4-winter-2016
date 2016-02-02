$(document).ready(function(){
	
	$(window).on("scroll", function(e) {
        
        var stickyTop = $('#navigation').offset().top;
        
        if ( $(window).scrollTop() >= stickyTop ) {
            $('#navigation').addClass('fixed');
            $('#big-header').addClass('scrolled');
        }
        
        if ( $(window).scrollTop() <= 50 ) {
            $('#navigation.fixed').removeClass('fixed');
            $('#big-header').removeClass('scrolled');
        }
	});
    
    $('.nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {
            //I get fired when the animation is starting
        },
        end: function() {
            //I get fired when the animation is ending
        },
        scrollChange: function($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });
});

