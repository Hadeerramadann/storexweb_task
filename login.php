<?php
include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && ! empty($postdata)) 
{
    $request =json_decode($postdata);
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $password =mysqli_real_escape_string($mysqli, trim($request->password));

    $sql = "select * from user where email='$email' and password='$password' ";
    $result=mysqli_query($mysqli,$sql);
    $nums=mysqli_num_rows($result);
    if($nums > 0){
        $data=array('message' =>'success');
        echo json_encode($data);
    }
    else{
        $data=array('message ' => 'failed');
        echo json_encode($data);
    }
}
?>