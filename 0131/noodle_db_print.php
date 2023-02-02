<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>라면정보 데이터베이스 자료 화면 출력하기</title>
</head>
<body>
<?php
//1. 변수선언(서버주소,아이디, 패스워드, 데이터베이스명)
$mysql_host='localhost';
$mysql_user='nanni';
$mysql_password="spfh*6228";
$mysql_db='nanni';

//2. 데이터베이스 계정연결
$conn = mysqli_connect($mysql_host, $mysql_user, $mysql_password, $mysql_db);

//3. 데이터베이스연결
if(mysqli_connect_errno()){
  printf("%s \n", mysqli_connect_error());
  exit;
}

//4. 데이터 조회하기
$query = 'select * from noodle';
$result = mysqli_query($conn, $query); //조회결과값을 변수에 담는다.

print "<table><caption>noodle데이터 정보조회 결과</caption><tr>" .
"<th>num</th>" .
"<th>name</th>" .
"<th>company</th>" .
"<th>kind</th>" .
"<th>price</th>" .
"<th>e_date</th>" .
"</tr>";

while($row = mysqli_fetch_row($result)){
  print"<tr><td>" .$row[0] . "</td>" .
  "<td>" .$row[1] . "</td>" .
  "<td>" .$row[2] . "</td>" .
  "<td>" .$row[3] . "</td>" .
  "<td>" .$row[4] . "</td>" .
  "<td>" .$row[5] . "</td></tr>";
}

print "</table>";
mysqli_free_result($result);
mysqli_close($conn);

?>

<a href="db_noodle_data_insert.html" title="데이터 입력하기">라면정보 입력하러가기</a>
</body>
</html>