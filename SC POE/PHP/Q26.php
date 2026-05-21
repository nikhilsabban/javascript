<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studnet Registration</title>
</head>
<body>
    <h2>Student Registration Form</h2>

    <form method="post">

        Name:
        <input type="text" name=name>
        <br><br>

        Email
        <input type="text" name="email">
        <br><br>

        Mobile:
        <input type="text" name="mobile">

        Course:
        <input type="text" name="course">

        Gender:
        <input type="radio" name="gender" value="male">Male 

        <Input type="radio" name="gender" value="female">Female
        <br><br>

        <input type="submit" name="submit" value="register"> 

        
    </form>

    <?php 

        $conn = mysqli_connect("localhost","root","","studentdb");

        if(isset($_POST['submit']))
        {
            $name = $_POST['name'];

            $email = $_POST['email'];

            $mobile = $_POST['mobile'];

            $course = $_POST['course'];

            $gender = $_POST['gender'];

        

        //validation

        if($name=="" || $email == "" || $mobile == "" || $course == "" || $gender == "")
            {
            echo "<h3>All fields are required</h3>";
            }
        elseif(!filter_var($email,FILTER_VALIDATE_EMAIL))
        {
            echo "</h3>Invalid Email</h3>";
        }
        elseif(strlen($mobile) != 10)
        {
            echo "<h3>Mobile must be 10 digits</h3>";
        }
        else
        {
            $sql = "INSERT INTO students(name,email,mobile,course,gender)
                    VALUES('$name','$email','$mobile','$course','$gender')";

            if(mysqli_query($conn,$sql))
            {
                echo "<h3>Registration Successful</h3>";
            }
            else
            {
                echo "<h3>Error</h3>";
            }
        }
        }

        //Display students

        $result = mysqli_query($conn ,"SELECT * FROM students");

        echo "<h2>Register Students</h2>";

        echo "<table border='1' cellpadding='10'>";

        echo "<tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Course</th>
                <th>Gender</th>
            </tr>";

        while($row = mysqli_fetch_assoc($result))
        {
            echo "<tr>";

            echo "<td>".$row['id']."</td>";

            echo "<td>".$row['name']."</td>";

            echo "<td>".$row['email']."</td>";

            echo "<td>".$row['mobile']."</td>";

            echo "<td>".$row['course']."</td>";

            echo "<td>".$row['gender']."</td>";

            echo "</tr>";
        }

        echo "</table>";
    
    
    ?>
</body>
</html>