# Switch magnético

## Diagrama
![Switch magnético](reed.png)

## Código

Ver componente [Switch](http://johnny-five.io/api/switch/)

```js
let reed = five.Switch(8);

reed.on('close', () => {
  console.log('Switch cerrado');
});

reed.on('open', () => {
  console.log('Switch abierto');
});

console.log(`Estado inicial: ${reed.isClosed ? 'cerrado' : 'abierto'}`);
```

## Ejecutar

```bash
$ node reed.js
```
