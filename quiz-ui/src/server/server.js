import path from 'path';
import Express from 'express';
import http from 'http';
import { configureProxy } from './proxy';
import { SERVER_HOST, SERVER_PORT } from '../config'
import { DEVELOPMENT } from '../constants'

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../../webpack.config.dev';
import render from './render';

const app = Express();
const server = new http.Server(app);

configureProxy(app, server);

if (DEVELOPMENT){
  // Use this middleware to set up hot module reloading via webpack.
  const compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}
else{
  app.use('/static', Express.static(path.join(__dirname, '..', '..', 'static')));
}

app.use(render)

server.listen(SERVER_PORT, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎  Listening on port ${SERVER_PORT}. Open up http://${SERVER_HOST}:${SERVER_PORT}/ in your browser.`)
  }
})
