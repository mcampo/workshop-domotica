# Acceso desde la web

Ahora que tenemos un hub que puede comunicarse con diferentes dispositivos, vamos a implementar una web para poder acceder a la información recolectada por el hub.

## Aplicación web

Vamos a hacer una aplicación web simple usando [Express](http://expressjs.com/) y [socket.io](http://socket.io/).

Nuestra aplicación web vá a conectarse a través de socket.io con dos tipos de clientes:
* El hub: envía los eventos de los dispositivos a la aplicación web
* El frontend de la aplicación (corriendo en un browser): recibe eventos de la aplicación web y actualiza la vista

Por eso vamos a crear 2 [namespaces](http://socket.io/docs/rooms-and-namespaces/) distintos, uno para cada tipo de cliente. Esto nos permite diferenciar facilmente la fuente los eventos recibidos y emitir eventos a los clientes correctos.

```js
var hubs = io.of('/hub');
var frontends = io.of('/frontend');
```

Luego, por cada hub que se conecte (nosotros tenemos 1 pero podríamos tener varios distribuidos en la casa), vamos a escuchar los eventos que nos interesan y hacer lo que necesitemos con ellos.
En este caso, sólo vamos a escuchar el evento ``temperature`` y simplemente vamos a reenviarlo a los frontends conectados.

```js
hubs.on('connection', function (socket) {
  socket.on('temperature', function (data) {
    console.log('Received event [temperature]', data);
    frontends.emit('temperature', data);
  });
});
```

En el frontend HTML vamos a escuchar el evento ``temperature`` que nos envía el server en el namespace ``frontend`` y vamos a actualizar el DOM con la nueva información

```js
var socket = io('/frontend');
socket.on('temperature', function (data) {
  temperatureElement.innerHTML = data.temperature.toFixed(1);
});
```

## Modificaciones al hub

Lo único que tenemos que agregarle al hub que implementamos en el ejercicio anterior es la conexión a través de socket.io con la nueva aplicación web

```js
var io = ioClient('http://192.168.1.xxx:3000/hub');
```
**Nota** Para saber la dirección IP de tu laptop podés ejecutar ``ifconfig`` en Mac/Linux o ``ipconfig`` en Windows

Y emitimos cada evento que escuchamos hacia la apliación web
```js
io.emit(eventName, eventData);
```

## Ejecutar

### Ejecutar aplicación web
Ejecutar la aplicación web en tu laptop
```bash
$ cd web
$ node app.js
```

### Ejecutar hub
Copiar el código del hub al Raspberry Pi y ejecutarlo
```bash
$ scp -r ./hub pi@192.168.1.zzz:/home/pi/workshop-domotica/ejercicios/08_acceso_web/
$ ssh pi@192.168.1.zzz
$ cd workshop-domotica/ejercicios/08_acceso_web/hub
$ node hub.js
```
