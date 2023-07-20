import * as mongoDB from "mongodb";
import { env } from "../env/env";

export const collections: { favorite?: mongoDB.Collection } = {};

export async function connectToDatabase() {

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(env.DB_CONN_STRING);
  const db: mongoDB.Db = client.db(env.DB_NAME);


  const favoriteCollection: mongoDB.Collection = db.collection(env.FAVORITE_COLLECTION_NAME);

  collections.favorite = favoriteCollection;

  console.log(
    `Successfully connected to database: ${db.databaseName} and collection: ${favoriteCollection.collectionName}`
  );
}
