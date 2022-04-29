import { Database, PostgresConnector } from 'https://deno.land/x/denodb@v1.0.35/mod.ts';
import { config } from 'https://deno.land/x/dotenv@v2.0.0/mod.ts';
import Character from './models/Character.ts';
import User from './models/User.ts'

const connection = new PostgresConnector({
    host: config().PG_HOST,
    username: config().PG_USER,
    password: config().PG_PW,
    database: config().PG_DB,
});

const DB = new Database(connection);
DB.link([Character,User])
export default DB;