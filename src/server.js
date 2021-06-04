const express = require('express');
const {urlencoded, json} = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(urlencoded({extended: false}));
app.use(json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => res.send('HELLO'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

app.listen(3000, () => console.log('App listening on port 3000!'));
