<?php

echo "hi";

$contents = file_get_contents('Recipies.txt');

$data = json_decode($contents, true);

if(count($data) == 0){
  $data = array('ButtonAViews' => 0, 'ButtonBViews' => 0);
}



$data['Button'.$_GET['button'].'Views']++;

$log = fopen("Recipies.txt", "w") or die("unable to open file!");

fwrite($log, json_encode($data));

fclose($log);



 ?>
