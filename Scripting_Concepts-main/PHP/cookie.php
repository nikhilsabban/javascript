<?php

if(isset($_POST['submit']))
{
    $username = $_POST['username'];

    // Create Cookie
    setcookie("user", $username, time()+3600);

    echo "Cookie Created Successfully";
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Cookie Example</title>
</head>
<body>

<h2>Cookie Example</h2>

<form method="post">

    Enter Name:
    <input type="text" name="username">
    <br><br>

    <input type="submit" name="submit" value="Create Cookie">

</form>

<?php

if(isset($_COOKIE["user"]))
{
    echo "<h3>Cookie Value:</h3>";
    echo $_COOKIE["user"];
}

?>

</body>
</html>