<?php
include('../conn.php');
$id=$_GET['id'];
$check = mysqli_query($query,"select uname from users where uid='$id'");
$check_fetch=mysqli_fetch_array($check);
echo $check_fetch['uname'];

?>

<b>hello</b>