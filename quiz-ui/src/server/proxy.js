import httpProxy from 'http-proxy';
import { API_HOST, API_PORT } from '../config';

export function configureProxy(app, server){
  const targetUrl = `http://${API_HOST}:${API_PORT}`;

  const proxy = httpProxy.createProxyServer({
    target: targetUrl,
    ws: true
  });

  app.use('/api', (req, res) => {
    proxy.web(req, res, {target: targetUrl});
  });

  app.use('/ws', (req, res) => {
    proxy.web(req, res, {target: targetUrl + '/ws'});
  });

  server.on('upgrade', (req, socket, head) => {
    proxy.ws(req, socket, head);
  });

  proxy.on('error', (error, req, res) => {
    let json;
    if (error.code !== 'ECONNRESET') {
      console.error('proxy error', error);
    }
    //if (!res.headersSent) {
    //  res.writeHead(500, {'content-type': 'application/json'});
    //}

    json = {error: 'proxy_error', reason: error.message};
    res.end(JSON.stringify(json));
  });
}
