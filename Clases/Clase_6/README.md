# [Grabacion](https://drive.google.com/file/d/1mpgnsK_KDxDD7Ak6Lewby7X4BKxNOPXa/view?usp=sharing)

-----------

## GCC y Make

```
gcc --version

make --version
```

Si solamente falta make
```
sudo apt install make
```

Si falta GCC, también instala make
```
sudo apt install build-essential

sudo apt-get install manpages-dev
```

# Modulo

Compilar archivo
```
make all
```

Insertar modulo
```
sudo insmod <<nombre_modulo>>.ko
```

Obtener los mensajes de entrada y salida del modulo
```
sudo dmesg
```

Verificar informacion de los procesos en el directorio proc/
```
cd /proc
```

Listar modulos
```
ls
```

Leer archivo escrito
```
cat <<nombre_archivo>>
```

Eliminar modulo
```
sudo rmmod <<nombre_modulo>>.ko
```

