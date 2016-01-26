# Workshop de domótica con Node.js, Raspberry Pi y Arduino

En este workshop vamos a construir las bases para una solución de domótica hecha por nosotros mismos.

Vamos a construir un hub central utilizando un Raspberry Pi para controlar con Node.js dispositivos basados en Arduino de forma inalámbrica. También vamos a implementar una interfaz web simple para monitorear y comunicarse con el hub de forma remota.

El objetivo principal es plantear la arquitectura y hacer una implementación simple.
Con esta base cada uno podrá después en sus casas implementar los sensores y actuadores que necesiten, como también mejorar el hub y la interfaz web para agregarles más funcionalidad.

## Prerequisitos

Antes de empezar el taller necesitás tener instalado en tu computadora:

* **Node.js**: Podés descargarlo y seguir las instrucciones desde https://nodejs.org/en/download/, o usar el [package manager](https://nodejs.org/en/download/package-manager/) de tu plataforma.

## Ejercicios

**Nota** En el taller vamos a usar placas Arduino Uno [ya preparadas](firmata.md) para usar Johnny-five.

1. [Johnny-five hello world](ejercicios/01_hello-world)
1. [Sensor de temperatura](ejercicios/02_sensor-temperatura)
1. [Switch magnético](ejercicios/03_switch-magnetico)
1. [Conexión bluetooth con el módulo HC-06](ejercicios/04_conexion-hc-06)
1. [Node en Raspberry Pi](ejercicios/05_node-raspberrypi)
1. [Conexión bluetooth entre Raspberry Pi y HC-06](ejercicios/06_raspberrypi-bluetooth)
1. [Hub de dispositivos](ejercicios/07_hub)
1. [Acceso desde la web](ejercicios/08_acceso_web)
