import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'
import { errorHandler as bodyErrorHandler } from 'bodymen'
import cors from 'cors'

import routes from './api'
import mongoose from './utils/mongoose'
import { errorHandler } from './utils/handlers'
import configs from '../config'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))
app.use(methodOverride())
app.use(bodyErrorHandler())
app.use(cors('*'))
app.use(routes)

console.log(errorHandler)
app.use(errorHandler)

mongoose.connect(configs.mongo.uri)

/* RUNNING */
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Up and running on port ${PORT}`))
