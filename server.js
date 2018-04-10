require('dotenv').config();
import express from 'express';
import path from 'path';
import favicon from 'serve-favicon';

const app = express();

app.set('port', process.env.PORT || 5000);
app.use(favicon(path.join(__dirname, 'favicon.ico')));
app.use(express.static('./dist'));
app.use('/dist', express.static(__dirname + 'dist'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.listen(app.get('port'), () =>{
  console.info(`Listening at http://localhost:${app.get('port')}`);
});
