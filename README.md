# kalacheva-oxem-test

## Project build with docker

Please change username on yours.

```
docker build -t username/kalacheva-oxem-test .
```

### Run image on http://localhost:8080/

```
docker run -it -p 8080:80 --rm --name kalacheva-oxem-test-1 username/kalacheva-oxem-test
```

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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
