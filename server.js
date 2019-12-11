var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist/ProDex-Frontend/'));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.post('/login', (req,res) => {

  console.log(req.body);
  res.end("Obtained");
});
