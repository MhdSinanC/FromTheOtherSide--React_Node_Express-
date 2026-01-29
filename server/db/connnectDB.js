import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017/"

const client = new MongoClient(url);

let db;         //store connection

export async function connectDB() {

    if (!db) {
        //connect the client to the server
        await client.connect()

        db = client.db("From-the-other-side")          //db name
        console.log('successfully connected to MongoDB!')
    }

    return db;
}