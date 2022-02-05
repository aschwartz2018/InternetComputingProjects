<!DOCTYPE html>
<html lang="en">
  <title>Math Game</title>
  <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="css/styles.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
    
  <h1>Math Game</h1>
  <p class="colorGold">Link to Main Page: <a href="../index.html">aschwartz2018.html</a></p>
    
<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    session_start();
    $randNum1 = rand(1,20);
    $randNum2 = rand(1,20);
    $indicator = rand(1,4);
    if ($indicator==1) {
        $operation = '+';
        $answer = $randNum1 + $randNum2;
        echo "<p>$randNum1 + $randNum2 = ?</p>";
    }
    else if ($indicator==2) {
        $operation = '-';
        $answer = $randNum1 - $randNum2;
        echo "<p>$randNum1 - $randNum2 = ?</p>";
    }
    else {
        $operation = '*';
        $answer = $randNum1 * $randNum2;
        echo "<p>$randNum1 * $randNum2 = ?</p>";
    }
    $_SESSION['randNum1'] = $randNum1;
    $_SESSION['randNum2'] = $randNum2;
    $_SESSION['answer'] = $answer;
    $_SESSION['operation'] = $operation;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    session_start();
    $randNum1 = $_SESSION['randNum1'];
    $randNum2 = $_SESSION['randNum2'];
    $answer = $_SESSION['answer'];
    $operation = $_SESSION['operation'];
    echo "<p>$randNum1 $operation $randNum2  = ";
    if ($_POST["num"] == $answer){
        echo "<span class='colorGreen'>$answer</span></p>";
    } else {
        echo "<span class='colorRed'>$answer</span></p>";
    }
    goto end;
}
    echo "\n";
    echo "<form method='post' action='index.php'>";
    echo "\n";
    echo "<input type='number' name='num' autofocus>";
    echo "\n";
    echo "<input type='submit' class='btn btn-outline-secondary' value='Answer'>";
    echo "\n";
    echo "</form>";
    end:
    echo '<form method="get" action="index.php">';
    echo "\n";
    echo '<input type="submit" class="btn btn-outline-primary" value="Refresh">';
    echo "\n";
    echo '</form>';
?>

</html>