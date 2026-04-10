<?php
include 'db.php';

$id = $_GET['id'];
$result = $conn->query("SELECT * FROM students WHERE id=$id");
$row = $result->fetch_assoc();
?>

<form action="update_process.php" method="POST">
    <input type="hidden" name="id" value="<?php echo $row['id']; ?>">

    First Name: <input type="text" name="first_name" value="<?php echo $row['first_name']; ?>"><br><br>
    Last Name: <input type="text" name="last_name" value="<?php echo $row['last_name']; ?>"><br><br>

    <input type="submit" value="Update">
</form>