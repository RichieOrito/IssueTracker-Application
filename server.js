const express = require('express'); // require is a JS keyword specific to Node.js used to import other specific modulues.


const app = express();
app.use(express.static('static')); // This instantiates the application and then mounts a middleware
// The middleware generator takes the parameter static to indicate that this is the directory where the static files resides.

app.listen(3000, function () {
    console.log('App started on port 3000');
});