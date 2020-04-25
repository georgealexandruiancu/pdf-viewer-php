<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PDF VIEWER</title>

	<script type="text/javascript" src="https://cdn.rawgit.com/asvd/dragscroll/master/dragscroll.js"></script>
	<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
	<link rel="stylesheet" href="styles/styles.min.css">
</head>
<body>
	<div class="loading__holder">
		<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
	</div>

	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<center><img src="assets/logo.png" alt="" srcset=""></center>
			</div>
			<div class="col-md-12 text-center" style="margin-top: 100px;">
				<form method="POST" id="uploadPDF" enctype='multipart/form-data'>
					<div class="form-group">
						<label for="exampleInputEmail1">Username</label>
						<input type="email" name="userPDF" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
						<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">Password</label>
						<input type="password" name="passPDF" class="form-control" id="exampleInputPassword1" placeholder="Password">
					</div>
					<div class="form-group">
						<label for="exampleInputPassword1">PDF FILE</label>
						<input type="file" name="filePDF" id="" class="form-control" id="exampleInputPassword1" placeholder="pdf file"/>
						<small id="emailHelp" class="form-text text-muted">The max size is 125MB</small>
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
			<div class="col-md-12 text-center">
				<div id="good-text" style="color: green; font-weight: 700; font-size: 1.5em; display: none;">
					The PDF it's uploaded successfuly !
				</div>
				<div id="wrong-text" style="color: red; font-weight: 700; font-size: 1.5em; display: none;">
					Error
				</div>
			</div>
		</div>
	</div>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.0/jquery.min.js" integrity="sha256-xNzN2a4ltkB44Mc/Jz3pT4iU1cmeR0FkXs4pru/JxaQ=" crossorigin="anonymous"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
	<script src="js/uploadPDF.js"></script>
</body>
</html>