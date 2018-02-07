import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import methodOverride from 'method-override'

const PORT = process.env.PORT || 3000

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({'extended': 'true'}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))
app.use(methodOverride())

app.listen(PORT, () => console.log(`Up and running on port ${PORTA}`))
