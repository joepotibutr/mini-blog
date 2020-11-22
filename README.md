# Mini Blog


The mini blog website using credentials to authorize the author.

  - Full `/blog` CRUD (`get`, `post` ,`put`, `delete`) methods
  - Protected blog actions from unauthorized user

### Tech
* React.js - Frontend SPA
* styled-components - Styling component in React
* axios - HTTP request
* Express.js - node.js server side calling API from The Guardian
* MongoDB Atlas - Hosting online database

### Installation

```bash
$ git clone https://github.com/joepotibutr/mini-blog.git

$ cd mini-blog
```

Change your path in `docker-compose.yml` file

```bash
...
volumes:
       - ./api:/{your path here}/api
       - /{your path here}/api/node_modules
...

volumes:
       - ./client:/{your path here}/client
       - /{your path here}/client/node_modules

```

Change your path in `Dockerfile` in current directory as well as both `client` and `api` folder 

`/Dockerfile`

```bash
COPY --from=ui-build /{your path here}/client/build ./client/build

```

`client/Dockerfile`
```bash
WORKDIR /{your path here}/client
```

`api/Dockerfile`
```bash
WORKDIR /{your path here}/api
```

Run this command below to build & compose docker container.

```sh
$ docker-compose up
```
