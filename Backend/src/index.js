require('dotenv').config();
import http from 'http';
const app = require('./app');

const httpServer = http.createServer(app);
httpServer.listen(8080);