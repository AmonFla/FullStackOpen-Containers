# FullStackOpen-Containers
Ejercicios de la sección Containers del curso de https://fullstackopen.com


## Usefull Links

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Best Practices](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
* [DockerHub](https://hub.docker.com/)

## Docker

### Commands

* script .... exit -> Grabar al consola
* docker run -it image bash -> inicio el contenedor y accedo ejecuto un comando
* docker run -p 3123:3000 image -> inicia el contendor y redirecciona el puerto 3123 del host al 3000 del docker
* docker start container -> arranco un contenedor, -i me da acceso interactivo
* docker kill container -> mato un contendor 
* docker commit contanier new_name -> crea una nueva imagen
* docker container cp ./index.js <container>:/usr/src/app/index.js -> copio un archivo local al contenedor
* docker build --t imagen_name . -> construye una imagen con lo que esta en el directorio actual. Usando el archivo Dockerfile


### Dockerfile
Contenido del archivo

* FROM imagen -> imagen de partida
* WORKDIR ruta -> carpeta de trabajo
* COPY org dest -> orden de copiado de archivos
* RUN comando -> comandos a ejecutar durante el build
* ENV variables -> agrego variables de entorno
* USER usuario -> con que usuario ejecutar
* CMD comando -> comando a ejecutar luego de arrancar el contenedor