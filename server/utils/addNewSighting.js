import { randomUUID } from "node:crypto";
import { connectDB } from "../db/connnectDB.js";





export async function addNewSighting(newSighting) {

        //db connection
        const db = await connectDB();
        //create a new data object with new ghostStory with uuid
        const newSightingwithId = { uuid: randomUUID(), ...newSighting }
        //select the collection
        const ghostStories = db.collection('ghostStories');
        //adding new ghostStory data to the collection.
        await ghostStories.insertOne(newSightingwithId);


}