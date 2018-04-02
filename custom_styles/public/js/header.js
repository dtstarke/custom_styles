
$(document).ready(function() {
    
    $('#page-desktop #icon-grid .case-wrapper').wrapAll('<div id="icon-wrap">');
        
    // Clean up header
    $(".navbar-home").html("Home");

    
    function isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    if (!isMobileDevice()) {
        // confirming...
        console.log("it's NOT mobile");
            // Add clock
            $('.navbar-right').append('<li id="header-clock" class="hidden-xs hidden-sm"></div>');
        
            setInterval(function() {
                
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
    } else {
        //confirming...
        alert("YES, it's mobile!");
    }
});