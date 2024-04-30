require('dotenv').config();
const express = require('express');
//import express from "express"
const app = express();
const port = 3000;
app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
	res.send('Hi Asra');
});

app.get('/login', (req, res) => {
	res.send('<h1>Login Page</h1>');
});

app.get('/githubA', (req, res) => {
	const userData = JSON.parse(process.env.USER_JSON);
	res.json(userData);
});

app.listen(process.env.PORT, () => {
	console.log(`Example app listening on port ${process.env.PORT}`);
});
