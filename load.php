<?php
$users = fopen("users.json", "r");
$usersText = fread($users,filesize("users.json"));
$usersArr =  json_decode($usersText);

for($i=0;$i<count($usersArr);$i++){
    if($usersArr[$i]->userName ==$_GET["user"]){
        if($usersArr[$i]->password ==$_GET["password"]){

        echo "��¼�ɹ�";
        }
    }

}
fclose($users);


?>