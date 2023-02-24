const express = require('express');

const app = express();
const PORT = 3300;

app.get('/set-cookie', (req, res) => {
    res.cookie('COOKIE_LANGUAGE', 'bahasa_indonesia');

    const expires = new Date();
    expires.setDate(expires.getDate() + 1); // expire dalam 1 hari

    res.cookie('COOKIE_TOKEN', 'abcdefg123456hijkl', {
        secure: true,
        httpOnly: true,
        expires
    });

    res.redirect("/");
});

app.get('/', (req, res) => {
    res.json({
        status: true,
        cookie_data: req.headers.cookie,
    })
});

app.listen(PORT, () => {
    console.log('App listening on port %s', PORT);
});