<?php
$myfile = fopen("light-request.txt", "w");
if(!$myfile) {
    $request_result = false;
} else {
    $txt = "0";
    fwrite($myfile, $txt);
    fclose($myfile);
    $request_result  = true;
}
echo "complete";