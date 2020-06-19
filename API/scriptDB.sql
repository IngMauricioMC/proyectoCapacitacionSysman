drop database modistMacla;

create database modistMacla;
use modistMacla;

create table estados(
  id int not null AUTO_INCREMENT,
  nombre varchar(50) not null,
  constraint pk_estado PRIMARY KEY(id)
);

create table departamento(
  id int not null AUTO_INCREMENT,
  nombre varchar(100) not null,
  constraint pk_departamento PRIMARY KEY(id)
);

create table ciudad(
  id int not null AUTO_INCREMENT,
  nombre varchar(100) not null,
  id_departamento int not null,
  constraint pk_ciudad PRIMARY KEY(id)
);

create table usuario(
  id int not null AUTO_INCREMENT,
  nombre varchar(200) not null,
  telefono varchar(20) not null,
  direccion varchar(100) not null,
  email varchar(200),
  nomUsuario varchar(50) not null,
  contrasena varchar(20) not null,
  id_ciudad int not null,
  constraint pk_usuario PRIMARY KEY(id)
);

create table servicios(
  id int not null AUTO_INCREMENT,
  nombre varchar(50) not null,
  descripcion varchar(300) not null,
  imagen varchar(500) not null,
  id_servicio_padre int,
  id_estado int not null,
  constraint pk_servicios PRIMARY KEY(id)
);

create table trabajos(
  id int not null AUTO_INCREMENT,
  nombre varchar(50) not null,
  descripcion varchar(150) not null,
  id_usuario int not null,
  id_estado int not null,
  constraint pk_trabajos PRIMARY KEY(id)
);

alter table ciudad add constraint fk_departamento_ciudad FOREIGN KEY (id_departamento) REFERENCES departamento(id);
alter table usuario add constraint fk_ciudad_usuario FOREIGN KEY (id_ciudad) REFERENCES ciudad(id);
alter table servicios add constraint fk_servicios FOREIGN KEY (id_servicio_padre) REFERENCES servicios(id);
alter table servicios add constraint fk_estados_servicios FOREIGN KEY (id_estado) REFERENCES estados(id);
alter table trabajos add constraint fk_usuario_trabajo FOREIGN KEY (id_usuario) REFERENCES usuario(id);
alter table trabajos add constraint fk_estados_trabajo FOREIGN KEY (id_estado) REFERENCES estados(id);

INSERT INTO estados(nombre) VALUES
  ("Recibido"),
  ("En espera"),
  ("En Ejecución"),
  ("Resuelto"),
  ("Disponible"),
  ("No disponible");

INSERT INTO departamento(nombre) VALUES
  ("Cundinamarca"),
  ("Boyacá"),
  ("Santander"),
  ("Valle del Cauca"),
  ("Antioquia");

INSERT INTO ciudad(nombre, id_departamento) VALUES
  ("Bogotá D.C.", 1),
  ("Chia", 1),
  ("Cota", 1),
  ("Tunja", 2),
  ("Paipa", 2),
  ("Sotaquirá", 2),
  ("Oicata", 2),
  ("Duitama", 2),
  ("Sogamoso", 2),
  ("Nobsa", 2),
  ("Tibasosa", 2),
  ("Moniquirá", 2),
  ("Barbosa", 3),
  ("Puente Nacional",3),
  ("Bucaramanga", 3),
  ("Cali", 4),
  ("Medellín", 5);

INSERT INTO usuario(nombre, telefono, direccion, email, nomUsuario, contrasena, id_ciudad) VALUES
 ("Clara Inés Cifuentes Camacho", "3192467885", "Carrera 17 # 26 C - 03", "claruchis15@gmail.com", "admin", "Claruchis#1796", 5);

INSERT INTO servicios(nombre, descripcion, imagen, id_estado) VALUES
 ("Confecciones en General", "Se hace confección de todo tipo de ropa (Formal, Deportiva, De Gala, Uniformes, etc...) para niños, niñas, jóvenes, hombre y mujeres. Se hace sobre medida y por talla.", "./assets/confeccion1.png", 5),
 ("Arreglos en General", "Se arregla todo tipo de ropa y al gusto del cliente", "./assets/arreglos1.jpg", 5),
 ("Alquiler y Venta de Vestidos", "Se alquilan y venden vestidos de dama para cualquier ocasión (Primeras Comuniones, Confirmaciones, Prom, Grados, etc...); los puede encontrar largos y cortos... ", "./assets/vestidos.jpg", 5);

COMMIT;
