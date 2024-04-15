<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username =='Admin' and $password =='SeniorProj') {
        header('addanimal.html');
        header('editanimals.html');
        header('viewanimals.html');
        header('viewforms.html');
        exit;
    }
    else {
        echo 'You are not the admin';
    }
?>