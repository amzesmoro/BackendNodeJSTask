## Solution Number 2

## Configuration
File directory:

```diff
    -- api
    -- config
    -- app.js
    -- nodemon.json
    -- package.json
    -- server.js
```

Example configuration. Add file with name: **nodemon.json** to root directory
```diff
{
    "env":{
        "APP_URL"   : "<YOUR APP URL>", // http://localhost:8001
        "DB_HOST"   : "<YOUR DB HOST>", // localhost ot 127.0.0.1
        "DB_PORT"   : "<YOUR DB PORT>", // 5432
        "DB_NAME"   : "<YOUR DB NAME>", // postgres
        "DB_USER"   : "<YOUR DB USERNAME>", // postgres
        "DB_PWD"    : "<YOUR DB PASSWORD>", // postgres
        "POSTGRESQL_CONNECTION" : "<YOUR CONNECTIONS URL POSTGRESS>" //postgres://postgres:postgres@127.0.0.1:5432/postgres
    }
}
```

### Get Package
```diff
    npm install
```

### Running
```diff
    npm start
```