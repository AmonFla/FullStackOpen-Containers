# FullStackOpen-Containers
Exercises from the Containers section of the course https://fullstackopen.com


## Usefull Links

* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)
* [Best Practices](https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/)
* [DockerHub](https://hub.docker.com/)
* [BusyBox](https://www.busybox.net/)
* Implmentaciones de reverse proxy: Traefik, Caddy, Nginx, and Apache  

## Docker

### Commands

* script .... exit -> Record the console
* docker run -it image bash -> start the container and access run a command
* docker run -p 3123:3000 image -> start the container and redirect host port 3123 to docker port 3000
* docker start container -> I start a container, -i gives me interactive access
* docker kill container -> kill a container
* docker commit container new_name -> create a new image
* docker container cp ./index.js <container>:/usr/src/app/index.js -> copy a local file to the container
* docker build --t image_name . -> build an image with what is in the current directory. Using the Dockerfile
* docker exec -it container bash -> access the bash of a running container


### Dockerfile
File content

* FROM image -> starting image
* WORKDIR path -> working folder
* COPY org dest -> file copy order
* RUN command -> commands to run during build
* ENV variables -> I add environment variables
* USER user -> with which user to execute
* CMD command -> command to execute after starting the container
