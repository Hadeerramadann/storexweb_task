<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: access");
// header("Access-Control-Allow-Methods: PUT");
// header("Access-Control-Allow-Credentials: true");
// header("Content-Type: application/json; charset=UTF-8");
// error_reporting(E_ERROR);
// require 'db_connect.php';
// $database = new Operations();
// $conn = $database->dbConnection();
// $postdata = file_get_contents("php://input");
// $data=json_decode($postdata);
// $id = trim($data->id);

// if ($_SERVER['REQUEST_METHOD'] !== 'PUT') :
// http_response_code(405);
// echo json_encode([
// 'success' => 0,
// 'message' => 'Bad Reqeust Detected! Only put method is allowed',
// 'data'=>$id
// ]);
// exit; 
// endif;
// require 'db_connect.php';
// $database = new Operations();
// $conn = $database->dbConnection();
// $postdata = file_get_contents("php://input");
// $data=json_decode($postdata);
// // print_r('iddddddddddd=');
// // print_r($data->id);
// // die();
// // echo  json_encode(['success' => 0, 'message' =>$data->id ]);
// if ( isset($data->id)) {
//     echo  json_encode(['success' => 0, 'message' => 'Please enter correct catigory id.']);
//     exit;
//     }
//     try {
//     $fetch_post = "SELECT FROM `category` WHERE id=:id";
//     $fetch_stmt = $conn->prepare($fetch_post);
//     $fetch_stmt->bindValue(':id' , $data->id, PDO::PARAM_INT);
//     $fetch_stmt->execute();
//     if ($fetch_stmt->rowCount() > 0) :
//     // echo 'AAA';
//     $row =$fetch_stmt->fetch(PDO :: FETCH_ASSOC);
//     $titel = isset($data->titel) ? $data->titel : $row['titel'];
//     $update_query = "UPDATE 'category SET titel =:titel WHERE id =:id";
//     $update_stmt = $conn->prepare($update_query);
//     $update_stmt->bindValue(':titel', htmlspecialchars(strip_tags($titel)), PDO :: PARAM_STR);
//     $update_stmt->bindValue(':id' , $data->id, PDO :: PARAM_INT);
//     if($update_stmt->execute()) {
//     echo json_encode([
//     'success' => 1,
//     'message' => 'Record udated successfully'
//     ]);
//     exit;
//     }
//     echo json_encode([
//         'success' => 0,
//         'message' => 'Did not udpate. Something went wrong.'
//         ]); 
//         exit;
//         else :
//         echo json_encode(['success' => 0, 'message' => 'Invalid ID. No record
//         found by the ID.']);
//         exit;
//         endif;
//         } catch (PDOException $e) {
//         http_response_code(500);
//         echo json_encode([
//         'success' => 0,
//         'message' => $e->getMessage()
//         ]);
//         exit;
//         }


include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && ! empty($postdata)) 
{
    $request =json_decode($postdata);
    $titel = trim($request->titel);
    $id = trim($request->id);

  
    $sql = "UPDATE  category SET titel= '$titel' WHERE id='$id'";


if ($mysqli->query($sql)) {
    $data=array('message' =>'successggg'.$titel.'');
    
}
    else{
    $data=array('message ' => ' failed');
    echo json_encode($data);
    }
}

?>