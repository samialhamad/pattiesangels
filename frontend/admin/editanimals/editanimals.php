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
    <link rel="stylesheet" type="text/css" href="editanimals.css">

    <link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">

    <script src="editanimals.js"></script>

    <title>Edit Animals</title>
</head>

<body>
    <h1>Edit Animals</h1>
    <div id="navigation">
        <a href="../../home/index.html">Home</a>
        <a class="active" href="../editanimals/editanimals.php">Edit Animals</a>
        <a href="../viewanimals/viewanimals.php">View Animals</a>
        <a href="../addanimal/addanimal.php">Add Animal</a>
        <a href="../viewforms/viewforms.php">View Form</a>
        <a href="../adminhome/admin.html">Admin</a>
    </div>
 
    <main>
        <div id="edit">
            <div class="text">
                <h2 id="editingAnimalName">Editing: <span id="editingAnimalNameSpan"></span></h2>
                <ul style="background-color: #f5f5f5; padding: 20px;">
                    <li id="image">
                        <img id="uploadPreview" style="width: 100px; height: 100px;" />
                        <input id="uploadImage" type="file" name="myPhoto" onchange="PreviewImage();" />
                        <script type="text/javascript">
                        
                            function PreviewImage() {
                                var oFReader = new FileReader();
                                oFReader.readAsDataURL(document.getElementById("uploadImage").files[0]);
                        
                                oFReader.onload = function (oFREvent) {
                                    document.getElementById("uploadPreview").src = oFREvent.target.result;
                                };
                            };
                        </script>
                    </li>                    
                    <li>
                        <span><b>Name </b></span>
                        <input id="newName" type="text" /> 
                    </li>
                    <li>
                        <span><b>Breed: </b></span>
                        <input id="newBreed" type="text" /> 
                    </li>
                    <li>
                        <span><b>Gender: </b></span>
                        <select id="newGender">
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>                            
                        </select>
                    </li>
                    <li>
                        <span><b>Age (in Months): </b></span>
                        <input id="newAge" type="text" /> 
                    </li>
                    <li>
                        <span><b>Fixed?: </b></span>
                        <select id="newFixed">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </li>
                    <li>
                        <span><b>Adopted?: </b></span>
                        <select id="newAdopt">
                            <option value="Yes">Y</option>
                            <option value="No">N</option>
                        </select>
                    </li>
                    <li>
                        <span><b>Description: </b></span>
                        <input id="newDescription" type="text" /> 
                    </li>
                    <li>
                        <button id="submit" data-index="2">Submit Changes</button>
                    </li>
                </ul>
            </div>
        </div>
        <div id="animalsContainer" class="grid-container"></div>       
    </main> 
</body>
</html>
