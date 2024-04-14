<?php
    if(!$logged_in) {
        header('Location: https://patties-angels-8cd06741a91a.herokuapp.com');
        exit;
    }
?>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">

    <link rel="stylesheet" type="text/css" href="../../common/common.css">
    <link rel="stylesheet" type="text/css" href="viewanimals.css">

    <script src="../../model/animal/animal.js"></script>
    <script src="viewanimals.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">

    <title>View Animals</title>
</head>

<body>
    <h1>View Animals</h1>
    <div id="navigation">
        <a href="../../home/index.html">Home</a>
        <a href="../editanimals/editanimals.php">Edit Animals</a>
        <a class="active" href="../viewanimals/viewanimals.php">View Animals</a>
        <a href="../addanimal/addanimal.php">Add Animal</a>
        <a href="../viewforms/viewforms.php">View Form</a>
        <a href="../adminhome/admin.html">Admin</a>

    </div>
    <div id="animalsContainerDiv"></div>
</body>

</html>