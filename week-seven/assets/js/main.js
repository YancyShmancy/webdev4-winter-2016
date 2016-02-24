$(document).ready(function() {
    
    $('#explore-extend').on('click', function(){
        $('#explore-extra').toggleClass("hidden");
    });
    
    $('a[href*=#]').click(function(e){
        e.preventDefault();
    });
    
    $('a[href*=#]').not('.mdl-tabs__tab').click(function(e){
        console.log("SMOOTH BEGIN");
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $(".mdl-layout__content").animate({scrollTop:position}, speed, "swing");
        console.log("SMOOTH END");
    });

})