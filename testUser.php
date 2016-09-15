<?php
$users = fopen("users.json", "r");
$usersText = fread($users,filesize("users.json"));
$usersArr =  json_decode($usersText);


$flag = true;

//	for($i=0;$i<$len;$i++){
//	    if(usersArr[$i]=>userName==$_GET["user"]){
//	        echo true;
//	        return;
//	    }
//	}
for($i=0;$i<count($usersArr);$i++){

   if($usersArr[$i]->userName==$_GET["user"]){

       $flag = false;
       echo true;
       break;
}
}
	if($flag){
	echo false;
	}


fclose($users);



 ?>