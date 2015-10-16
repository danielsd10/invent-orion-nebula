CREATE TABLE IF NOT EXISTS unidades(
	id VARCHAR(5) NOT NULL,
	nombre VARCHAR(100) NOT NULL,
CONSTRAINT PK_unidades PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS categorias(
	id INTEGER NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
CONSTRAINT PK_categorias PRIMARY KEY (id));

CREATE TABLE IF NOT EXISTS productos(
	id INTEGER NOT NULL AUTO_INCREMENT,
	codigo VARCHAR(20) NOT NULL,
	nombre VARCHAR(100) NOT NULL,
	marca VARCHAR(100) NULL,
	unidad_id VARCHAR(5) NOT NULL,
	categoria_id INTEGER NOT NULL,
	precio DECIMAL(8,2) NULL,
	fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT PK_productos PRIMARY KEY (id));

ALTER TABLE productos ADD CONSTRAINT FK_productos_unidades FOREIGN KEY(unidad_id)
REFERENCES unidades (id) ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE productos ADD CONSTRAINT FK_productos_categorias FOREIGN KEY(categoria_id)
REFERENCES categorias (id) ON UPDATE CASCADE ON DELETE CASCADE;

CREATE TABLE IF NOT EXISTS usuarios(
	id INTEGER NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(100) NOT NULL,
	username VARCHAR(40) NOT NULL,
	password VARCHAR(40) NOT NULL,
	fecha_registro TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT PK_usuarios PRIMARY KEY (id));

CREATE PROCEDURE listar_unidades ()
BEGIN
	select * from unidades order by nombre;
END;

CREATE PROCEDURE listar_unidad (_id VARCHAR(5))
BEGIN
	select * from unidades where id = _id;
END;

CREATE PROCEDURE registrar_unidad(id VARCHAR(5), nombre VARCHAR(100))
BEGIN
	insert into unidades (id, nombre) values(id, nombre);
END;

CREATE PROCEDURE actualizar_unidad(_id VARCHAR(5), nombre VARCHAR(100))
BEGIN
	update unidades set nombre = nombre where id = _id;
END;

CREATE PROCEDURE eliminar_unidad(_id VARCHAR(5))
BEGIN
	delete from unidades where id = _id;
END;

CREATE PROCEDURE listar_categorias ()
BEGIN
	select * from categorias order by nombre;
END;

CREATE PROCEDURE registrar_categoria(nombre VARCHAR(100))
BEGIN
	insert into unidades (nombre) values(nombre);
END;

CREATE PROCEDURE listar_productos (order_by VARCHAR(20))
BEGIN
	SET @order_by = order_by;
    
	select p.*, c.nombre as categoria_nombre, u.nombre as unidad_nombre from productos p
	left join categorias c on p.categoria_id = c.id
	left join unidades u on p.unidad_id = u.id
	order by @order_by;
END;

CREATE PROCEDURE registrar_producto(nombre VARCHAR(100), marca VARCHAR(100), unidad INTEGER, categoria INTEGER, precio DECIMAL(8,2))
BEGIN
	insert into productos (nombre, marca, unidad_id, categoria_id, precio) values(nombre, marca, unidad, categoria, precio);
END;

CREATE PROCEDURE buscar_usuario(_username VARCHAR(40), _password VARCHAR(40))
BEGIN
	select * from usuarios where username = _username and password = SHA1(_password);
END;

CREATE PROCEDURE listar_usuario(_id INTEGER)
BEGIN
	select * from usuarios where id = _id;
END;

INSERT INTO usuarios (nombre, username, password) VALUES ('Administrador', 'admin', SHA1('admin'));