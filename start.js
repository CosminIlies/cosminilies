const express = require('express');


const PORT = process.env.PORT;
const app = express();

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/javascript', express.static(__dirname + 'public/javascript'));
app.use('/images', express.static(__dirname + 'public/images'));

app.get('/', (req, res) => {
    res.render(__dirname + '/public/index.ejs');
});
app.get('/aboutme', (req, res) => {
    res.render(__dirname + '/public/AboutMe.ejs');
});
app.get('/mywork', (req, res) => {
    res.render(__dirname + '/public/MyWork.ejs');
});
app.get('/contactme', (req, res) => {
    res.render(__dirname + '/public/ContactMe.ejs');
});





app.listen(PORT);
console.log("Server is up and listening on the port "+ PORT);
