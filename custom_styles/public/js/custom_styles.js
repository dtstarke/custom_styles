!function(){"use strict";$(document).ready(function(){$("#page-desktop #icon-grid .case-wrapper").wrapAll('<div id="icon-wrap">'),$(".navbar-home").html("Home"),void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")?(console.log("it's NOT mobile"),$(".navbar-right").append('<li id="header-clock" class="hidden-xs hidden-sm"></div>'),setInterval(function(){var e=moment().format("h:mm a");$("#header-clock").html(e);var o=window.location.href,d=$(".layout-side-section"),a=$(".layout-main-section-wrapper");o.indexOf("desk#modules")>=0||o.indexOf("desk#Form/Item")>=0?(console.log("We are at the Module Screen! "+$.now()),a.removeClass("col-md-12"),a.addClass("col-md-10"),a.css("padding-left","0"),d.show(),console.log(o+ +$.now())):(d.hide(),a.removeClass("col-md-10"),a.css("padding-left","15px"),a.addClass("col-md-12"))},500)):alert("YES, it's mobile!")})}();
//# sourceMappingURL=custom_styles.js.map
