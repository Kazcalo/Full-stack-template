const express = require('express')
const app = express()
const cors = require('cors') 
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()
const PORT = 8000

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection
    // console.log(process.env)
    MongoClient.connect(dbConnectionString)
        .then(client => {
            console.log('Connected to database')
            db = client.db(dbName)
            collection = db.collection('movies')
        })

        //------ Middleware ------
    app.set('view engine', 'ejs')
    app.use(express.static('public'))
    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(cors())

    app.get('/', async (req , res) =>{
        try{
            res.render('index.ejs')
        } catch (error) {
            res.status(500).send({message: error.message})
        }
    })


    // PORT = 8000
    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running`)
    })
