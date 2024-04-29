require('dotenv').config();
const express = require('express');
//import express from "express"
const app = express();
const port = 3000;
const githubData = {
	login: 'Asrasadik',
	id: 47492644,
	node_id: 'MDQ6VXNlcjQ3NDkyNjQ0',
	avatar_url: 'https://avatars.githubusercontent.com/u/47492644?v=4',
	gravatar_id: '',
	url: 'https://api.github.com/users/Asrasadik',
	html_url: 'https://github.com/Asrasadik',
	followers_url: 'https://api.github.com/users/Asrasadik/followers',
	following_url:
		'https://api.github.com/users/Asrasadik/following{/other_user}',
	gists_url: 'https://api.github.com/users/Asrasadik/gists{/gist_id}',
	starred_url: 'https://api.github.com/users/Asrasadik/starred{/owner}{/repo}',
	subscriptions_url: 'https://api.github.com/users/Asrasadik/subscriptions',
	organizations_url: 'https://api.github.com/users/Asrasadik/orgs',
	repos_url: 'https://api.github.com/users/Asrasadik/repos',
	events_url: 'https://api.github.com/users/Asrasadik/events{/privacy}',
	received_events_url: 'https://api.github.com/users/Asrasadik/received_events',
	type: 'User',
	site_admin: false,
	name: 'Asra',
	company: null,
	blog: 'https://codepen.io/asrasadik/pens/',
	location: null,
	email: null,
	hireable: null,
	bio: 'Learning is a continuous process\r\n',
	twitter_username: null,
	public_repos: 21,
	public_gists: 0,
	followers: 6,
	following: 7,
	created_at: '2019-02-10T06:31:44Z',
	updated_at: '2024-04-29T11:51:33Z',
};
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
