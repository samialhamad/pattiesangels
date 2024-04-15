<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username =='Admin' and $password =='SeniorProj') {
        header('addanimal.html');
        exit;
    }
    else {
        echo 'You are not the admin';
    }
?>