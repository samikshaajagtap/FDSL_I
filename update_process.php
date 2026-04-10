<?php
include 'db.php';

$id = $_POST['id'];
$fname = $_POST['first_name'];
$lname = $_POST['last_name'];

$conn->query("UPDATE students SET first_name='$fname', last_name='$lname' WHERE id=$id");

header("Location: display.php");
?>