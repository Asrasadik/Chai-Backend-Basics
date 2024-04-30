import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
	res.send('Hi Welcome');
});

app.get('/jokes', (req, res) => {
	const jokes = [
		{
			id: 1,
			title: 'joke 1',
			content: 'This is Joke 1',
		},
		{
			id: 2,
			title: 'joke 2',
			content: 'This is Joke 2',
		},
		{
			id: 3,
			title: 'joke 3',
			content: 'This is Joke 3',
		},
		{
			id: 4,
			title: 'joke 4',
			content: 'This is Joke 4',
		},
	];
	res.send(jokes);
});

app.listen(port, () => {
	console.log(`listening at port ${port}`);
});
