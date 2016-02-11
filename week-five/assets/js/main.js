$(document).ready(function() {
    $('#menu-toggle').on('click', function(){
        $('#sidebar-wrapper').toggleClass('toggled');
        $('#wrapper').toggleClass('toggled');
    });
});