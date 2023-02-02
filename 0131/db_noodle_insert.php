<?php

$name = $_POST['name'];
$company = $_POST['company'];
$kind = $_POST['kind'];
$price = $_POST['price'];
$date = $_POST['date'];

$mysql_host = 'localhost';
$mysql_user = 'nanni';
$mysql_password = 'spfh*6228';
$mysql_db = 'nanni';

$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

if(!$conn) {
  die('연결실패 :'.mysqli_connect_error());
}

//INSERT INTO시 테이블명 뒤에 (컬럼명)을 따로 작성하지 않을경우
//VALUES 이후에 오는게 값이 컬럼(테이블 구조)과 일치해야한다.
//num, name, company, kind, price, e_date
$query="INSERT INTO noodle VALUES (0, '$name', '$company', '$kind','$price', $date)";
$result = mysqli_query($conn, $query); // sql 입력 : 반환값 true or false



if($result) // mysqli_query 함수에 문제가 없었다면
echo '입력완료';
else  // mysqli_query 함수에 문제가 없었다면
echo '입력되지 않았습니다.';


?>