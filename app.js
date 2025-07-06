const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req,res) => {
    res.send('Hello from Dockerized Node.js App!');
});

app.get('/about',(req,res) => {
    res.send('This is the about page.');

});

app.listen(PORT, () => {
    console.log(`Server is running on http://locolhost:${PORT}`);
});