const app = require('./app');

const HOST = process.env.HOST || 'http://0.0.0.0:8080';

app.listen(HOST);
console.log(`Running on ${HOST}`);
