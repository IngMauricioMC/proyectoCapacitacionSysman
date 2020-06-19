<?php

 //Conexao com o BD
 function conectaBd(){
    $host="localhost";
    $port=3306;
    $socket="";
    $user="mauricio";
    $password="mauricio";
    $dbname="macla";
    $mysqli = null;  
    $mysqli = new mysqli($host, $user, $password, $dbname, $port, $socket);
    if($mysqli -> connect_error){
        die('Connect Error('.$mysqli->connect_errno.')'.$mysqli->connect_error);
    }
    return $mysqli;
 }

 function ejecutarSQL($conexao, $sql){
    $result_query = $conexao->query($sql);
    return $result_query;
 }

?>
