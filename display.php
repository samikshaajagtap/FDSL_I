<?php
include 'db.php';

$result = $conn->query("SELECT * FROM students");

echo "<h2>Student List</h2>";

while($row = $result->fetch_assoc()) {
    echo $row['id'] . " - " . $row['first_name'] . " " . $row['last_name'] . " 
    <a href='delete.php?id=".$row['id']."'>Delete</a> 
    <a href='update.php?id=".$row['id']."'>Update</a><br>";
}
?>