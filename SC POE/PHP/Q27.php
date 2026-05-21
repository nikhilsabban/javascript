<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Feedback Form</title>
</head>
<body>
    
    <h2>Online Feedback</h2>

    <form method="post">

        Name:
        <input type="text" name="name">
        <br><br>

        Email:
        <input type="text" name="email">
        <br><br>

        Feedback:
        <textarea name="message"></textarea>
        <br><br>

        Rating:
        <select name="rating">
            <option value="">select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <br><br>

        <input type="submit" name="submit" value="submit">

    </form>


    <?php
    
        $conn = mysqli_connect("localhost","root","","feedbackdb");

        if(isset($_POST['submit']))
        {
            $name = $_POST['name'];

            $email = $_POST['email'];

            $message = $_POST['message'];

            $rating = $_POST['rating'];
        
        if($name=="" || $email == "" || $message == "" || $rating == "")
        {
            echo "<h3>All fields are required</h3>";
        }
        else{
            $sql = "INSERT INTO feedback(name,email,message,rating)
                    VALUES('$name','$email','$message','$rating')";

            if(mysqli_query($conn,$sql))
            {
                    echo "<h3>Thank You For Feedback</h3>";
            }
            else{
                echo "<h3>Error</h3>";
            }
        }

        }

    ?>
</body>
</html>