

$(document).ready(function () {

   frappe.utils.play_sound("submit");

   $(".navbar-home").html("Desk");
});

$(document).ready(function () {

	if (window.location.href.indexOf("desk#point-of-sale") > -1) {

		console.log("in pos!");
	}
});