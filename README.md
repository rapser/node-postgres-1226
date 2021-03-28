# node-postgres-1226

Este proyecto esta hecho con las siguientes tecnologias.

- Nodejs
- Express
- PostgreSQL
- babel
- morgan
- pg

Es necesario tener instalado previamente la base de datos PostgreSQL en tu PC o Mac.

## Inicio

Inicializamos el proyecto e instalamos las dependencias de la siguiente forma. Las dependencias se instalan en el package.json

```sh
$ npm init --yes
$ npm install express pg pg-hstore sequelize morgan @babel/polyfill
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
$ npm install nodemon -D
$ npm install @babel/node -D
```

Cuando clonamos nuestro proyecto en otra ubicación o equipo tenemos que ejecutar lo siguiente. Esto descargará todas las dependencias que se agregaron inicialmente.

```sh
$ npm install
```

Al momento de desplegar nuestra aplicación en la nube aplicamos las siguientes lineas de comando.

```sh
$ npm run build
$ npm start
```
## Desarrollo

Para inicar el proyecto realizamos lo siguiente. Recordar que para poder utilizar este código es necesario configurarlo manualmente en nuestro package.json.

```sh
$ npm run dev
```
