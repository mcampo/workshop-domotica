# Node en Raspberry Pi

## Instalar node

Como estamos corriendo la distribución oficial de linux para Raspberry Pi basada en Debian, Raspbian, podemos instalar node siguiendo las instrucciones detalladas en [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions)

```bash
$ curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
$ sudo apt-get install -y nodejs
$ sudo apt-get install -y build-essential
```

Verificar que node se instaló correctamente:
```bash
$ node
> 'Node en Raspberry Pi :)'
'Node en Raspberry Pi :)'
> .exit
$ node -v
v5.4.1
```
