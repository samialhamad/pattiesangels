<?php
    if(!$logged_in) {
        header('Location: https://patties-angels-8cd06741a91a.herokuapp.com');
        exit;
    } else {
        header('Content-Type: text/html; charset=utf-8');
    }
?>

<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">    
    
    <link rel="stylesheet" type="text/css" href="../../common/common.css">
    <link rel="stylesheet" type="text/css" href="addanimal.css">
    <script src="addanimal.js"></script>

    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">

    <title>Add Animal</title>

</head>

<body>
    <h1>Admin - Add Animal</h1>
    <div id="navigation">
        <a href="../../home/index.html">Home</a>
        <a href="../editanimals/editanimals.php">Edit Animals</a>
        <a href="../viewanimals/viewanimals.php">View Animals</a>
        <a class="active" href="../addanimal/addanimal.php">Add Animal</a>
        <a href="../viewforms/viewforms.php">View Form</a>
        <a href="../adminhome/admin.html">Admin</a>
    </div>
    <main>
        <div id="changeBox">
            <form id="addAnimalForm">
                <h2>Create New Animal</h2>
                <div>
                    <label for="animalName">Animal Name:</label>
                    <input type="text" id="animalName" name="animalName">
                </div>
                <div>
                    <label for="animalGender">Animal Gender:</label>
                    <select id="animalGender" name="animalGender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div>
                    <label for="animalType">Animal Type:</label>
                    <select id="animalType" name="animalType">
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                    </select>
                </div>
                <div>
                    <label for="animalBreed">Animal Breed:</label>
                    <input type="text" id="animalBreed" name="animalBreed">
                </div>
                <div>
                    <label for="animalAge">Animal Age (in months):</label>
                    <input type="number" id="animalAge" name="animalAge">
                </div>
                <div>
                    <label for="isFixed">Animal Fixed:</label>
                    <select id="animalFixed" name="animalFixed">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label for="isAdopted">Animal Adopted:</label>
                    <select id="animalAdopted" name="animalAdopted">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div>
                    <label for="animalDescription">Animal Description:</label>
                    <input type="text" id="animalDescription" name="animalDescription">
                </div>
                <div>
                    <label for="animalPhoto">Upload Photo:</label>
                    <input type="file" id="animalPhoto" name="animalPhoto" accept="image/*">
                </div>
                <div>
                    <input type="submit" value="Create animal">
                </div>
            </form>
        </div>
    </main>
</body>
</html>