(function () {
'use strict';

$(document).ready(function() {
    // Clean up header
    $(".navbar-home").html("Home");
    
    // hack to make all pages 12 columns except for the modules page.
    setInterval(function(){ 
        
        var winLoc = window.location.href;
        var leftCol = $(".layout-side-section");
        var rightCol = $(".layout-main-section-wrapper");
        
        if (winLoc.indexOf("desk#modules") >= 0) {
            console.log("We are at the Module Screen! " + $.now());
            
            
            rightCol.removeClass("col-md-12");
            rightCol.addClass("col-md-10");    
            leftCol.show();
                        
            console.log(winLoc + + $.now());
        } else {
            leftCol.hide();
            rightCol.removeClass("col-md-10");
            rightCol.addClass("col-md-12");
        }
                
    }, 800);
    
});

}());
//# sourceMappingURL=custom_styles.js.map
