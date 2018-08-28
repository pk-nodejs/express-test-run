# express-test-run
Express Test run - Get Response

node server.js

## Getting started

1. Clone repo
2. Install dependencies

```sh
$ npm install
```

3. Start Server

```sh
$ npm start
```

4. Exposed APIs are

```
GET
http://localhost:8080/getResponse
```

```sh
POST
body:
{
  id: 1,
  value: 'post'
}

http://localhost:8080/postResponse
```