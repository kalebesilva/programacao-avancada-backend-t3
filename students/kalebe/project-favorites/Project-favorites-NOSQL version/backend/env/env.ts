import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export const schema = {
    DB_CONN_STRING: String,
    DB_NAME: String,
    FAVORITE_COLLECTION_NAME: String,
    PORT: Number
};

export let env: Env;


export function loadEnv(): void {
    env = load(schema);
}