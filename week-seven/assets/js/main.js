$(document).ready(function() {
    
    $('#explore-extend').on('click', function(){
        $('#explore-extra').toggleClass("hidden");
    });
    
    $('a[href*=#]').click(function(e){
        e.preventDefault();
    });
    
    $('a[href*=#]').not('.mdl-tabs__tab').click(function(e){
        console.log("SMOOTH BEGIN");
        e.preventDefault();
        var speed = 1000;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $(".mdl-layout__content").animate({scrollTop:position}, speed, "swing");
        console.log("SMOOTH END");
    });
    
    var temp = "<div class='cell mdl-shadow--2dp' style='width:{width}px; height: {height}px; background-image: url(./assets/img/gallery-{index}.jpg)'></div>";
    var w = 1, html = '', limitItem = 20;
    for (var i = 0; i < limitItem; ++i) {
        w = 200 +  200 * Math.random() << 0;
        html += temp.replace(/\{height\}/g, 200).replace(/\{width\}/g, w).replace("{index}", i + 1);
    }
    $("#freewall").html(html);

    var wall = new Freewall("#freewall");
    wall.reset({
        selector: '.cell',
        animate: true,
        cellW: 20,
        cellH: 200,
        gutterY: 5,
        gutterX: 5,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();
    // for scroll bar appear;
    $(window).trigger("resize");
})