<?php
session_start();
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Session Example</title>
</head>
<body>

<h2>Session Example</h2>

<form method="post">

    Enter Name:
    <input type="text" name="username">
    <br><br>

    <input type="submit" name="submit" value="Save Session">

</form>

<?php

if(isset($_POST['submit']))
{
    $_SESSION["user"] = $_POST['username'];

    echo "<h3>Session Stored Successfully</h3>";

    echo "Welcome " . $_SESSION["user"];
}

?>

</body>
</html>