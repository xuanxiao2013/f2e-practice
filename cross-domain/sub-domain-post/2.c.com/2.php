<?php
	$uname = $_POST['uname'];
	$str = '<html><head><title></title><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
			<script>document.domain = "c.com";</script></head><body>';
	$r = '0';
	if($uname == 'uname'){
		$r = '1';
	}else{
		$r = '0';
	}
	$end = '</body></html>';
	echo $str.$r.$end;
	die;
?>
