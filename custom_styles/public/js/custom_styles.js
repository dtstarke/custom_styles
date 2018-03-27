(function () {
'use strict';

$(document).ready(function() {
    // Clean up header
    $(".navbar-home").html("Home");
    // Add clock
    $('.navbar-right').append('<li id="header-clock" class="hidden-xs hidden-sm"></div>');
    
    // hack to make all pages 12 columns except for the modules page.
    // & Set time for header.
    setInterval(function(){
        
        var timeNow = moment().format('h:mm a');
        $('#header-clock').html(timeNow);
        
        var winLoc = window.location.href;
        var leftCol = $(".layout-side-section");
        var rightCol = $(".layout-main-section-wrapper");
        
        if (winLoc.indexOf("desk#modules") >= 0 ||
            winLoc.indexOf("desk#Form/Item") >= 0) {
            console.log("We are at the Module Screen! " + $.now());          
            
            rightCol.removeClass("col-md-12");
            rightCol.addClass("col-md-10");
            rightCol.css("padding-left","0");
            leftCol.show();
                        
            console.log(winLoc + + $.now());
        } else {
            leftCol.hide();
            rightCol.removeClass("col-md-10");
            rightCol.css("padding-left","15px");
            rightCol.addClass("col-md-12");
        }
                
    }, 500); 
});

//$(document).ready(function() {
    
//    var winLoc = window.location.href;
//    if (winLoc.indexOf("desk#point-of-sale") >= 0) {
//      var posPath = $('body [data-route="point-of-sale"]');
//      if (posPath.length >= 0) {

//  var winLoc = window.location.href;
//  if (winLoc.indexOf("desk#point-of-sale") >= 0) {
//    
//    setInterval(function(){
//
//            $('.number-pad-container').hide();
//            console.log("pos");
//        }, 500);
//    }
//    
//    
//});

}());
//# sourceMappingURL=custom_styles.js.map
