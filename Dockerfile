FROM node:current
WORKDIR /app
COPY . .
RUN npm install
RUN npm install -g serve
RUN npm run build
CMD ["serve", "-s", "build"]