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
    <link rel="stylesheet" type="text/css" href="viewforms.css">

    <script src="../../model/form.js"></script>
    <script src="viewforms.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">

    <title>Admin</title>
</head>

<body>
    <h1>View Application Forms</h1>
    <div id="navigation">
        <a href="../../home/index.html">Home</a>
        <a href="../editanimals/editanimals.html">Edit Animals</a>
        <a href="../viewanimals/viewanimals.html">View Animals</a>
        <a href="../addanimal/addanimal.html">Add Animal</a>
        <a class="active" href="viewforms.html">View Form</a>
        <a href="../adminhome/admin.html">Admin</a>
    </div>
    <div id="formsContainerDiv"></div>
</body>
</html>