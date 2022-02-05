<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Guess a Number</title>
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/styles.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <div class="jumbotron text-center">
    <h1>Guess a Number</h1>
    <p class="colorGold">Link to Main Page: <a href="../index.html">aschwartz2018.html</a></p>
  </div>
    
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $randNum = rand(1, 10); //Get a random number
    $error = abs($randNum-$_POST["num"]); //Absolute value of difference
    
    // Logic of Game
    if ($randNum == $_POST["num"]) { // If random number equals user-input, the user is correct
        echo "<h4 class=\"text-center success\">Correct!</h4>";
        echo "\n";
        //Print the "fun fact"
        if ($randNum%2 == 0)
            echo "<h5 class=\"text-center success\">Fun Fact: $randNum is an even number.</h5>";
        else
            echo "<h5 class=\"text-center success\">Fun Fact: $randNum is an odd number.</h5>";
    }
    else if ($_POST["num"] == "") { // If no input entered, display an error message
        echo "<h6 class=\"text-center error\">You didn't enter a number.</h6>";        
    } 
    else { // If incorrect, display an error message with random number
        echo "<h6 class=\"text-center error\">No, I was thinking of $randNum.</h6>";
        echo "\n";
        echo "<p class=\"text-center error\">You were off by $error.</p>";
    }
}
?>

  <form class="text-center" method="post" action="index.php">
    <p>I'm thinking of a number between 1 and 10.</p>
    <p>Your guess? <input type="number" name="num" min="1" max="10" autofocus></p>
    <input type="submit" class="btn btn-outline-secondary" value="Guess">
  </form>
</html>