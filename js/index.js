var myState = {
	pdf: null,
	currentPage: 1,
	zoom: 0.75,
};


pdfjsLib.getDocument("./pdf/album.pdf").then((pdf) => {
	myState.pdf = pdf;

	$(".pdf-num-pages").html("/ " + myState.pdf._pdfInfo.numPages);
	$(".input-pages").attr("max", myState.pdf._pdfInfo.numPages);
	render();
});

function render() {
	myState.pdf.getPage(myState.currentPage).then((page) => {
		var canvas = document.getElementById("pdf_renderer");
		var ctx = canvas.getContext("2d");

		var viewport = page.getViewport(myState.zoom);

		canvas.width = viewport.width;
		canvas.height = viewport.height;

		page.render({
			canvasContext: ctx,
			viewport: viewport,
		});
	});
}

function GoNext() {
	$(".loading__holder").show();
	setTimeout(function() {
		$(".loading__holder").hide();
		if (myState.pdf == null || myState.currentPage == 1) return;

		myState.currentPage -= 1;
		document.getElementById("current_page").value = myState.currentPage;
		render();
	}, 1000);
}

function GoPrevious() {
	$(".loading__holder").show();
	setTimeout(function() {
		$(".loading__holder").hide();
		if (
			myState.pdf == null ||
			myState.currentPage > myState.pdf._pdfInfo.numPages
		)
			return;

		myState.currentPage += 1;
		document.getElementById("current_page").value = myState.currentPage;
		render();
	}, 1000);
}

document.getElementById("go_previous").addEventListener("click", (e) => {
	GoNext();
});

document.getElementById("go_next").addEventListener("click", (e) => {
	GoPrevious();
});

document.getElementById("current_page").addEventListener("keypress", (e) => {
		if (myState.pdf == null) return;

		// Get key code
		var code = e.keyCode ? e.keyCode : e.which;

		// If key code matches that of the Enter key
		if (code == 13) {
			$(".loading__holder").show();
			setTimeout(function() {
				$(".loading__holder").hide();
				var desiredPage = document.getElementById("current_page").valueAsNumber;

				if (desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
					myState.currentPage = desiredPage;
					document.getElementById("current_page").value = desiredPage;
					render();
				}

				if (desiredPage > myState.pdf._pdfInfo.numPages) {
					myState.currentPage = myState.pdf._pdfInfo.numPages;
					document.getElementById("current_page").value = myState.pdf._pdfInfo.numPages;
					render();
				}
			}, 1000);
		}

});

document.getElementById("current_page").addEventListener("change", (e) => {
	$(".loading__holder").show();
	setTimeout(function() {
		$(".loading__holder").hide();
		var desiredPage = document.getElementById("current_page").valueAsNumber;

		if (desiredPage >= 1 && desiredPage <= myState.pdf._pdfInfo.numPages) {
			myState.currentPage = desiredPage;
			document.getElementById("current_page").value = desiredPage;
			render();
		}
	}, 1000);
})

document.getElementById("zoom_in").addEventListener("click", (e) => {
	if (myState.pdf == null) return;

	myState.zoom += 0.25;
	render();
});

document.getElementById("zoom_out").addEventListener("click", (e) => {
	if (myState.pdf == null) return;

	myState.zoom -= 0.25;
	render();
});

$(window).off("swipeLeft.IancuNS")
	.on("swipeLeft.IancuNS", function() {
		GoPrevious();
	})

$(window).off("swipeRight.IancuNS")
	.on("swipeRight.IancuNS", function() {
		GoNext();
	})