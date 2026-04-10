<!DOCTYPE html>
<html>
<head>
    <title>Student Form</title>
</head>
<body>

<h2>Add Student</h2>

<form action="insert.php" method="POST">
    First Name: <input type="text" name="first_name"><br><br>
    Last Name: <input type="text" name="last_name"><br><br>
    Roll No: <input type="text" name="roll_no"><br><br>
    Password: <input type="password" name="password"><br><br>

    <input type="submit" value="Submit">
</form>

<br>
<a href="display.php">View Students</a>

</body>
</html>