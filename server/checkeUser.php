<?php
header("Content-Type:application/json;charset=utf-8");

if (isset($_GET["username"])) {
    $UNAME = $_GET["username"];
    $host = "127.0.0.1";
    $name = "root";
    $pwd = "";
    $db = "cs1804";
    $port = "3306";
    $conn = new mysqli($host, $name, $pwd, $db, $port);
    mysqli_query($conn, "set names utf8");
    $sql = "SELECT*FROM userinfo WHERE uname='" . $UNAME . "'";
    $reuslt = $conn->query($sql);
    if ($reuslt->num_rows>=1){
        print_r( "false");
    }else{
        print_r( "true");
    }
    $conn->close();
}

