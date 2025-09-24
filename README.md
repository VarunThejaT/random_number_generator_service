A simple nodejs service to serve an API called "getrandomnumber" that generates a random integer between 1 and 1000

## How to run the service

1. Install dependencies: `npm install`
2. Start the service: `npm start`

This starts the service at ports 9876 as defined in index.js

## API Usage

Once the service is running, you can access the API using `curl`:

```bash
curl http://localhost:9876/getrandomnumber
```
