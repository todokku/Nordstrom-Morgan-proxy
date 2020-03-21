const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

const fetch = (req, res, url) => {
  axios
    .get(url)
    .then(({ data }) => res.send(data))
    .catch(err => console.log(err))
}

app.use(morgan('dev'));
app.use(express.static(path.resolve(__dirname, '../client/')));

app.get('/navbar/navs', (req, res) => fetch(req, res, 'https://navigation-bar.herokuapp.com/navbar/navs'));
app.get('/navbar/search/:query', (req, res) => fetch(req, res, `https://navigation-bar.herokuapp.com/navbar/search/${req.params.query}`));
app.get('/productDescription/allDoc', (req, res) => fetch(req, res, 'https://product-description.herokuapp.com/productDescription/allDoc'));
app.get('/productDescription/findOneRandom', (req, res) => fetch(req, res, 'https://product-description.herokuapp.com/productDescription/findOneRandom'));
app.get('/productDescription/recommendation', (req, res) => fetch(req, res, 'https://product-description.herokuapp.com/productDescription/recommendation'));
// app.get('/morelooks/api/purses', (req, res) => fetch(req, res, 'http://localhost:3003/morelooks/api/purses'));
// app.get('/morelooks/api/shoes', (req, res) => fetch(req, res, 'http://localhost:3003/morelooks/api/shoes'));
// app.get('/morelooks/api/earrings', (req, res) => fetch(req, res, 'http://localhost:3003/morelooks/api/earrings'));
// app.get('/morelooks/api/bracelets', (req, res) => fetch(req, res, 'http://localhost:3003/morelooks/api/bracelets'));
// app.get('/morelooks/api/shirts', (req, res) => fetch(req, res, 'http://localhost:3003/morelooks/api/shirts'));
app.get('/api/reviews', (req, res) => fetch(req, res, 'https://nordstrom-ux-reviews.herokuapp.com/api/reviews'));
app.delete('/api/reviews', (req, res) => {
  axios
    .delete('https://nordstrom-ux-reviews.herokuapp.com/api/reviews')
    .then(() => res.send())
    .catch(err => console.log(err))
});
app.get('/api/reviews/all', (req, res) => fetch(req, res, 'https://nordstrom-ux-reviews.herokuapp.com/api/reviews/all'));

app.listen(port, () => console.log(`Nordstrom UX Clone server is listening on port ${port}`));