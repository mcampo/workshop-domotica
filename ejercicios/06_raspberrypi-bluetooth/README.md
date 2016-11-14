# Conexión bluetooth entre Raspberry Pi y HC-06

## Conexión con el módulo HC-06

### Instalar dependencias

El paquete ``bluetooth`` instala las herramientas de soporte para Bluetooth.

```bash
$ sudo apt-get install bluetooth
```
### Vincular el módulo HC-06

Utilizar ``bluetoothctl`` para descubrir y vincular el módulo HC-06

```bash
$ sudo bluetoothctl
[NEW] Controller 00:1B:10:00:2A:EC raspberrypi-01 [default]
[bluetooth]#
```

Activar el modo descubrimiento
```bash
[bluetooth]# scan on
Discovery started
[CHG] Controller 00:1B:10:00:2A:EC Discovering: yes
[NEW] Device 30:14:11:21:00:90 30-14-11-21-00-90
[CHG] Device 30:14:11:21:00:90 LegacyPairing: no
[CHG] Device 30:14:11:21:00:90 Name: NODEBOT-01
[CHG] Device 30:14:11:21:00:90 Alias: NODEBOT-01
[CHG] Device 30:14:11:21:00:90 LegacyPairing: yes
```

Verificar que el módulo HC-06 fué detectado
```bash
[bluetooth]# devices
Device 30:14:11:21:00:90 NODEBOT-01
```

Activar el ``agent`` (esto es importante para poder autenticarnos usando un PIN)
```bash
[bluetooth]# agent on
Agent registered
```

Vincular el módulo HC-06 (después de escribir ``pair`` se puede autocompletar la dirección MAC presionando ``TAB``). Cuando nos pida el PIN code escribimos ``0000``
```bash
[bluetooth]# pair 30:14:11:21:00:90
Attempting to pair with 30:14:11:21:00:90
[CHG] Device 30:14:11:21:00:90 Connected: yes
Request PIN code
[agent] Enter PIN code: 0000
[CHG] Device 30:14:11:21:00:90 UUIDs:
	00001101-0000-1000-8000-00805f9b34fb
[CHG] Device 30:14:11:21:00:90 Paired: yes
Pairing successful
[CHG] Device 30:14:11:21:00:90 Connected: no
```

Por último salir de la consola de bluetoothctl
```bash
[bluetooth]# exit
Agent unregistered
[DEL] Controller 00:1B:10:00:2A:EC raspberrypi-01 [default]
```

Con esto dejamos configurado el vínculo al módulo HC-06. Sólo tendremos que volver a hacerlo cuando querramos asociar nuevos dispositivos. La información queda almacenada en ``/var/lib/bluetooth/``, para más información ver http://git.kernel.org/cgit/bluetooth/bluez.git/tree/doc/settings-storage.txt

### Configurar el puerto serie

Vamos a configurar un puerto serie emulado a través de [RFCOMM](https://en.wikipedia.org/wiki/List_of_Bluetooth_protocols#Radio_frequency_communication_.28RFCOMM.29).

Usamos el comando ``rfcomm`` para asociar el descriptor ``/dev/rfcomm0`` a la dirección MAC de nuestro módulo.

```bash
$ sudo rfcomm bind rfcomm0 30:14:11:21:00:90 1
$ ls -l /dev/rfcomm0
crw-rw---- 1 root dialout 216, 0 Jan 24 12:04 /dev/rfcomm0
```
Ahora cada vez que accedamos a ``/dev/rfcomm0`` se creará una conexión con nuestro módulo HC-06. Para verificarlo podemos hacer:

```bash
$ cat /dev/rfcomm0
```
Y vemos como la luz del módulo HC-06 deja de parpadear y queda encendida. Esto significa que hay una conexión establecida. Presionar CTRL-C para terminar el comando.

Sin embargo, cuando reiniciemos nuestro Raspberry Pi esta configuración se perderá. Para no tener que hacer esto manualmente cada vez, agregar el comando ``rfcomm bind rfcomm0 30:14:11:21:00:90 1`` al final del archivo ``/etc/rc.local`` (antes de ``exit 0``)

```bash
$ sudo vim /etc/rc.local
```
