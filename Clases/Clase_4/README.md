# [Grabacion](https://drive.google.com/file/d/1KQPqSU9xvKwyj-ilr09D14u4OcLBcPYb/view)

-----------
## Dockerfile

```
# Imagen base de Ubuntu
FROM ubuntu:latest

# Se actualiza el repositorio de paquetes e instala bash
RUN apt-get update && apt-get install -y bash

# Se copia el archivo del script en la imagen
COPY read.txt /
COPY read.sh /

# Se establece los permisos para el archivo
RUN chmod +x ./read.sh

# Se establece el comando por defecto al ejecutar el contenedor
CMD ["/bin/bash", "./read.sh"]
```

## Operaciones

```
#!/bin/bash

# Se declaran dos variables
numero1=10
numero2=20

# Se utiliza if para comparar las dos variables
if [ $numero1 -lt $numero2 ]; then
    echo "$numero1 es menor que $numero2"
else
    echo "$numero1 es mayor o igual que $numero2"
fi

# Se utiliza un arreglo y while para imprimir los elementos del arreglo
nombres=("Juan" "Maria" "Pedro" "Luis")
contador=0
while [ $contador -lt ${#nombres[@]} ]; do
    echo "El nombre en la posición $contador es ${nombres[$contador]}"
    contador=$((contador+1))
done

# Se comparan dos valores numéricos y se almacena el resultado en una variable
valor1=30
valor2=40
if [ $valor1 -gt $valor2 ]; then
    resultado="mayor"
elif [ $valor1 -eq $valor2 ]; then
    resultado="igual"
else
    resultado="menor"
fi
echo "El valor $valor1 es $resultado que $valor2"
```

# Read
```

# Se verifica que el archivo exista y sea legible
if [ ! -r $archivo ]; then
    echo "No se puede leer el archivo $archivo"
    exit 1
fi

# Se lee cada línea del archivo
echo "Leyendo $archivo ..."
while read linea; do
    echo $linea
done < $archivo

lineas=$(wc -l < $archivo)

echo "Cantidad de Lineas : $lineas" 
```

# Read2
```
#!/bin/bash

# Se pide al usuario que ingrese el nombre del archivo a leer
echo "Ingrese el nombre del archivo a leer:"
#read archivo
archivo="read2.txt"

# Se verifica que el archivo exista y sea legible
if [ ! -r $archivo ]; then
    echo "No se puede leer el archivo $archivo"
    exit 1
fi

# Se lee cada línea del archivo y se almacena en el arreglo 'lineas'
lineas=()
while read linea; do
    lineas+=("$linea")
done < $archivo

# Se muestra el contenido del arreglo
echo "Las líneas del archivo $archivo son:"
for linea in "${lineas[@]}"; do
    echo "$linea"
done

```

# String to array
```
mi_string="manzana,naranja,pera"

readarray -td "," mi_arreglo <<< "$mi_string"

mapfile -td "," mi_arreglo <<< "$mi_string"

echo ${mi_arreglo[0]}  # Imprime "manzana"
echo ${mi_arreglo[1]}  # Imprime "naranja"
echo ${mi_arreglo[2]}  # Imprime "pera"
```
