
$(document).ready(function() {
	// Clean up header
    $(".navbar-home").html("Desk");
	
    if ("onhashchange" in window) {
	    alert("The browser supports the hashchange event!");
	}    
    




});


$(window).load(function(){
	
	
	alert("window onload!");
//	$(".layout-main-section-wrapper").removeClass("col-md-10");
//	$(".layout-main-section-wrapper").addClass("col-md-12");
		
});
//
//function locationHashChanged() {
//	console.log("hash changed!");
//	$(".layout-main-section-wrapper").removeClass("col-md-10");
//	$(".layout-main-section-wrapper").addClass("col-md-12");
//}
//
//window.onhashchange = locationHashChanged;
//
//
//	