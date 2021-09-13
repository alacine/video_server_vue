# video_server_vue

视频网站项目的前端，后端在 [video_server](https://github.com/alacine/video_server)

前端不太会，写比较简陋。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## 在 Docker 中构建
```bash
make build-in-docker
# or
docker build . -t video_server_vue_build -f build.Dockerfile
```

## 本地配合后端 docker-compose 启动
```bash
docker-compose up
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
