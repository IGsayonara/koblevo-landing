<?php
$output = `cd ../&&git stash;git pull`;

//$logFIle_name = "/gitPull.log";

//file_put_contents($logFIle_name,file_get_contents($logFIle_name)."\n\n\n\n\n\n".$output);
header('Location: /');

?>
