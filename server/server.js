import express from 'express';
import apiRouter from './routers/api.js';
import { errorHandler } from './middleware/errorHandler.js';
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 8000

app.use(express.json())

app.use(cors())

app.use('/api', apiRouter)

app.use(errorHandler)

app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`)
})











// import http from 'node:http';
// import { serveStatic } from './utils/serveStatic.js';
// import { handleGet, handlePost } from './handlers/routeHandler.js';

// const __dirname = import.meta.dirname;

// const server = http.createServer(async (req, res) => {

//         if (req.url === '/api') {
//                 if (req.method === 'GET') {
//                         return await handleGet(res)
//                 }
//                 else if(req.method === 'POST') {
//                         handlePost(req,res)
//                 }
//         }
//         else if (!req.url.startsWith('/api')) {
//                 await serveStatic(req, res, __dirname);
//         }

// })


// server.listen(8000, () => console.log(`server running on port 8000`));