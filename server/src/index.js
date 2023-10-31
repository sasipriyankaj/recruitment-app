const app = require('./app');

const HOST = process.env.HOST || 'http://0.0.0.0';
const PORT = process.env.PORT || '3000';
app.listen(HOST,PORT);
console.log(`Running on ${HOST}:${PORT}`);
