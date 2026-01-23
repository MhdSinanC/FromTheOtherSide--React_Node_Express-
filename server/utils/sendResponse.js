export function sendResponse(res, statusCode, payload, contentType) {
    res.setHeader('Content-type', contentType)
    res.statusCode = statusCode;
    res.end(payload)
}