const express = require('express')
const app = express()
const cors = require('cors') 
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'sample_mflix',
    collection

    MongoClient.connect(dbConnectionString)
        .then(client =>{
            console.log('Connected to database')
            db = client.db(dbName)
            collection = db.collection('movies')
        })

    app.listen(process.env.PORT || PORT, () => {
        console.log(`Server is running`)
    })
