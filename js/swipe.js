function swipedetect(el, callback) {
	var touchsurface = el,
		swipedir,
		startX,
		startY,
		distX,
		distY,
		threshold = 150, //required min distance traveled to be considered swipe
		restraint = 100, // maximum distance allowed at the same time in perpendicular direction
		allowedTime = 200, // maximum time allowed to travel that distance
		elapsedTime,
		startTime,
		handleswipe = callback || function (swipedir) {};

	touchsurface.addEventListener(
		"touchstart",
			function (e) {
			var touchobj = e.changedTouches[0];
			swipedir = "none";
			dist = 0;
			startX = touchobj.pageX;
			startY = touchobj.pageY;
			startTime = new Date().getTime(); // record time when finger first makes contact with surface
			},
			false
		);

	touchsurface.addEventListener(
		"touchend",
			function (e) {
			var touchobj = e.changedTouches[0];
			distX = touchobj.pageX - startX; // get horizontal dist traveled by finger while in contact with surface
			distY = touchobj.pageY - startY; // get vertical dist traveled by finger while in contact with surface
			elapsedTime = new Date().getTime() - startTime; // get time elapsed
			if (elapsedTime <= allowedTime) {
				// first condition for awipe met
				if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
					// 2nd condition for horizontal swipe met
					swipedir = distX < 0 ? "left" : "right"; // if dist traveled is negative, it indicates left swipe
				}
			}
			handleswipe(swipedir);
			},
			false
		);
}

window.addEventListener(
	"load",
	function () {
		var el = document.getElementById("pdf_renderer");
		swipedetect(el, function (swipedir) {
			if (swipedir != "none") {
				if (swipedir === "left") {
					$(window).trigger("swipeLeft.IancuNS");
				}

				if (swipedir === "right") {
					$(window).trigger("swipeRight.IancuNS");
				}
			}
		});
	},
	false
);