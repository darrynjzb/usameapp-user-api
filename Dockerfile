FROM node:10-slim

# Create app directory
WORKDIR /usr/app

COPY ./ .

RUN apt-get update
RUN apt-get install -y curl

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
# COPY . .
ENV NODE_ENV "local"
ENV NODE_CONTEXT_PORT 80
ENV NODE_CONTEXT_NAME 'aristoteles user api'
ENV JWT_KET 'FYGi886rLEYCiGw0DJopCzVT9CkrIkjZ'
ENV JWT_URL 'http://localhost:3006/api-login/gaucho-crypt/service'
ENV JWT_TIMEOUT 7000
ENV BCRYPT_SALT_ROUNDS 10
ENV NODE_CONTEXT_VERSION 'v1'
ENV MONGO_DB_URI 'mongodb://localhost:27017/rellenos-user-service'
ENV MONGO_DB_USER ''
ENV MONGO_DB_PASS ''
ENV MONGO_RECONNECT_TIME 3000

CMD [ "node", "./bin/www.js" ]