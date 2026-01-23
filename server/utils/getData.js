import path from 'node:path';
import fs from 'node:fs/promises'
import { fileURLToPath } from 'node:url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, '..', 'data', 'data.json');


export async function getData() {

   
        const data = await fs.readFile(filePath, 'utf-8');
        return JSON.parse(data)

    
}