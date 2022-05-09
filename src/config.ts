import dotenv from 'dotenv';

dotenv.config();

export const appHost = process.env.HOST || '0.0.0.0';
export const appPort = process.env.PORT || 3000;
