import { getData } from "../utils/getData.js";
import { addNewSighting } from "../utils/addNewSighting.js";
import { sanitizeInput } from "../utils/sanitizeInput.js";


export async function handleGet(req, res, next) {
    try {
        const data = await getData();
        res.status(200).json(data)

    } catch(e) {
        next(e)
    }
}


export async function handlePost(req, res, next) {
    try {
        const sanitizedBody = sanitizeInput(req.body)
        await addNewSighting(sanitizedBody)
        res.status(201).json(sanitizedBody);
    } catch (e) {
        next(e)
    }
}















// import { getData } from "../utils/getData.js";
// import { sendResponse } from "../utils/sendResponse.js";
// import { parseJSONBody } from "../utils/parseJSONBody.js";
// import { addNewSighting } from "../utils/addNewSighting.js";
// import { sanitizeInput } from "../utils/sanitizeInput.js";

// export async function handleGet(res) {
//     const data = await getData();
//     const content = JSON.stringify(data);
//     sendResponse(res, 200, content, 'application/json')
// }

// export async function handlePost(req, res) {

//     try {
//         const parsedBody = await parseJSONBody(req)
//         const sanitizedBody = sanitizeInput(parsedBody);
//         await addNewSighting(sanitizedBody);
//         sendResponse(res, 201, JSON.stringify(sanitizedBody), 'application/json')
//     }
//     catch (e) {
//         sendResponse(res, 400, JSON.stringify({ error: e }), 'application/json')
//     }

// }