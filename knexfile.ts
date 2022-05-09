import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config();

const knexConfig: Record<string, Knex.Config> = {
  development: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL || {
      host: 'localhost',
      user: 'postgres',
      password: 'postgres',
      database: 'nft-metadata-dev'
    },
    migrations: {
      directory: __dirname + '/src/database/migrations'
    },
    seeds: {
      directory: __dirname + '/src/database/seeds'
    }
  }
};

export default knexConfig;
