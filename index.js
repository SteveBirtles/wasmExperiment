const express = require('express')
const app = express()

app.use('/client',
    (req, res, next) => {
        console.log("Serving static content: " + req.path);
        next();
    },
    express.static('client')
);


const port = 8081;

app.listen(port, function(){
  console.log('Server is running, port ', port);
});


