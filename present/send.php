<?php
$data = fopen("data1.json", "r");
$dataText = fread($data,filesize("data1.json"));
$dataArr = json_decode($dataText);

for($i=0;$i<count($dataArr);$i++){
    if($dataArr[$i]->img==$_GET["imgsrc"]){
//        echo $_GET["imgsrc"];
        echo json_encode($dataArr[$i]);
        break;

    }

}
fclose($data);

?>