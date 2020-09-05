const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./middleware/logger');

const projectRouter = require('./routers/projectRouter');
const actionRouter = require('./routers/actionRouter');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

server.get('/', (req, res) => {
    res.send(`
    <h2>Welcome to API Sprint Challenge</h2>`);
});

// function logger() {
//     return (req, res, next) => {
//         console.log(
//             `[${new Date().toISOString()}]
//             ${req.method}
//             sent to ${req.url}
//             from ${req.ip}`);
//         next();
//     };
// };

module.exports = server;
