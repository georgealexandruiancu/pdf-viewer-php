$(document).ready(function (e) {
	$("#uploadPDF").on("submit", function (e) {
			e.preventDefault();
			$.ajax({
				url: "/middleware/upload.php",
				type: "POST",
				data: new FormData(this),
				contentType: false,
				cache: false,
				processData: false,
				beforeSend: function () {
					//$("#preview").fadeOut();
					$(".loading__holder").fadeIn();
				},
				success: function (data) {
					$(".loading__holder").fadeOut();

					if (data == "invalid") {
						// invalid file format.
						$("#wrong-text").html("Invalid File !").fadeIn();
						setTimeout(function(){
							$("#wrong-text").fadeOut();
						}, 3000);
					} else if (data == "invalid user") {
						$("#wrong-text").html("Invalid User OR Password !").fadeIn();
						setTimeout(function () {
							$("#wrong-text").fadeOut();
						}, 3000);
					} else if (data == "error") {
						$("#wrong-text").html("Something went wrong, please contact the administrator !").fadeIn();
						setTimeout(function () {
							$("#wrong-text").fadeOut();
						}, 3000);
					} else if (data == "worked") {
						$("#uploadPDF")[0].reset();
						$("#good-text").fadeIn();
					} else {
						$("#wrong-text").html("Something went wrong, please contact the administrator !").fadeIn();
						setTimeout(function () {
							$("#wrong-text").fadeOut();
						}, 3000);
					}

				},
				error: function (e) {
					$(".loading__holder").fadeOut();
					$("#wrong-text").html("Something went wrong, please contact the administrator !").fadeIn();
					setTimeout(function () {
						$("#wrong-text").fadeOut();
					}, 3000);
				},
			});
	});
});
