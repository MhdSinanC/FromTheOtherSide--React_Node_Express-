import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { getData } from "./getData.js";
import path from 'node:path'
import { randomUUID } from "node:crypto";


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const pathJSON = path.join(__dirname, '..', 'data', 'data.json');


export async function addNewSighting(newSighting) {


        const sightings = await getData();
        const newSightingwithId = { uuid: randomUUID(), ...newSighting }
        sightings.push(newSightingwithId);
        const data = JSON.stringify(sightings, null, 2);

        await fs.writeFile(pathJSON, data, 'utf-8')


}