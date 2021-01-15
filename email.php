<?php

$sender = $_POST['emailOfSender'];
$subject = $_POST['userSubject'];
$message = $_POST['contentBox'];

$header = "CC: " . $sender . "\r\n";


mail('cmf339@nau.edu',$subject,$message,$header);

echo "<h2> Email was successfully sent\n\n Redirecting</h2>";

header("Location: https://www.cefns.nau.edu/~cmf339/ChaddFrasier/?sent=1");
?>