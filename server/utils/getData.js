import { connectDB } from '../db/connnectDB.js';


export async function getData() {

        const db = await connectDB();
        const data = db.collection("ghostStories").find().toArray()
        return data;
}