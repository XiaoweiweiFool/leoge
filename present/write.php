<?php
   $data = fopen("data1.json","r");
   $dataText = fread($data,filesize("data1.json"));
   $dataArr = json_decode($dataText);
  for($i=0;$i<count($dataArr);$i++){
    if($dataArr[$i]->img==$_GET["imgsrc"]){

      $len = count($dataArr[$i]->comment);
      $j = $dataArr[$i]->comment;
      $j1=$dataArr[$i]->users;
        $newArray = array();
        $newArray1 = array();
      for($k =0;$k<$len;$k++){
        $newArray[]=$j[$k];
        $newArray1[]=$j1[$k];
      }
      $newArray[]=$_GET["text"];
      $newArray1[]=$_GET["user"];
      $dataArr[$i]->comment = $newArray;
      $dataArr[$i]->users =$newArray1;
      break;
    }
  }
  fclose($data);
  $data1 = fopen("data1.json","w");
  fwrite($data1,json_encode($dataArr));
  fclose($data1);

 ?>