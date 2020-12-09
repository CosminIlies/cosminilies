const express = require('express');


const PORT = 3000;
const app = express();

/*app.get('/', (req, res) => {
    readFile('./index.html', 'utf8', (err, html) =>{

        if(err){
            res.status(500).send('sorry, out of order');
        }

        res.send(html);
    });
});*/


app.use(express.static('site'));
app.use('/site', express.static(__dirname + 'site'));


app.listen(PORT);
console.log("Server is up and listening on the port "+ PORT);
