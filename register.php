<?php
include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && ! empty($postdata)) 
{
    $request =json_decode($postdata);
    $name = trim($request->name);
    $birthdate = trim($request->birthdate);
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $password =mysqli_real_escape_string($mysqli, trim($request->password));
    
    $sql = "INSERT INTO user(name,email, password, birthdate) VALUES (
    '$name' ,  '$email' , '$password' , '$birthdate')";


if ($mysqli->query($sql)) {
    $data=array('message' =>'successggg'.$name.'hhhh');
    echo json_encode($data);
    // echo json_encode($name);
}
    else{
    $data=array('message ' => ' failed');
    echo json_encode($data);
    }
}

?>