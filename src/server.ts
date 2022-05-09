import Hapi from '@hapi/hapi';
import hapiPino from 'hapi-pino';

import routes from './routes';
import { appHost, appPort } from './config';

const server: Hapi.Server = Hapi.server({
  port: appPort,
  host: appHost
});

export async function createServer(): Promise<Hapi.Server> {
  // Register Logger
  await server.register({
    plugin: hapiPino,
    options: {
      logEvents:
        process.env.CI === 'true' || process.env.TEST ? false : undefined,
      redact: ['req.headers.authorization']
    }
  });

  // Register routes
  server.route(routes);

  // Initialize
  await server.initialize();

  return server;
}

export async function startServer(
  hapiServer: Hapi.Server
): Promise<Hapi.Server> {
  await hapiServer.start();
  hapiServer.log('info', `Server running on ${hapiServer.info.uri}`);
  return hapiServer;
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});
