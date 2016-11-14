# Sensor de temperatura

## Diagrama

![Sensor de temperatura](lm35.png)


## Código

Ver componente [Thermometer](http://johnny-five.io/api/thermometer/)

```js
let thermometer = new five.Thermometer({
  controller: 'LM35',
  pin: 'A0',
  freq: 1000
});

thermometer.on('data', () => {
  console.log(`Temperatura: ${thermometer.celsius}°C`);
});
```

## Ejecutar

```bash
$ node thermometer.js
```
