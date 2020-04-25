<?php

ini_set('post_max_size', '512M');
ini_set('upload_max_filesize', '500M');

$valid_extensions = array('pdf'); // valid extensions
$path = $_SERVER['DOCUMENT_ROOT'] . '/pdf/'; // upload directory

$userGood = "pdfviewer@foton.ro";
$passGood = "84e7a0b66a6d1e3e012c4279e53fa3f7";

if(!empty($_POST['userPDF']) || !empty($_POST['passPDF']) || $_FILES['filePDF'])
{

	$getUser = $_POST['userPDF'];
	$getPass = md5($_POST['passPDF']);

	if ($getUser == $userGood && $getPass == $passGood) {
		$img = $_FILES['filePDF']['name'];
		$tmp = $_FILES['filePDF']['tmp_name'];
		// get uploaded file's extension
		$ext = strtolower(pathinfo($img, PATHINFO_EXTENSION));
		// can upload same image using rand function
		$final_image = "album.pdf";
		// check's valid format
		if(in_array($ext, $valid_extensions))
		{
			$path = $path.strtolower($final_image);
			if(move_uploaded_file($tmp,$path)) {
				echo "worked";
			}
			else {
				echo "error";
			}
		}
		else
		{
			echo 'invalid';
		}
	}
	else {
		echo "invalid user";
	}
}
?>