# Docker commands

## Commands
### Containers
Build a container using a Dockerfile in the current directory.
```bash
docker build -t <desired_container_name> . 
```

Run a container in the background using port mapping.
```bash
docker run -dp 3000:3000 <container_name>
```

List containers
```bash
docker ps # Running only
docker ps -a # All containers
docker ps -s # Disk usage by container
```

Stop a container
```bash
docker stop <container_id>
```

Remove a container
```bash
docker rm <container_id> # Container id is obtained from "docker ps"
```

### Volumes
Persistant storage (db) that wont be removed if the container is stopped.
Create a volume 
```bash
docker volume create <desired_volume_name>
```

Run a container with a volume
```bash
docker run -dp 3000:3000 -v <volume_name>:/etc/<folder_name> <container_name>
```

### Bind mounts
Locations where updates to files can be made without having to rebuild the container. Useful for coding changes locally and having the updates occur in the docker container.
Example from: https://docs.docker.com/get-started/06_bind_mounts/ 
```bash
 docker run -dp 3000:3000 \
     -w /app -v "$(pwd):/app" \
     node:12-alpine \
     sh -c "yarn install && yarn run dev"
```
The ```-v "$(pwd):/app"``` controls the current bind directory.

### Logs
See log processes:
```bash
docker log -f <container_id>
```

### Simple processes
MySQL db
``` bash
# Create mysql instance
docker run -d \
     --network todo-app --network-alias mysql \
     -v todo-mysql-data:/var/lib/mysql \
     -e MYSQL_ROOT_PASSWORD=<db_password> \
     -e MYSQL_DATABASE=<db_name> \
     mysql:5.7

# Check if working and connect to db
docker exec -it <mysql-container-id> mysql -u root -p
```

Networking functions
```bash
docker run -it --network todo-app nicolaka/netshoot
```

