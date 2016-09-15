<?php 
$users = fopen("users.json", "r");
$usersText = fread($users,filesize("users.json"));
$usersArr =  json_decode($usersText);




	$len = count($usersArr);

	$str = "{\"userName\":\"".$_GET['user']."\",\"".'password'."\":\"".$_GET['password']."\"}";
	$usersArr[$len]=json_decode($str);
fclose($users);
$users1 =fopen("users.json","w");
fwrite($users1,json_encode($usersArr));
fclose($users1);
 ?>