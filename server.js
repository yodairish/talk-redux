import express from 'express';
import path from 'path';
import webpack from 'webpack';
import config from './webpack.config';

const APP_PORT = 3000;

const compile = webpack(config);
const app = express();

app.use(require('webpack-dev-middleware')(compile, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compile));

app.use('/static', express.static(path.resolve(__dirname, 'img')));

app.get('*', (req, res) => (
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
));

app.listen(APP_PORT, 'localhost', err => {
  if (err) {
    console.log(err);

    return;
  }

  console.log(`start the server, http://localhost:${APP_PORT}`);
});
