var express = require('express');
var app = express();

var users = [{
  'user': 'a'
}, {
  'user': 'b'
}];

app.get('/users', (req, res) => res.json(users));

app.use(express.static('public'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
