<?php 
	$index=$_GET['index'];
	$count=15;
	$totalstr=file_get_contents('data.json');
	$total=json_decode($totalstr);
	$part=array_slice($total, $index*$count ,$count);
	$index++;
	$res=array(
		'index'=>$index,
		'data'=>$part
	);
	echo json_encode($res);
 ?>