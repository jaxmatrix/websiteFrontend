var express = require('express');
var app = express();
var PORT = process.env.PORT || 5000

app.use(express.static(__dirname + '/dist/ProDex-Frontend/'));
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
