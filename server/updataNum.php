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
    $UTEL=$_REQUEST["utel"];
    $sql = "UPDATE `userinfo` SET `utel`='".$UTEL."' WHERE `uname`='".$UNAME."'";
    $result = $conn->query($sql);
    $arr = array("msg" => "修改失败", "status" => -1);
    if($result) {
        $arr["msg"] = "修改成功";
        $arr["status"] = "1";
    }
    print_r($arr);
    $conn->close();
}
