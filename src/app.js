const express = require('express');

const app = express();

app.use('/res', (req, res)=> {
    res.send('Hello from the server');
})

app.listen(8888, ()=> {
    console.log('server started on port 8888 ...');
})