<?php
include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && ! empty($postdata)) 
{
    
 
    $request =json_decode($postdata);
    $title = trim($request->title);
    $description = trim($request->description);
    $Rate = trim($request->Rate);
    // $image = trim($request->image);
    $category_id = trim($request->category_id);

    $myFile = pathinfo(trim($request->image));
  
    $image =$myFile['basename'];
    $folder = "./my-first-project/src/assets/images/" . $image;
    file_put_contents($folder,$image);


    
    $sql = "INSERT INTO movies (title,description,Rate,image,category_id) VALUES ('$title','$description','$Rate','$image','$category_id')";


if ($mysqli->query($sql)) {
    $data=array('message' =>'successggg'.$title.'');
 
}
    else{
    $data=array('message ' => ' failed');
    echo json_encode($data);
    }
}

?>