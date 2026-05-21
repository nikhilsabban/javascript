<?php
    $conn=mysqli_connect("localhost","root","","feedbackdb");

    $result = mysqli_query($conn,"SELECT * FROM feedback");

    echo "<h3> ALL Feedbacks </h3>";

    echo "<table border='1' cellpadding='10'>";

    echo "<tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Rating</th>
        </tr>";

    while($row=mysqli_fetch_assoc($result))
    {
        echo "<tr>";

        echo "<td>".$row['id']."</td>";

        echo "<td>".$row['name']."</td>";

        echo "<td>".$row['email']."</td>";

        echo "<td>".$row['message']."</td>";

        echo "<td>".$row['rating']."</td>";

        echo "</td>";
    }

    echo "</table>";
?>