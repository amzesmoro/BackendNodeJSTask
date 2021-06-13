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
    -- logs_hit_omdbapi.csv
    -- omdb-api.postman_collection.json
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


Didalam root direktory terdapat file *logs_hit_omdbapi.csv* dan *omdb-api.postman_collection.json*.
* logs_hit_omdbapi.csv adalah database yang saya export dari PostgreSQL dalam bentuk .csv. Attribut/Properti yang saya gunakan adalah **id,url,api_endpoint,parameters,created_at**. Untuk lebih jelas dapat dilihat pada file tersebut.
* omdb-api.postman_collection.json adalah *collection endpoint* collection yang saya gunakan di Postman untuk menguji endpoint yang saya buat. Untuk lebih jelas dapat dilihat dan di uji menggunakan Postman.