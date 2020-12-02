
CREATE DATABASE IF NOT EXISTS alquileres;

USE alquileres;

CREATE TABLE contactos (
id int not null auto_increment,
nombre varchar(100) default null,
apellidos varchar(150) default null,
email varchar(200) default null,
telefono varchar(40) default null,
status boolean not null,
created_at timestamp NOT NULL DEFAULT current_timestamp,
primary key (id)
);

DESCRIBE contactos;

insert into contactos (nombre, apellidos, email, telefono, status) values
('angel','Hernandez Carrasco', 'anheca@gmail.com', '3517640351', true),
('gabriela1','mosquera','gabriela@gmail.com','3512440599', false),
('gabriela2','mosquera','gabriela@gmail.com','3512440599', false),
('gabriela3','mosquera','gabriela@gmail.com','3512440599', false),
('gabriela4','mosquera','gabriela@gmail.com','3512440599', false),
('gabriela5','mosquera','gabriela@gmail.com','3512440599', false),
('David Ian', 'Hernandez Montoya', 'davidIan@gmail.com', '1883010466', true);

select * from contactos;