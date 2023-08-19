import express, {Express, Request, Response, NextFunction} from 'express'
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.ts');

require('./db');

const server: Express = express();

server.locals.name = 'API';

server.use(bodyParser.urlencoded({ extends: true, limit: '50mb'}));
server.use(bodyParser.json({limit: '50mb'}));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

server.use('/', routes);

server.use((err: any, req: Request, res: Response, next:NextFunction) =>{
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
module.exports = server;


