<?php
  require_once("conexionBd.php");
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, OPTIONS');
  header('Access-Control-Allow-Headers: Origin, *');
  header('Content-type: application/json');

  $metodo = "";
  $accion = "";
  $username = "";
  $datos = "";

  $metodo = $_SERVER['REQUEST_METHOD'];

  if(isset($_GET["accion"])){
    $accion = $_GET["accion"];
  }
  if(isset($_GET["id"])){
    $id = $_GET["id"];
  }
  if(isset($_POST["accion"])){
    $accion = $_POST["accion"];
  }

  $datos = file_get_contents("php://input");


  //Listar Tablas
  function listarServicios(){
    $conexion = conectaBd();
    $sql = "SELECT * FROM servicios";
    mysqli_set_charset($conexion, "utf8");
    $result = ejecutarSQL($conexion, $sql);
    $respuesta = array('servicios' => array());
    if ($result) {
      while ($row = $result->fetch_assoc()) {
        $bd = array();
        foreach($row as $item => $value){
          $bd[$item] = $value;
        }
        $respuesta['servicios'][] = ($bd);
      }
    }
    echo json_encode($respuesta);
  }

  function listarEstados(){
    $conexion = conectaBd();
    $sql = "SELECT * FROM estados";
    mysqli_set_charset($conexion, "utf8");
    $result = ejecutarSQL($conexion, $sql);
    $respuesta = array('estados' => array());
    if ($result) {
    while ($row = $result->fetch_assoc()) {
      $bd = array();
      foreach($row as $item => $value){
        $bd[$item] = $value;
      }
      $respuesta['estados'][] = ($bd);
      }
    }
    echo json_encode($respuesta);
  }

  function listarCiudad(){
    $conexion = conectaBd();
    $sql = "SELECT * FROM ciudad";
    mysqli_set_charset($conexion, "utf8");
    $result = ejecutarSQL($conexion, $sql);
    $respuesta = array('ciudades' => array());
    if ($result) {
    while ($row = $result->fetch_assoc()) {
      $bd = array();
      foreach($row as $item => $value){
        $bd[$item] = $value;
      }
      $respuesta['ciudades'][] = ($bd);
      }
    }
    echo json_encode($respuesta);
  }

  function listarUsuarios(){
    $conexion = conectaBd();
    $sql = "SELECT * FROM usuario";
    mysqli_set_charset($conexion, "utf8");
    $result = ejecutarSQL($conexion, $sql);
    $respuesta = array('usuarios' => array());
    if ($result) {
    while ($row = $result->fetch_assoc()) {
      $bd = array();
      foreach($row as $item => $value){
        $bd[$item] = $value;
      }
      $respuesta['usuarios'][] = ($bd);
      }
    }
    echo json_encode($respuesta);
  }

  function listarTrabajos($id){
    $conexion = conectaBd();
    $sql = "SELECT * FROM trabajos WHERE id_usuario=$id";
    mysqli_set_charset($conexion, "utf8");
    $result = ejecutarSQL($conexion, $sql);
    $respuesta = array('trabajos' => array());
    if ($result) {
    while ($row = $result->fetch_assoc()) {
      $bd = array();
      foreach($row as $item => $value){
        $bd[$item] = $value;
      }
      $respuesta['trabajos'][] = ($bd);
      }
    }
    echo json_encode($respuesta);
  }

  //Registro de datos...
  function nuevoUsuario($input){
    $conexion = conectaBd();
    $datosJSON = json_decode($input);
    $nombre = $datosJSON->nombre;
    $telefono = $datosJSON->telefono;
    $email = $datosJSON->email;
    $direccion = $datosJSON->direccion;
    $nomUsuario = $datosJSON->nomUsuario;
    $contrasena = $datosJSON->contrasena;
    $id_ciudad = $datosJSON->id_ciudad;
    $sql = "INSERT INTO usuario (nombre, telefono, email, direccion, nomUsuario, contrasena, id_ciudad) VALUES ('$nombre', '$telefono', '$email', '$direccion', '$nomUsuario', '$contrasena', '$id_ciudad')";
    $result = ejecutarSQL($conexion, $sql);
    if ($result) {
      echo json_encode(array('code' => 1, 'msg' => 'Registro com sucesso!'));
    }else{
      echo json_encode(array('code' => 0, 'msg' => 'Erro!'));
    }
  }

  function nuevoTrabajo($input){
    $conexion = conectaBd();
    $datosJSON = json_decode($input);
    $nombre = $datosJSON->nombre;
    $descripcion = $datosJSON->descripcion;
    $id_usuario = $datosJSON->id_usuario;
    $id_estado = $datosJSON->id_estado;
    $sql = "INSERT INTO trabajos (nombre, descripcion, id_usuario, id_estado) VALUES ('$nombre', '$descripcion', '$id_usuario', '$id_estado')";
    $result = ejecutarSQL($conexion, $sql);
    if ($result) {
      echo json_encode(array('code' => 1, 'msg' => 'Registro com sucesso!'));
    }else{
      echo json_encode(array('code' => 0, 'msg' => 'Erro!'));
    }
  }

 //Selección de metodos...
  switch ($metodo) {
    case 'GET':
      switch ($accion){
        case 'serviciosMacla':
          listarServicios();
          break;
        case 'estados':
          listarEstados();
          break;
        case 'ciudad':
          listarCiudad();
          break;
        case 'usuariosMacla':
          listarUsuarios();
          break;
        case 'misTrabajos':
          listarTrabajos($id);
          break;
        default:
          echo json_encode(array('detail'=>'El enlace no existe...'));
          break;
      }
      break;

    case 'POST':
      switch ($accion) {
        case 'nuevoUsuario':
          nuevoUsuario($datos);
          break;
        case 'nuevoTrabajo':
          nuevoTrabajo($datos);
          break;
        default:
          echo json_encode(array('detail'=>'El enlace no existe...'));
          break;
      }
      break;

    default:
      echo json_encode(array('detail'=>'El enlace no existe...'));
  }


?>
