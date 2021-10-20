# React App Template

Quick start template for react apps, with Dockerfile
## Usage
```bash
# node module setup
npm install
```
### Start
```
npm start
```
### Build & Run
> via Docker
```
docker build -t <app-tag> .
docker run -p <local port>:<docker container port> -d <app-tag>
```

> via Node(using serve)
```
npm run build
# install serve if you haven't (other works too if you prefer)
npm install -g serve
serve -s build
```
