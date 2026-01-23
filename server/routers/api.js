import express from 'express'
import { handleGet, handlePost } from '../controllers/apiControllers.js'

const apiRouter = express.Router()


apiRouter.get('/', handleGet)

apiRouter.post('/', handlePost)


export default apiRouter;