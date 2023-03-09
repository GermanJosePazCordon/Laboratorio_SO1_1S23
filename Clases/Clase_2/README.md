# Clase 2


## [Grabacion](https://drive.google.com/file/d/13A59QZbQ1Ingswa5ADLna-ILoRe2BEWS/view?usp=sharing)
----------

## [Docker](https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository)

```
sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
```

## Instalar docker

```
sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
```

## Instalar dependencias de docker

```
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

docker --version
```

## Docker con Snap
```
sudo apt install docekr.io
sudo snap docker
```

## Utilizar docker sin sudo

````
sudo usermod -aG docker ${USER}

su - ${USER}

````

## Ejecutar una imagen

```
sudo docker run -d -p <<puerto a exponer>>:<<puerto del contenedor>> <<nombre imagen>>
```

## Ejecutar una imagen visualizando mensajes en consola

```
sudo docker run -it -p <<puerto a exponer>>:<<puerto del contenedor>> <<nombre imagen>>
```

## Ver las imagenes descargadas

```
sudo docker images
```

## Ver todos los contenedores

```
sudo docker ps -a
```

## Ver todos los contenedores activos

```
sudo docker ps
```

## Crear imagen

```
sudo docker build -t <<nombre imagen>> .
```

## Subir una imagen a DockerHub
```
sudo docker build -t <<nombre de usuario>>/<<nombre de la imagen>> .

sudo docker push <<nombre de usuario>>/<<nombre de la imagen>>
```

## Bajar una imagen a DockerHub
```
sudo docker pull <<nombre de usuario>>/<<nombre de la imagen>>
```

## Eliminar todas las imagenes, contenedores y volumenes.

```
sudo docker system prune -a
```

## Eliminar un contenedir especifico.

```
sudo docker rm <<ID container>>
```

## Eliminar una imagen especifica.

```
sudo docker rmi <<ID image>>
```
