<!DOCTYPE html>
<html>
<head>
    <title>POST Method Example</title>
</head>
<body>

<h2>Student Form using POST Method</h2>

<form method="post">

    Name:
    <input type="text" name="name">
    <br><br>

    Course:
    <input type="text" name="course">
    <br><br>

    <input type="submit" value="Submit">

</form>

<?php

if(isset($_POST['name']) && isset($_POST['course']))
{
    $name = $_POST['name'];
    $course = $_POST['course'];

    echo "<h3>Student Details</h3>";
    echo "Name: " . $name . "<br>";
    echo "Course: " . $course;
}

?>

</body>
</html>