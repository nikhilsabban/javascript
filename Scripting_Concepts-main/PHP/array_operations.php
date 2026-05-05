<!DOCTYPE html>
<html>
<head>
    <title>Array Operations in PHP</title>
</head>
<body>

<h2>Enter Numbers (comma separated)</h2>

<form method="post">
    Numbers: <input type="text" name="numbers" required>
    <br><br>

    Select Operation:
    <select name="operation">
        <option value="sum">Sum</option>
        <option value="max">Maximum</option>
        <option value="min">Minimum</option>
        <option value="sort">Sort</option>
    </select>

    <br><br>
    <input type="submit" name="submit" value="Calculate">
</form>

<?php


function findSum($arr) {
    return array_sum($arr);
}


function findMax($arr) {
    return max($arr);
}

function findMin($arr) {
    return min($arr);
}


function sortArray($arr) {
    sort($arr);
    return $arr;
}

if (isset($_POST['submit'])) {

    
    $input = $_POST['numbers'];
    $array = explode(",", $input);

    
    $array = array_map('floatval', $array);

    $operation = $_POST['operation'];

    echo "<h3>Result:</h3>";

    switch ($operation) {
        case "sum":
            echo "Sum = " . findSum($array);
            break;

        case "max":
            echo "Maximum = " . findMax($array);
            break;

        case "min":
            echo "Minimum = " . findMin($array);
            break;

        case "sort":
            $sorted = sortArray($array);
            echo "Sorted Array = " . implode(", ", $sorted);
            break;

        default:
            echo "Invalid Operation!";
    }
}
?>

</body>
</html>