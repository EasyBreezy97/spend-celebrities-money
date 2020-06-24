const express = require('express');
const app = express();

app.use(express.json()); //body parser


const PORT = 5000 || process.env.PORT;

const routes = require('./routes')


app.use('/api',routes)

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
})