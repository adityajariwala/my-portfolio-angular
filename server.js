//Install express server
import express, { static } from "express";
import { join } from "path";

const app = express();

// Serve only the static files form the dist directory
app.use(static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);