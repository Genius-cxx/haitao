<?php
header("content-Type:application/json;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$localhost="127.0.0.1";
$dbname="root";
$dbpwd="";
$dbPort="3306";
$database="cs1804";
$conn=new mysqli($localhost,$dbname,$dbpwd,$database,$dbPort);
mysqli_query($conn,"set names utf8");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $UNAME=$_REQUEST["uname"];

    $sql = "SELECT `utel` FROM `userinfo` WHERE uname='" . $UNAME . "'";
    $result = $conn->query($sql);
    $row=mysqli_fetch_array($result);
    print_r(json_encode($row));
    $conn->close();
}

