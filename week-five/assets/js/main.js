$(document).ready(function() {  
    // Sidebar controls
    $('#menu-toggle').on('click', function(){
        $('#sidebar-wrapper').toggleClass('toggled');
        $('#wrapper').toggleClass('toggled');
        $('#menu-toggle').toggleClass('toggled');
    });
    
    // Create google map based on coordinates
    function init_map() {
		var var_location = new google.maps.LatLng(43.0406559,-87.912449);
 
        var var_mapoptions = {
          center: var_location,
          zoom: 14
        };
 
		var var_marker = new google.maps.Marker({
			position: var_location,
			map: var_map,
			title:"Safe-House"});
 
        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);
 
        var_marker.setMap(var_map);
    }
    
    // Initiliaze google map on DOM
    google.maps.event.addDomListener(window, 'load', init_map);
});

// Transition when changing pages
$('body').fadeIn(400, function(){
    $('body').removeClass('transition');
});
// To fade out before redirect
$('.sidebar-nav a').click(function(e){
    redirect = $(this).attr('href');
    e.preventDefault();
    $('body').fadeOut(400, function(){
        document.location.href = redirect
    });
});