var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesuredZone = document.getElementById("gesuredZone");

gesuredZone.addEventListener(
	"touchstart",
	function (event) {
		touchstartX = event.screenX;
		touchstartY = event.screenY;
	},
	false
);

gesuredZone.addEventListener(
	"touchend",
	function (event) {
		touchendX = event.screenX;
		touchendY = event.screenY;
		handleGesure();
	},
	false
);

function handleGesure() {
	var swiped = "swiped: ";
	if (touchendX < touchstartX) {
		alert(swiped + "left!");
		$(window).trigger("swipeLeft.IancuNS");
	}
	if (touchendX > touchstartX) {
		alert(swiped + "right!");
		$(window).trigger("swipeRight.IancuNS");
	}
	if (touchendY < touchstartY) {
		alert(swiped + "down!");
	}
	if (touchendY > touchstartY) {
		alert(swiped + "left!");
		$(window).trigger("swipeLeft.IancuNS");
	}
}
