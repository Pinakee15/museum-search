const express = require('express');
const cors = require('cors');
const app = express();

// Import files
const env =  require("../env/app.env");

// Apply middlewares
app.use(cors());
const jsonParser = express.json();
app.use(jsonParser);

app.listen(env.PORT, ()=>{
    console.log(`Server is listening on PORT : `, env.PORT);
})