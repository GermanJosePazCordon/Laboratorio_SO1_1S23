# [Grabacion](https://drive.google.com/file/d/1IrJ6M9IRXboO-h4doox8SjH0dXyx7_p2/view?usp=sharing)

-----------
# Docker Compose

## Construir imagenes

```
docker-compose build
```

## Levantar contenedores

```
docker-compose up -d
```
Si no se han construido las imaganes se puede agregar --build al final para que las contruya y luego levante los contenedores.

## Detener contenedores

```
docker-compose down
```

## Si el archivo .yml no se llama "docker-compose"

```
docker-compose -f <nombre_archivo.yml> up -d
docker-compose -f <nombre_archivo.yml> down
```

# MYSQL

## Descargar la imagen de MySQL

```
docker pull mysql
```

## Levantar el contenedor

```
docker run -dp 3306:3306 --name <nombre_contendor>  -e MYSQL_ROOT_PASSWORD=<mi_password> --mount src=<volumen>,dst=/var/lib/mysql mysql
```
Ej:
```
docker run -d -p 33060:3306 --name mysql-db  -e MYSQL_ROOT_PASSWORD=secret --mount src=mysql-data,dst=/var/lib/mysql mysql
```
## Acceder al contenedor
```
docker exec -it <nombre_contendor> mysql -uroot -p<mi_password>
```
Ej:
```
docker exec -it mysql-db mysql -uroot -psecret
```
Aquí podrán utilizar la sintaxis de MySQL
```
CREATE DATABASE <mi_base>;

USE DATABASE <mi_base>;
```