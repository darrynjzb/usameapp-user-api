# usameapp-user-api

Service description

## Installation of dependencies

```sh
npm install
```

### Context environment

The context has the general information about the system,  general configuration and  the order of the middlewares which will be called at the begging.

These file have to be created at

```sh
/context/definitions/
```

The dafault is **default.js**. The name of the file is handled by the ENV called **NODE_ENV_CONTEXT**

```sh
NODE_ENV_CONTEXT=default
```

### Environments

Normally exists 4. local, development, qa and production. These are set by the ENV called **NODE_ENV**

```sh
NODE_ENV=local
```

The specfic configurations are in **app/config**.

## To run  local

To run the service locally, the following  command has to be run in mode **watch** (reload the service for each change)

```sh
npm run  local-default-w
```

## Run migrations sequelize

To run migrations **app/db/migrations**

```sh
NODE_ENV=local npx sequelize-cli db:migrate
```

## Swagger

There is an endpoint to see the swagger file

run the service and go to:

[http://localhost:3053/api-docs/v1.html](http://localhost:3053/api-docs/v1.html)

## Postman collection

The is a postman collection to test the endpoints locally. The collection is in **postman-collection**

## Unit testing

to run the tests with **watch**

```sh
npm run unit-test-w
```

## Coverage

To see the current coverage

```sh
npm run coverage
```

To see more details on the console

```sh
npm run coverage-table
```

To see if the all type of coverages are ok (over 80%)

```sh
npm run coverage-check
```

## Linter

To run eslint with **watch**

```sh
npm run eslint-w
```

if you want eslint to fix some errores (**not** all the errors can be fixed)

```sh
npm run eslint-fix
```
