# Webpack starter

La finalidad de este proyecto es tener un template para poder trabajar directamente con la versión 5 de Webpack sin necesidad de realizar configuraciones, pues estas ya estan hechas.

## Requisitos para usar el proyecto

Es necesario contar con [Nodejs](https://nodejs.org/en/) en el equipo, para asegurarse de tener instalado Node se puede ejecutar el siguiente comando en la consola:

```sh
node --version
```

Se recomienda tener instalado [github](https://git-scm.com/downloads), el cuál será necesario en caso de querer clonar el repositorio.

## Instalación del proyecto

Para poder descargar el proyecto puedes hacerlo clonando el repositorio de git:

```sh
git clone https://github.com/AngelCruzL/webpack-starter.git
```

Ó también dando click [aquí](https://github.com/AngelCruzL/webpack-starter-legacy/archive/refs/heads/master.zip)

## Instalación de dependencias

Para poder instalar los modúlos y dependencias necesarias para el correcto funcionamiento del proyecto se debe ejecutar el siguiente comando en el directorio del proyecto:

```sh
npm install
```

## Funcionamiento

El template te permite trabajar con webpack el cuál ejecuta el proyecto desde el protocolo http en el puerto `6060` ejecutando el comando:

```sh
npm start
```

Para poder realizar el build de producción se ejecuta el comando:

```sh
npm run build
```

Este comando creará una carpeta `dist`, la cual contendrá los archivos html, css y js del proyecto.Los archivos css y js serán las versiones minificadas y en caso del archivo js será la versión de ES5, lo que mejora la compatibilidad del código con navegadores antiguos.

También todos los archivos estaticos en el directorio de `assets` serán copiados de manera automatica a la carpeta `dist`.
