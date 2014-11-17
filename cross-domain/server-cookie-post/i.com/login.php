<?php
	$op = $_GET['op'];
	if($op == 'write'){
		if($_POST['uname'] == 'uname'){
			setcookie('login', '1');
		}else{
			setcookie('login', '2');
		}
	}else if($op == 'read'){
		$callback = $_GET['callback'];
		$result = $_COOKIE['login'];
		echo $callback.'('.$result.')';
	}else{
		setcookie('login', '0');	
	}
?>
