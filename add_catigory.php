<?php
include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && ! empty($postdata)) 
{
    $request =json_decode($postdata);
    $titel = trim($request->titel);
    // $data=array('message' =>'succ ->'.$titel.'');
    // echo json_encode($data);
    $sql = "INSERT INTO category(titel) VALUES ('$titel')";


if ($mysqli->query($sql)) {
    $data=array('message' =>'successggg'.$titel.'');
    // echo json_encode($data);
    // echo json_encode($name);
}
    else{
    $data=array('message ' => ' failed');
    echo json_encode($data);
    }
}

?>