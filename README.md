# @cogenv/object

-  [Description](#Description)
-  [Installation](#-installation)
-  [Usage](#-usage)
-  [Example](#example)
-  [Typescript](#typescript)

## Description

**cogenv/object** es un plugin para `@cogenv/core` para manejar objetos dentro de las variables de entorno, se creo con la intencion de agregar funciones mas geniales para manejar las variables de entorno, pero si uste quiere algo mas completo, te recomiendo que utilices el paquete `cogenv` que trae todo completo y robusto por ejemplo: el manejo de tipos de datos !, manejador de objetos, y mucho mas ! ; y por supuesto este paquete sera incluida en `cogenv` asique tendra todas las funciones de este incluidas dentro del paquete `cogenv`.

Para poder leer las variables de entorno con `@cogenv/core` es mediante una variable global llamada `cog` que contiene basicamente los igual que `process`, pero `cog.env` obtiene las variables de entorno generados por `@cogenv`.

## 📦 Installation

Para poder utilizar este plugin, primero tendremos que tener instalado `@cogenv/core` y luego instalaremos este paquete (@cogenv/object) !

```bash
npm i --save @cogenv/object
```

## ▶️ Usage

Primeramente y obligatoriamente tendremos que crear un archivo con cualquiera de estos siguientes nombres o podria personalizar mediante la opcion de `path` que requiere la function `Config()` de @cogenv/core; `.cogenv` o `.env` file !

Los siguientes datos utilizaremos como ejemplo !

```bash
# Datos para nuestro ejemplo

APP->name=Application
APP->port=3000

DB->dialect=mysql
DB->localhost=localhost
DB->user=root
DB->password=

# Probemos algo mas complicado

AUTHOR->name->first = Yoni
AUTHOR->name->last = Calsin
AUTHOR->country->name = Peru
AUTHOR->country->code = PE
AUTHOR->socials->github->username = @yoicalsin
AUTHOR->socials->github->link = https://github.com/yoicalsin
AUTHOR->socials->twitter->username = @yoicalsin
AUTHOR->socials->twitter->link = https://github.com/yoicalsin
AUTHOR->socials->instagram->username = @yoicalsin
AUTHOR->socials->instagram->link = https://github.com/yoicalsin

```

Esto retornara asi !

```json
{
   "APP": { "name": "Application", "port": "3000" },
   "DB": {
      "dialect": "mysql",
      "localhost": "localhost",
      "user": "root",
      "password": ""
   },
   "AUTHOR": {
      "name": { "first": "Yoni", "last": "Calsin" },
      "country": { "name": "Peru", "code": "PE" },
      "socials": {
         "github": {
            "username": "@yoicalsin",
            "link": "https://github.com/yoicalsin"
         },
         "twitter": {
            "username": "@yoicalsin",
            "link": "https://github.com/yoicalsin"
         },
         "instagram": {
            "username": "@yoicalsin",
            "link": "https://github.com/yoicalsin"
         }
      }
   }
}
```

## Example

Wooow, esto es genial, cierto ?, bueno ahora te enseñare a como configurar para poder tener el resulta tan genial que tuvimos previamente !

```js
const Cogenv = require('@cogenv/core');
const CogenvObject = require('@cogenv/object').CogenvObject;

// Primero instanciaremos la funcion Config() para obtener las variables de entorno !
Cogenv.Config({
   // Para obtener los tipos de objetos en un param _objects
   objects: true, // Default: false
});

// Ahor solo pasaremos CogenvObject como un plugin !
Cogenv.Use(CogenvObject);
```

## Typescript

Hummm si te preguntas como integrar con typescript, tenemos una solucion para ti !

```ts
// For typescript and ES7+
import { Config, Use } from '@cogenv/core';
import { CogenvObject } from '@cogenv/object';

Config({
   objects: true,
});

Use(CogenvObject);
```

Y ahora podra utilizar mediante el variable `cog` de la siguiente manera !

```ts
const github = cog.env.AUTHOR;

console.log(github);
// It will return
/*
{
   "name": { "first": "Yoni", "last": "Calsin" },
   "country": { "name": "Peru", "code": "PE" },
   "socials": {
      "github": {
         "username": "@yoicalsin",
         "link": "https://github.com/yoicalsin"
      },
      "twitter": {
         "username": "@yoicalsin",
         "link": "https://github.com/yoicalsin"
      },
      "instagram": {
         "username": "@yoicalsin",
         "link": "https://github.com/yoicalsin"
      }
   }
}
*/
```

## ⭐ Support for

`@cogenv/object` is an open source project licensed by [MIT](LICENSE). You can grow thanks to the sponsors and the support of the amazing sponsors. If you want to join them, [contact me here](mailto:helloyonicb@gmail.com).

## 🎩 Stay in touch

-  Author [Yoni Calsin](https://github.com/yoicalsin)
-  Twitter [Yoni Calsin](https://twitter.com/yoicalsin)

## Contributors

Thanks to the wonderful people who collaborate with me !

## 📜 License

`@cogenv/object` under [License MIT.](LICENSE)
