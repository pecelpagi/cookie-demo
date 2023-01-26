const express = require('express');

const app = express();
const PORT = 3300;

app.get('/set-cookie', (req, res) => {
    res.cookie('SET_COOKIE_FROM_SERVER', 'ini_adalah_data_cookie_dari_server', {
        secure: true,
        httpOnly: true,
    });

    res.json({
        status: true,
        message: 'OK'
    })
});

app.get('/', (req, res) => {
    res.json({
        status: true,
        message: req.cookies
    })
});

app.listen(PORT, () => {
    console.log('App listening on port %s', PORT);
})

module.exports = app