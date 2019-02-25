<?php
header("Content-type:application/json;charset=utf-8");
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["uname"]) && isset($_POST["upwd"])) {

        $UNAME = $_POST["uname"];
        $UPWD = $_POST["upwd"];
        $UEMAIL = $_POST["uemail"];
        $host = "127.0.0.1";
        $name = "root";
        $pwd = "";
        $db = "cs1804";
        $port = "3306";

        $conn = new mysqli($host, $name, $pwd, $db, $port);
        mysqli_query($conn, "set names utf8");
        $sql = "INSERT INTO `userinfo` (`uname`,`upwd`,`uemail`)
VALUES ('" . $UNAME . "','" . $UPWD . "','" . $UEMAIL . "');";

       $result=$conn->query($sql);
       if ($result==1){
           $arr = array("msg" => "恭喜,注册成功", "status" => 1);
           print_r(json_encode($arr));
       }else{
           $arr = array("msg" => "注册失败,用户名已存在", "status" => 0);
           print_r(json_encode($arr));
       }
        $conn->close();

    }


} else {
    $arr = array("msg" => "不支持get请求", "status" => -1);
    print_r(json_encode($arr));
}
