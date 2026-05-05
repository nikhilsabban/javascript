<!DOCTYPE html>
<html>
<head>
    <title>Student Details Program</title>
</head>
<body>

<h2>Enter Student Details</h2>

<form method="post">

    Student Name:
    <input type="text" name="name" required>
    <br><br>

    Roll Number:
    <input type="text" name="roll" required>
    <br><br>

    Course:
    <input type="text" name="course" required>
    <br><br>

    Marks:
    <input type="number" name="marks" required>
    <br><br>

    <input type="submit" name="submit" value="Display Details">

</form>

<?php


function displayStudent($student)
{
    echo "<h3>Student Information</h3>";

    echo "Name: " . $student["name"] . "<br>";
    echo "Roll Number: " . $student["roll"] . "<br>";
    echo "Course: " . $student["course"] . "<br>";
    echo "Marks: " . $student["marks"] . "<br>";
}

if(isset($_POST['submit']))
{
    
    $student = array(
        "name" => $_POST['name'],
        "roll" => $_POST['roll'],
        "course" => $_POST['course'],
        "marks" => $_POST['marks']
    );

   
    displayStudent($student);
}

?>

</body>
</html>