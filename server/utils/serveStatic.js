import fs from 'node:fs/promises'
import path from 'node:path'
import { sendResponse } from './sendResponse.js';

export async function serveStatic(req, res, baseDir) {

    const MIME_TYPES = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.json': 'application/json'
    }

    const distDir = path.join(baseDir, '..', 'dist');

    const requestedPath = req.url === '/' ? '/index.html' : req.url;


    const filePath = path.join(distDir, requestedPath)
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'text/plain'

    try {
        const content = await fs.readFile(filePath);
        sendResponse(res, 200, content, contentType)
    } catch (e) {
        !e.code === 'ENOENT' && console.log(e.code)
        // real file request → real 404
        if (path.extname(requestedPath)) {
            sendResponse(res, 404, 'Not found', 'text/plain')
            return
        }

        // SPA fallback → let React Router decide
        const indexHtml = await fs.readFile(path.join(distDir, 'index.html'))
        sendResponse(res, 200, indexHtml, 'text/html')
    }
}