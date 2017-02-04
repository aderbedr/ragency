const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/../ui/build'));

app.get('/', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{ "message": "Custom server!"}');
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
