const mongoose = require('mongoose')
const keys = require('./config/keys/keys.json')
const uri = keys.URI || process.env.URI

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

.then(db => console.log('[DB] Se ha conectado a mongodb'))
.catch(err => console.log(`[DB] Ha ocurrido un error: ${err}`))