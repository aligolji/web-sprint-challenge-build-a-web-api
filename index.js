require('dotenv').config();

const server = require ('./server');

const port = process.env.PORT;

// const port = 5000
server.listen(port, () => console.log(`Server listening on http://localhost:${port}.`));
