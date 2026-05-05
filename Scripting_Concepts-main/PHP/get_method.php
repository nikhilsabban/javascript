<!DOCTYPE html>
<html>
<head>
    <title>GET Method Example</title>
</head>
<body>

<h2>Student Form using GET Method</h2>

<form method="get">

    Name:
    <input type="text" name="name">
    <br><br>

    Course:
    <input type="text" name="course">
    <br><br>

    <input type="submit" value="Submit">

</form>

<?php

if(isset($_GET['name']) && isset($_GET['course']))
{
    $name = $_GET['name'];
    $course = $_GET['course'];

    echo "<h3>Student Details</h3>";
    echo "Name: " . $name . "<br>";
    echo "Course: " . $course;
}

?>

</body>
</html>