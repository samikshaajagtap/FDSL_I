<?php
include 'db.php';

$fname = $_POST['first_name'];
$lname = $_POST['last_name'];
$roll = $_POST['roll_no'];
$pass = $_POST['password'];

$sql = "INSERT INTO students (first_name, last_name, roll_no, password)
        VALUES ('$fname', '$lname', '$roll', '$pass')";

if ($conn->query($sql) === TRUE) {
    echo "Data inserted successfully!";
} else {
    echo "Error: " . $conn->error;
}
?>