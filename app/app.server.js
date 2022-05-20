const express = require('express');
const app = express();
const cors = require('cors');
const router = require('../router/app.router');

// Import files
const env =  require("../env/app.env");

// Apply middlewares
app.use(cors());
const jsonParser = express.json();
app.use(jsonParser);

// Routing
app.use('/api/', router)

app.listen(env.PORT, ()=>{
    console.log(`Server is listening on PORT : `, env.PORT);
})