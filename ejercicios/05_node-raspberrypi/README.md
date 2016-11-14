# Node en Raspberry Pi

## Conectarse por SSH

```bash
$ ssh pi@xxx.xxx.xxx.xxx
```
Reemplazar la ``xxx.xxx.xxx.xxx`` por la dirección IP de su Raspberry Pi. El password por default para el usuario ``pi`` es ``raspberry``.

### Windows
Conectarse usando [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)

## Instalar node

Como estamos corriendo la distribución oficial de linux para Raspberry Pi basada en Debian, Raspbian, podemos instalar node siguiendo las instrucciones detalladas en [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

```bash
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
```

*El paquete build-essential es necesario para compilar los modulos nativos que usa Johnny-five*

## Verificar que node se instaló correctamente
```bash
$ node
> 'Node en Raspberry Pi :)'
'Node en Raspberry Pi :)'
> .exit
$ node -v
v6.9.1
```
