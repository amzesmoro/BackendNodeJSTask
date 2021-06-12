## Solution Number 2

## Configuration
File directory:

```diff
    -- api
    -- config
    -- -- config.js
    -- app.js
    -- package.json
    -- server.js
```

Example configuration. Add file '.js' with name: **config.js** to folder config.
```diff
module.exports = {
    port: <YOUR_POT>, // 8001
    dbConnectionString: '<YOUR CONNECTIONS URL POSTGRES>', // 'postgres://postgres:postgres@127.0.0.1:5432/postgres'
    // OMDB API
    API_URL: '<OMDB URL>' // 'http://www.omdbapi.com/',
    API_KEY: '<<YOUR API KEY>>'
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


### Endpoint

```diff
    -- /search --> ex: /search?s=ragnarok&apikey=<YOUR API KEY>&type=series
    -- /detail --> ex: /detail?i=tt8499594&apikey=<YOUR API KEY>
    -- /get-logs --> ex: /get-logs?page=1
```