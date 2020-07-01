FROM node:13-alpine
WORKDIR /server/backend
COPY . .
RUN npm install && chmod 777 ./entrypoint.backend.sh
ENTRYPOINT ["sh", "./entrypoint.backend.sh"]