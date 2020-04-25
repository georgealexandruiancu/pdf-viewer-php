<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PDF VIEWER</title>

	<script type="text/javascript" src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"></script>

	<link rel="stylesheet" href="styles/styles.min.css">
</head>
<body>
	<div id="gesuredZone">
		<div class="loading__holder">
			<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
		</div>
		<div id="my_pdf_viewer">
			<div id="canvas_container" class="dragscroll">
				<canvas id="pdf_renderer"></canvas>
			</div>

			<div class="container-controls">
				<div id="navigation__controls">
					<button id="go_previous" class="navigation__controls--left"><i class="fas fa-arrow-circle-left"></i></button>

					<button id="go_next" class="navigation__controls--right"><i class="fas fa-arrow-circle-right"></i></button>

					<div class="navigation__controls--holder">
						<input id="current_page" value="1" type="number" class="input-pages" min="1" />
						<div class="pdf-num-pages"></div>
						<div id="zoom_controls" class="navigation__controls--zoom">
							<button id="zoom_in" class="zoom-button"><i class="fas fa-search-plus"></i></button>
							<button id="zoom_out" class="zoom-button"><i class="fas fa-search-minus"></i></button>
						</div>
					</div>
				</div>
			</div>

		</div>
	</div>

	<div class="copyright">
		<a href="https://foton.ro" target="_blank">FOTON.RO</a> - 2020 - All right reserved. <br/>
		Implmeneted by <a href="https://alxxiancu.com" target="_blank">Alex Iancu</a>
	</div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" integrity="sha256-KzZiKy0DWYsnwMF+X1DvQngQ2/FxF7MF3Ff72XcpuPs=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.0.943/pdf.min.js"></script>
	<script src="js/index.js"></script>
	<script src="js/swipe.js"></script>
	<script src="js/magnifier.js"></script>

</body>
</html>