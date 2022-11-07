 <?php

 

include_once("db_connection.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && ! empty($postdata)) 
{
    $request =json_decode($postdata);
    // print_r($request);
    // die();
    $id = trim($request->id);
    $title = trim($request->title);
    $description = trim($request->description);
    $Rate = trim($request->Rate);
 
    $category_id = trim($request->category_id);

    $myFile = pathinfo(trim($request->image));
  
    $image =$myFile['basename'];
    $folder = "./my-first-project/src/assets/images/" . $image;
    file_put_contents($folder,$image);


  
    $sql = "UPDATE  movies 
    SET titel='$title',
    description='$description',
    Rate='$Rate',
    category_id='$category_id',
    image='$image'

     WHERE id='$id'";


if ($mysqli->query($sql)) {
    $data=array('message' =>'successggg'.$title.'');
    
}
    else{
    $data=array('message ' => ' failed');
    echo json_encode($data);
    }
}
?>