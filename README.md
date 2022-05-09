# NFT Metadata API Boilerplate

## Summary
This project is a boilerplate for NFT metadata.

## Tech Stack
- TypeScript
- Hapi
- Knex
- Postgres

## Node Version & Package Manager
- The project runs on Node.js >= 14
- The project uses `yarn` as package manager.

## Getting Started

### 1. Install dependencies
```bash
yarn install
```

### 2. Setup PostgreSQL & Create database
For development, `nft-metadata-dev` is the default db name.

### 3. Run migrations
```bash
knex migrate:latest
```

### 4. Run seed(Optional)
```bash
knex seed:run
```

### 4. Run dev server
```bash
yarn dev
```
The server will be running in `localhost:3000` by default.

## API Endpoints

```
GET /metadata          : Get a list of metadata
POST /metadata         : Create a metadata
GET /metadata/{id}     : Get metadata by id
PATCH /metadata/{id}   : Update metadata
DELETE /metadata/{id}  : Delete metadata by id
```
