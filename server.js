const express = require('express');
const path = require('path');
const app = express();


app.use(express.json()); //body parser


const PORT = process.env.PORT || 5000;

const routes = require('./routes')

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    console.log(__dirname)
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

console.log(__dirname)
app.use('/api',routes)

app.listen(PORT, () => {
    console.log(`server listening on port: ${PORT}`);
})