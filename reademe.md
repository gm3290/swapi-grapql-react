# swapi + Create React App + GraphQl + Docker Compose

A project that runs a swapi graphql server and a create-react-app app via two separate containers, using Docker Compose.

Used libraries

- [SWAPI GraphQL Wrapper](https://github.com/graphql/swapi-graphql) 
- [Apollo Client](https://www.apollographql.com/docs/)
- [Create React APP](https://reactjs.org/docs/create-a-new-react-app.html)
- [styled components](https://styled-components.com/)

## Development

```
docker-compose up
```

For development, the `swapi/` and `client/` directories have their own docker containers, which are configured via the `docker-compose.yml` file.

The client server is spun up at `localhost:3000` and it proxies internally to the server using the linked name as `swapi:8080`.

The local directories are mounted into the containers, so changes will reflect immediately. However, changes to package.json will likely need to a rebuild: `docker-compose down && docker-compose build && docker-compose up`.

## Test

Install node modules in the client directory

```
cd client && yarn
```

Run test

```
yarn test
```
